import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme';
import { Workout } from '@/data/workout';

const CARD_HEIGHT = 120;
const IMAGE_WIDTH = 100;

interface WorkoutCardProps {
  workout: Workout;
  onPress: (workout: Workout) => void;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.workoutCard}
      onPress={() => onPress(workout)}
      activeOpacity={0.9}
    >
      {/* Favorite (star) icon in top-right corner */}
      <View style={styles.favoriteIconContainer}>
        <Ionicons name="star" size={18} color={theme.colors.accent} />
      </View>

      {/* Left side: text info */}
      <View style={styles.workoutInfo}>
        <Text style={styles.workoutTitle}>{workout.title}</Text>
        <Text style={styles.workoutSubText}>
          {workout.time} | {workout.calories} Kcal
        </Text>
        {workout.exercisesCount > 0 && (
          <Text style={styles.workoutSubText}>
            {workout.exercisesCount} Exercises
          </Text>
        )}
        <Text style={styles.workoutSnippet}>
          {workout.description.substring(0, 60)}...
        </Text>
      </View>

      {/* Right side: image with play icon */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: workout.imageUrl }}
          style={styles.workoutImage}
          resizeMode="cover"
        />
        <View style={styles.playButtonContainer}>
          <Ionicons name="play-circle" size={32} color={theme.colors.white} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  workoutCard: {
    flexDirection: 'row',
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.md,
    height: CARD_HEIGHT,
    marginBottom: theme.spacing.md,
    position: 'relative',
    overflow: 'hidden',
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: theme.spacing.xs,
    right: theme.spacing.xs,
    zIndex: 2,
  },
  workoutInfo: {
    flex: 1,
    padding: theme.spacing.md,
    justifyContent: 'center',
  },
  workoutTitle: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
  },
  workoutSubText: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeSmall,
  },
  workoutSnippet: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeSmall,
    marginTop: theme.spacing.xs,
  },
  imageContainer: {
    width: IMAGE_WIDTH,
    height: CARD_HEIGHT,
    overflow: 'hidden',
    borderTopRightRadius: theme.borderRadius.md,
    borderBottomRightRadius: theme.borderRadius.md,
  },
  workoutImage: {
    width: IMAGE_WIDTH,
    height: CARD_HEIGHT,
  },
  playButtonContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -16 }, { translateY: -16 }],
  },
});
