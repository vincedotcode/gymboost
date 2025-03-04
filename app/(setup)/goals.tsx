import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust if needed
import { CustomButton } from '@/components/ui/CustomButton'; // Adjust if needed
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';


const GOALS = [
    'Lose Weight',
    'Gain Weight',
    'Muscle Mass Gain',
    'Shape Body',
    'Others',
];

export default function GoalScreen() {
    const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
    const router = useRouter();
    const handleBack = () => {
        router.replace("/(setup)/height")
        // e.g., navigation.goBack()
    };

    const handleSelectGoal = (goal: string) => {
        setSelectedGoal(goal);
    };

    const handleContinue = () => {
        router.replace("/(setup)/profile")
    };

    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backContainer} onPress={handleBack}>
                    <Ionicons name="chevron-back" size={20} color={theme.colors.accent} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                {/* Title & Description */}
                <Text style={styles.title}>What Is Your Goal?</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </Text>

                {/* Purple Container for Goals */}
                <View style={styles.goalsContainer}>
                    {GOALS.map((goal) => {
                        const isSelected = goal === selectedGoal;
                        return (
                            <TouchableOpacity
                                key={goal}
                                style={styles.goalRow}
                                onPress={() => handleSelectGoal(goal)}
                            >
                                {/* Goal Text */}
                                <Text style={styles.goalText}>{goal}</Text>

                                {/* Radio Circle */}
                                <View
                                    style={[
                                        styles.radioCircle,
                                        isSelected && styles.radioCircleSelected,
                                    ]}
                                >
                                    {isSelected && <View style={styles.radioCircleInner} />}
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>

                {/* Continue Button */}
                <View style={styles.ButtonContainer}>
                    <CustomButton
                        label="Continue"
                        onPress={handleContinue}
                        variant="primary"
                        style={styles.continueButton}
                    />
                </View>

            </View>
        </SafeAreaContainer>
    );
}

// Styles
const RADIO_SIZE = 24;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.lg,
        paddingTop: theme.spacing.xl,
    },
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    },
    backText: {
        color: theme.colors.accent,
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
    goalsContainer: {
        height: '60%',
        justifyContent: 'space-around',
        backgroundColor: theme.colors.lightPurple,
        borderRadius: theme.borderRadius.md,
        marginVertical: theme.spacing.md,
        padding: theme.spacing.md,
    },
    goalRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: theme.spacing.md,
        borderWidth: 1,
        borderColor: theme.colors.white,
        padding: 10,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.md

    },
    goalText: {
        color: theme.colors.black,
        fontSize: theme.typography.fontSizeLarge,
        fontWeight: 600,
        flex: 1,
        marginRight: theme.spacing.md,
    },
    radioCircle: {
        width: RADIO_SIZE,
        height: RADIO_SIZE,
        borderRadius: RADIO_SIZE / 2,
        borderWidth: 2,
        borderColor: theme.colors.black,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightPurple,
    },
    radioCircleSelected: {
        borderColor: theme.colors.black,
    },
    radioCircleInner: {
        width: RADIO_SIZE / 2,
        height: RADIO_SIZE / 2,
        borderRadius: RADIO_SIZE / 4,
        backgroundColor: theme.colors.black,
    },
    continueButton: {
        alignSelf: 'center',
    },
    ButtonContainer: {
        marginVertical: 30,
    }
});
