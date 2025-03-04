import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ListRenderItem,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust path if needed
import { CustomButton } from '@/components/ui/CustomButton'; // Adjust path if needed
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';

export default function AgeScreen() {
    const [selectedAge, setSelectedAge] = useState<number>(28);
    const router = useRouter();
    // Example array of ages (in your mockup, it's 26 to 30)
    const ages = Array.from({ length: 91 }, (_, i) => i + 10);

    const handleBack = () => {
        router.replace("/(setup)/gender")
        // e.g., navigation.goBack()
    };

    const handleSelectAge = (age: number) => {
        setSelectedAge(age);
    };

    const handleContinue = () => {
        router.replace("/(setup)/weight")        // Navigate to the next setup step
    };

    // Renders each age item in the horizontal list
    const renderAgeItem: ListRenderItem<number> = ({ item }) => {
        const isSelected = item === selectedAge;
        return (
            <TouchableOpacity
                style={[styles.ageItem, isSelected && styles.selectedAgeItem]}
                onPress={() => handleSelectAge(item)}
            >
                <Text style={[styles.ageText, isSelected && styles.selectedAgeText]}>
                    {item}
                </Text>
            </TouchableOpacity>
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
                <Text style={styles.title}>How Old Are You?</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </Text>

                {/* Centered Selected Age */}
                <View style={styles.ageContainer}>

                    <Text style={styles.selectedAgeNumber}>{selectedAge}</Text>
                    <View style={styles.pointerContainer}>
                        <Ionicons name="caret-up" size={28} color={theme.colors.accent} />
                    </View>
                    {/* Horizontal Age List */}
                    <View style={styles.listContainer}>

                        <FlatList
                            data={ages}
                            keyExtractor={(item) => item.toString()}
                            renderItem={renderAgeItem}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={styles.ageListContent}
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
    backText: {
        color: theme.colors.accent, // lime green
        fontSize: theme.typography.fontSizeMedium,
        marginLeft: theme.spacing.xs,
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
