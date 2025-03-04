import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/theme'; // Adjust path to your theme
import { CustomButton } from '@/components/ui/CustomButton'; // Adjust path

export default function HomeScreen() {
  const handleStartWorkout = () => {
    console.log('Start Workout Pressed');
  };

  return (
    <View style={styles.container}>
      {/* Welcome / Title */}
      <Text style={styles.welcomeTitle}>Welcome Back!</Text>
      <Text style={styles.subText}>
        Ready for today’s workout? Let’s get started!
      </Text>

      {/* Quick Start Button */}
      <CustomButton
        label="Today's Workout"
        onPress={handleStartWorkout}
        variant="primary"
        style={styles.workoutButton}
      />

      {/* Daily Stats (Placeholder) */}
      <View style={styles.statsContainer}>
        <Text style={styles.statsTitle}>Daily Stats</Text>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Streak:</Text>
          <Text style={styles.statsValue}>3 Days</Text>
        </View>
        <View style={styles.statsRow}>
          <Text style={styles.statsLabel}>Workouts This Week:</Text>
          <Text style={styles.statsValue}>5</Text>
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  welcomeTitle: {
    color: theme.colors.accent, // lime green
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  subText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.lg,
  },
  workoutButton: {
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.xl,
  },
  statsContainer: {
    backgroundColor: theme.colors.lightPurple,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
  },
  statsTitle: {
    color: theme.colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: theme.spacing.xs,
  },
  statsLabel: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
  },
  statsValue: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
    fontWeight: 'bold',
  },
});
