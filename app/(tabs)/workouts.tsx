// app/(tabs)/workouts.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust path if needed
import { useRouter } from 'expo-router';
// Category & Workout data
import { CATEGORIES, Category } from '@/data/categories';
import { WORKOUTS, Workout } from '@/data/workout';

// Card component
import { WorkoutCard } from '@/components/workouts/WorkoutListCard'; // Adjust path

const { width } = Dimensions.get('window');

export default function WorkoutsScreen() {
  // Default to the first category
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    CATEGORIES[0]
  );
  const router = useRouter();
  // Modal states
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

  // Switch selected category
  const handleSelectCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  // Open modal with workout details
  const handleSelectWorkout = (workout: Workout) => {
    setSelectedWorkout(workout);
    router.push(`/workout/${workout.id}`);
  };

  // Close modal
  const closeModal = () => {
    setModalVisible(false);
    setSelectedWorkout(null);
  };

  // Filter workouts for the selected category
  const filteredWorkouts = selectedCategory?.id === 'cat0'
  ? WORKOUTS // Show all workouts if category is 'cat0'
  : WORKOUTS.filter((w) => w.categoryId === selectedCategory?.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workouts</Text>
      <Text style={styles.subText}>Select a category or craft your own plan!</Text>

      {/* Horizontal Category Bar */}
      <View style={styles.categoryBar}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryBarContent}
        >
          {CATEGORIES.map((category) => {
            const isSelected = category.id === selectedCategory?.id;
            return (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryTab,
                  isSelected && styles.categoryTabSelected,
                ]}
                onPress={() => handleSelectCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryTabText,
                    isSelected && styles.categoryTabTextSelected,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* FlatList of Workout Cards */}
      <FlatList
        data={filteredWorkouts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.workoutListContent}
        renderItem={({ item }) => (
          <WorkoutCard
            workout={item}
            onPress={handleSelectWorkout}
          />
        )}
      />

      {/* Modal for workout details */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {selectedWorkout && (
              <>
                <Text style={styles.modalTitle}>{selectedWorkout.title}</Text>
                <ScrollView style={styles.modalContent}>
                  <Text style={styles.modalDescription}>
                    {selectedWorkout.description}
                  </Text>
                  <Text style={styles.modalDescription}>
                    Time: {selectedWorkout.time}
                  </Text>
                  <Text style={styles.modalDescription}>
                    Calories: {selectedWorkout.calories}
                  </Text>
                  {selectedWorkout.exercisesCount > 0 && (
                    <Text style={styles.modalDescription}>
                      Exercises: {selectedWorkout.exercisesCount}
                    </Text>
                  )}
                </ScrollView>

                {/* Close Modal */}
                <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
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
    marginBottom: theme.spacing.md,
  },
  categoryBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  categoryBarContent: {
    alignItems: 'center',
    paddingRight: theme.spacing.md,
  },
  categoryTab: {
    backgroundColor: theme.colors.lightPurple,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    marginRight: theme.spacing.sm,
  },
  categoryTabSelected: {
    borderWidth: 2,
    borderColor: theme.colors.accent,
  },
  categoryTabText: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
    fontWeight: '600',
  },
  categoryTabTextSelected: {
    color: theme.colors.black,
  },
  workoutListContent: {
    paddingBottom: theme.spacing.lg,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    maxHeight: '70%',
  },
  modalTitle: {
    color: theme.colors.black,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  modalContent: {
    marginBottom: theme.spacing.md,
  },
  modalDescription: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.xs,
  },
  closeButton: {
    backgroundColor: theme.colors.black,
    padding: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
  },
  closeButtonText: {
    color: theme.colors.white,
    fontWeight: 'bold',
  },
});
