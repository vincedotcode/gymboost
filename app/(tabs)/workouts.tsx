import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '@/theme'; // Adjust path to your theme
import { CustomButton } from '@/components/ui/CustomButton'; // Adjust path if needed

export default function WorkoutsScreen() {
  const handleViewAll = () => {
    console.log('View All Workouts Pressed');
    // e.g., navigate to a workout library screen or filter
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <Text style={styles.subText}>
        Browse and discover exercises or workout routines that fit your goals.
      </Text>

      {/* Placeholder for categories or workout lists */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Categories</Text>
        <Text style={styles.categoryItem}>Strength</Text>
        <Text style={styles.categoryItem}>Cardio</Text>
        <Text style={styles.categoryItem}>Flexibility</Text>
        {/* Add more categories or a scroll list if desired */}
      </View>

      <CustomButton
        label="View All Workouts"
        onPress={handleViewAll}
        variant="primary"
        style={styles.viewAllButton}
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
  categoryContainer: {
    backgroundColor: theme.colors.lightPurple,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.lg,
  },
  categoryTitle: {
    color: theme.colors.black,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  categoryItem: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
    marginBottom: theme.spacing.xs,
  },
  viewAllButton: {
    alignSelf: 'flex-start',
  },
});
