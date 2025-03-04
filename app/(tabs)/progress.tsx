import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/theme';
import { CustomButton } from '@/components/ui/CustomButton';

export default function ProgressScreen() {
  const handleViewDetails = () => {
    console.log('View Detailed Progress Pressed');
    // e.g., navigate to a detailed progress or history screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress</Text>
      <Text style={styles.subText}>
        Keep track of your workout history, achievements, and stats.
      </Text>

      {/* Placeholder for progress summary */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressTitle}>This Week</Text>
        <Text style={styles.progressValue}>Workouts Completed: 5</Text>
        <Text style={styles.progressValue}>Total Time: 2h 15m</Text>
      </View>

      {/* Example button to navigate to detailed logs */}
      <CustomButton
        label="View Details"
        onPress={handleViewDetails}
        variant="primary"
        style={styles.viewDetailsButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  subText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.lg,
  },
  progressContainer: {
    backgroundColor: theme.colors.lightPurple,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  progressTitle: {
    color: theme.colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  progressValue: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
    marginBottom: theme.spacing.xs,
  },
  viewDetailsButton: {
    alignSelf: 'flex-start',
  },
});
