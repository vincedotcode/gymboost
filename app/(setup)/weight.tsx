import React, { useRef, useState, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    NativeSyntheticEvent,
    NativeScrollEvent,
    Dimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust if needed
import { CustomButton } from '@/components/ui/CustomButton'; // Adjust if needed
const { width } = Dimensions.get('window');
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';

const ITEM_WIDTH = 50;
const SPACING = 20;
const SNAP_INTERVAL = ITEM_WIDTH + SPACING;

// Ranges for kg and lb (example values)
const KG_ARRAY = Array.from({ length: 171 }, (_, i) => i + 30); // 30..200
const LB_ARRAY = Array.from({ length: 375 }, (_, i) => i + 66); // 66..440

type UnitType = 'kg' | 'lb';

export default function WeightScreen() {
    const router = useRouter();
    const [unit, setUnit] = useState<UnitType>('kg'); // default to kg
    const [selectedWeight, setSelectedWeight] = useState<number>(75); // default weight
    const flatListRef = useRef<FlatList<number>>(null);

    // Decide which array to use based on the current unit
    const weights = unit === 'kg' ? KG_ARRAY : LB_ARRAY;

    // Convert the currently selected weight when user toggles unit
    // E.g., 1 kg = ~2.205 lb. This is optional. If you prefer resetting on toggle, remove this.
    useEffect(() => {
        if (unit === 'lb') {
            // Convert from kg to lb
            const approxLb = Math.round(selectedWeight * 2.205);
            if (LB_ARRAY.includes(approxLb)) {
                setSelectedWeight(approxLb);
            } else {
                // If out of range, clamp to nearest in LB_ARRAY
                setSelectedWeight(
                    Math.min(Math.max(approxLb, LB_ARRAY[0]), LB_ARRAY[LB_ARRAY.length - 1])
                );
            }
        } else {
            // Convert from lb to kg
            const approxKg = Math.round(selectedWeight / 2.205);
            if (KG_ARRAY.includes(approxKg)) {
                setSelectedWeight(approxKg);
            } else {
                // Clamp if out of range
                setSelectedWeight(
                    Math.min(Math.max(approxKg, KG_ARRAY[0]), KG_ARRAY[KG_ARRAY.length - 1])
                );
            }
        }
        // Scroll to new position (small delay to ensure FlatList has updated data)
        setTimeout(scrollToSelectedWeight, 100);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unit]);

    // Scroll the FlatList to the currently selected weight
    const scrollToSelectedWeight = () => {
        const index = weights.indexOf(selectedWeight);
        if (index !== -1 && flatListRef.current) {
            flatListRef.current.scrollToOffset({
                offset: index * SNAP_INTERVAL,
                animated: true,
            });
        }
    };

    const handleBack = () => {
       router.replace("/(setup)/age")
    };

    const handleUnitToggle = (newUnit: UnitType) => {
        setUnit(newUnit);
    };

    const handleContinue = () => {
    router.replace("/(setup)/height")        // Navigate to next step
    };

    // Determine which item is in center on scroll end
    const onMomentumScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / SNAP_INTERVAL);
        const w = weights[index];
        if (w) {
            setSelectedWeight(w);
        }
    };

    // Render each weight item in the FlatList
    const renderWeightItem = ({ item }: { item: number }) => {
        const isSelected = item === selectedWeight;
        return (
            <View
                style={[
                    styles.itemContainer,
                    isSelected && styles.itemContainerSelected,
                ]}
            >
                <Text style={[styles.itemText, isSelected && styles.itemTextSelected]}>
                    {item}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                {/* Back Button */}
                <View style={styles.backContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                        <Ionicons name="chevron-back" size={20} color={theme.colors.accent} />
                        <Text style={styles.backText}>Back</Text>
                    </TouchableOpacity>
                </View>

                {/* Title & Description */}
                <Text style={styles.title}>What Is Your Weight?</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </Text>


                {/* Centered Selected Age */}
                <View style={styles.ageContainer}>
                    <View style={styles.unitToggleContainer}>
                        <TouchableOpacity
                            style={[
                                styles.unitToggle,
                                unit === 'kg' && styles.unitToggleSelected,
                            ]}
                            onPress={() => handleUnitToggle('kg')}
                        >
                            <Text
                                style={[
                                    styles.unitToggleText,
                                    unit === 'kg' && styles.unitToggleTextSelected,
                                ]}
                            >
                                KG
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[
                                styles.unitToggle,
                                unit === 'lb' && styles.unitToggleSelected,
                            ]}
                            onPress={() => handleUnitToggle('lb')}
                        >
                            <Text
                                style={[
                                    styles.unitToggleText,
                                    unit === 'lb' && styles.unitToggleTextSelected,
                                ]}
                            >
                                LB
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.selectedAgeNumber}> {selectedWeight} {unit.toUpperCase()}</Text>
                    <View style={styles.pointerContainer}>
                        <Ionicons name="caret-up" size={28} color={theme.colors.accent} />
                    </View>
                    {/* Horizontal Age List */}
                    <View style={styles.listContainer}>

                        <FlatList
                            ref={flatListRef}
                            data={weights}
                            keyExtractor={(item) => item.toString()}
                            renderItem={renderWeightItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            snapToInterval={SNAP_INTERVAL}
                            snapToAlignment="center"
                            decelerationRate="fast"
                            onMomentumScrollEnd={onMomentumScrollEnd}
                            contentContainerStyle={{
                                paddingHorizontal: (width - ITEM_WIDTH) / 2,
                            }}
                            ItemSeparatorComponent={() => <View style={{ width: SPACING }} />}
                            onLayout={scrollToSelectedWeight} // scroll to initial position on mount
                        />
                    </View>

                </View>
                {/* Continue Button */}

            </View>
            <View style={styles.ButtonContainer}>
                <CustomButton
                    label="Continue"
                    onPress={handleContinue}
                    variant="primary"
                    style={styles.continueButton}
                />
            </View>
        </SafeAreaContainer>
    );
}

