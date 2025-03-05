// Continued from BeginnerWorkoutFlowScreen.tsx

// BeginnerWorkoutFlowScreen.tsx
import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '@/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';


interface Exercise {
    id: string;
    name: string;
    time: string; // "00:30"
    reps: string; // "Repetition 3x"
}

interface Round {
    id: string;
    name: string;
    exercises: Exercise[];
}

interface WorkoutDetail {
    id: string;
    title: string;
    category: string;
    time: string;
}


interface WorkoutDetail {
    id: string;
    title: string;
    category: string;
    time: string;
    calories: number;
    difficulty: string;
    imageUrl: string;
    rounds: Round[];
}

export default function BeginnerWorkoutFlowScreen() {
    const router = useRouter();
    const { workoutJson } = useLocalSearchParams(); // The workout JSON from the route params

    // Parse the workout data
    const workout: WorkoutDetail = workoutJson
        ? JSON.parse(workoutJson as string)
        : null;

    // Flatten all exercises from all rounds
    const allExercises: Exercise[] = workout
        ? workout.rounds.flatMap((r) => r.exercises)
        : [];

    // Current exercise index
    const [exerciseIndex, setExerciseIndex] = useState<number>(0);

    // Timer-related states
    const [timeLeft, setTimeLeft] = useState<number>(30); // default 30s
    const [isPaused, setIsPaused] = useState<boolean>(false);

    // If an exercise has a "time" like "00:30", parse the seconds
    const parseTimeToSeconds = (timeString: string) => {
        // e.g. "00:30" → 30
        const [mm, ss] = timeString.split(':');
        return parseInt(mm, 10) * 60 + parseInt(ss, 10);
    };

    // On mount or whenever the exerciseIndex changes, reset the timer
    useEffect(() => {
        if (allExercises[exerciseIndex]) {
            const currentTimeString = allExercises[exerciseIndex].time; // e.g. "00:30"
            setTimeLeft(parseTimeToSeconds(currentTimeString));
            setIsPaused(false);
        }
    }, [exerciseIndex]);

    // Interval ref
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Timer logic
    useEffect(() => {
        // If paused, clear interval
        if (isPaused) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = null;
            return;
        }

        // Otherwise, start the interval
        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    // Move to next exercise automatically
                    handleNext();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // Cleanup
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, exerciseIndex]);

    // Move to next exercise
    const handleNext = () => {
        if (exerciseIndex < allExercises.length - 1) {
            setExerciseIndex(exerciseIndex + 1);
        } else {
            // End of workout
            console.log('Workout complete!');
            router.back(); // or navigate to a "Congrats" screen
        }
    };

    // Toggle pause/resume
    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    // Current exercise
    const currentExercise = allExercises[exerciseIndex];

    if (!workout || !currentExercise) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>No workout data found.</Text>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    // Format the timeLeft as mm:ss
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(
        seconds
    ).padStart(2, '0')}`;

    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Ionicons
                        name="arrow-back"
                        size={24}
                        color={theme.colors.white}
                        onPress={() => router.back()}
                    />
                    <Text style={styles.headerTitle}>{workout.title} Flow</Text>
                    <View style={{ width: 24 }} /> {/* placeholder for spacing */}
                </View>

                {/* Progress */}
                <Text style={styles.progressText}>
                    Exercise {exerciseIndex + 1} of {allExercises.length}
                </Text>

                {/* Current Exercise */}
                <View style={styles.exerciseContainer}>
                    <Text style={styles.exerciseName}>{currentExercise.name}</Text>
                    <Text style={styles.exerciseSub}>{currentExercise.reps}</Text>
                    <Text style={styles.exerciseSub}>Time: {currentExercise.time}</Text>
                </View>

                {/* Timer */}
                <Text style={styles.timerText}>{formattedTime}</Text>

                {/* Controls */}
                <View style={styles.controlsRow}>
                    <TouchableOpacity style={styles.pauseButton} onPress={handlePauseResume}>
                        <Text style={styles.pauseButtonText}>
                            {isPaused ? 'Resume' : 'Pause'}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                        <Text style={styles.nextButtonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaContainer>

    );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.black,
        padding: theme.spacing.lg,
        paddingTop: theme.spacing.xl,
    },
    errorText: {
        color: theme.colors.accent,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: theme.spacing.md,
    },
    backButton: {
        backgroundColor: theme.colors.accent,
        padding: theme.spacing.md,
        borderRadius: theme.borderRadius.md,
        alignItems: 'center',
    },
    backButtonText: {
        color: theme.colors.black,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    },
    headerTitle: {
        color: theme.colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: theme.spacing.sm,
        flex: 1,
    },
    progressText: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizeSmall,
        marginBottom: theme.spacing.md,
    },
    exerciseContainer: {
        backgroundColor: theme.colors.lightPurple,
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },
    exerciseName: {
        color: theme.colors.black,
        fontSize: theme.typography.fontSizeMedium,
        fontWeight: 'bold',
        marginBottom: theme.spacing.xs,
    },
    exerciseSub: {
        color: theme.colors.black,
        fontSize: theme.typography.fontSizeSmall,
        marginBottom: theme.spacing.xs,
    },
    timerText: {
        color: theme.colors.accent,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: theme.spacing.md,
    },
    controlsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: theme.spacing.lg,
    },
    pauseButton: {
        backgroundColor: theme.colors.white,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.xl,
        borderRadius: theme.borderRadius.md,
    },
    pauseButtonText: {
        color: theme.colors.black,
        fontWeight: 'bold',
        fontSize: theme.typography.fontSizeSmall,
    },
    nextButton: {
        backgroundColor: theme.colors.accent,
        paddingVertical: theme.spacing.md,
        paddingHorizontal: theme.spacing.xl,
        borderRadius: theme.borderRadius.md,
    },
    nextButtonText: {
        color: theme.colors.black,
        fontWeight: 'bold',
        fontSize: theme.typography.fontSizeSmall,
    },
});
