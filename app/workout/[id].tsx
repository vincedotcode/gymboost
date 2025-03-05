// BeginnerWorkoutScreen.tsx
import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust path to your theme
import { WORKOUT } from '@/data/dummy'; // The dummy workout data
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';
import { useRouter } from 'expo-router';
export default function BeginnerWorkoutScreen() {
    const workout = WORKOUT;
    const router = useRouter();

    // Start button press handler
    const handleStart = () => {
        router.push({
            pathname: '/workout/flow',
            params: { workoutJson: JSON.stringify(workout) },
        });
    };

    return (
        <SafeAreaContainer>
            <View style={styles.container}>

                <ImageBackground
                    source={{ uri: workout.imageUrl }}
                    style={styles.topBanner}
                    resizeMode="cover"
                >
                    {/* Dark overlay to improve text contrast (optional) */}
                    <View style={styles.overlay} />

                    {/* Top info row */}
                    <View style={styles.topInfo}>
                        <Text style={styles.category}>{workout.category}</Text>
                        {/* e.g., Add an icon or label if you want */}
                    </View>

                    {/* Title & Stats */}
                    <View style={styles.bannerContent}>
                        <Text style={styles.bannerTitle}>{workout.title}</Text>
                        <View style={styles.statsRow}>
                            <Text style={styles.statsText}>{workout.time}</Text>
                            <Text style={styles.statsText}>{workout.calories} Kcal</Text>
                            <Text style={styles.statsText}>{workout.difficulty}</Text>
                        </View>
                    </View>
                </ImageBackground>

                {/* Rounds & Exercises */}
                <ScrollView contentContainerStyle={styles.roundsContainer}>
                    {workout.rounds.map((round) => (
                        <View key={round.id} style={styles.roundSection}>
                            <Text style={styles.roundTitle}>{round.name}</Text>
                            {round.exercises.map((exercise) => (
                                <View key={exercise.id} style={styles.exerciseRow}>
                                    {/* Play icon */}
                                    <View style={styles.playIconContainer}>
                                        <Ionicons name="play-circle" size={24} color={theme.colors.white} />
                                    </View>

                                    {/* Exercise details */}
                                    <View style={styles.exerciseDetails}>
                                        <Text style={styles.exerciseName}>{exercise.name}</Text>
                                        <Text style={styles.exerciseSub}>
                                            {exercise.time} | {exercise.reps}
                                        </Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))}

                    {/* Start button at bottom */}
                    <TouchableOpacity style={styles.startButton} onPress={handleStart}>
                        <Text style={styles.startButtonText}>Start</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
            {/* Top banner with image */}

        </SafeAreaContainer>
    );
}

// ------------------- STYLES -------------------
const BANNER_HEIGHT = 200;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black,
    },
    topBanner: {
        width: '100%',
        height: BANNER_HEIGHT,
        justifyContent: 'flex-end',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)', // optional overlay
    },
    topInfo: {
        position: 'absolute',
        top: theme.spacing.md,
        left: theme.spacing.md,
        flexDirection: 'row',
        alignItems: 'center',
    },
    category: {
        backgroundColor: theme.colors.lightPurple,
        color: theme.colors.black,
        paddingHorizontal: theme.spacing.sm,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.sm,
        fontWeight: '600',
        overflow: 'hidden',
    },
    bannerContent: {
        padding: theme.spacing.md,
    },
    bannerTitle: {
        color: theme.colors.white,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: theme.spacing.xs,
    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statsText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizeSmall,
        marginRight: theme.spacing.md,
    },
    roundsContainer: {
        paddingHorizontal: theme.spacing.lg,
        paddingTop: theme.spacing.md,
        paddingBottom: theme.spacing.xl,
    },
    roundSection: {
        marginBottom: theme.spacing.lg,
    },
    roundTitle: {
        color: theme.colors.accent,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: theme.spacing.sm,
    },
    exerciseRow: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.lightPurple,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.xs,
    },
    playIconContainer: {
        marginRight: theme.spacing.md,
    },
    exerciseDetails: {
        flex: 1,
    },
    exerciseName: {
        color: theme.colors.black,
        fontSize: theme.typography.fontSizeMedium,
        fontWeight: '600',
    },
    exerciseSub: {
        color: theme.colors.black,
        fontSize: theme.typography.fontSizeSmall,
    },
    startButton: {
        backgroundColor: theme.colors.accent,
        paddingVertical: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
        marginTop: theme.spacing.xl,
    },
    startButtonText: {
        color: theme.colors.black,
        fontWeight: 'bold',
        fontSize: theme.typography.fontSizeMedium,
    },
});