const ITEM_SIZE = 50; // width/height for each age item

const styles = StyleSheet.create({
    ageContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 70,
        height: '40%',
    },
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.lg,
        paddingTop: theme.spacing.xl,
    },
    backContainer: {
        marginBottom: theme.spacing.md,
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizeMedium,
    },
    itemTextSelected: {
        color: theme.colors.black,
        fontWeight: 'bold',
    },
    backText: {
        color: theme.colors.accent, // lime green
        fontSize: theme.typography.fontSizeMedium,
        marginLeft: theme.spacing.xs,
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_WIDTH,
        borderWidth: 2,
        borderColor: theme.colors.white,
        borderRadius: ITEM_WIDTH / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainerSelected: {
        backgroundColor: theme.colors.lightPurple,
        borderColor: 'transparent',
    },
    title: {
        color: theme.colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: theme.spacing.xs,
    },
    description: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizeSmall,
        marginBottom: theme.spacing.md,
    },
    selectedAgeNumber: {
        color: theme.colors.secondary,
        fontSize: 70,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: theme.spacing.sm,
    },
    listContainer: {
        marginBottom: theme.spacing.xl,
    },
    ageListContent: {
        alignItems: 'center', // vertically center each age item
    },
    unitToggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
        justifyContent: 'center', // center toggles horizontally
    },
    unitToggle: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        width: '30%',
        borderColor: theme.colors.white,
        paddingHorizontal: theme.spacing.lg,
        paddingVertical: theme.spacing.sm,
        marginHorizontal: theme.spacing.sm,
        borderRadius: theme.borderRadius.md,
    },
    unitToggleSelected: {
        backgroundColor: theme.colors.success,
        borderColor: 'transparent',
    },
    unitToggleText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizeMedium,
    },
    unitToggleTextSelected: {
        color: theme.colors.black,
        fontWeight: 'bold',
    },
    ageItem: {
        width: ITEM_SIZE,
        height: ITEM_SIZE,
        borderRadius: ITEM_SIZE / 2,
        borderWidth: 2,
        borderColor: theme.colors.white,
        marginHorizontal: theme.spacing.xs,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedAgeItem: {
        backgroundColor: theme.colors.lightPurple, // purple highlight
        borderColor: 'transparent',
    },
    ageText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizeMedium,
    },
    selectedAgeText: {
        color: theme.colors.black,
        fontWeight: 'bold',
    },
    continueButton: {
        alignSelf: 'center',
    },
    pointerContainer: {
        alignItems: 'center',
        marginBottom: theme.spacing.sm,
    },
    ButtonContainer: {
        marginVertical: 30,
    }
});
