// dummyData.ts

export interface Exercise {
    id: string;
    name: string;
    time: string; // e.g., "00:30"
    reps: string; // e.g., "Repetition 3x"
  }
  
  export interface Round {
    id: string;
    name: string; // e.g., "Round 1"
    exercises: Exercise[];
  }
  
  export interface WorkoutDetail {
    id: string;
    title: string;          // e.g., "Beginner"
    category: string;       // e.g., "Functional Training"
    time: string;           // e.g., "45 Minutes"
    calories: number;       // e.g., 1450
    difficulty: string;     // e.g., "Beginner"
    imageUrl: string;       // A large banner image
    rounds: Round[];
  }
  
  // Example workout data
  export const WORKOUT: WorkoutDetail = {
    id: 'beginner-001',
    title: 'Beginner',
    category: 'Functional Training',
    time: '45 Minutes',
    calories: 1450,
    difficulty: 'Beginner',
    imageUrl: 'https://via.placeholder.com/500x300.png?text=Beginner+Workout',
    rounds: [
      {
        id: 'round1',
        name: 'Round 1',
        exercises: [
          {
            id: 'ex1',
            name: 'Dumbbell Rows',
            time: '00:30',
            reps: 'Repetition 3x',
          },
          {
            id: 'ex2',
            name: 'Russian Twists',
            time: '00:30',
            reps: 'Repetition 3x',
          },
          {
            id: 'ex3',
            name: 'Squats',
            time: '00:30',
            reps: 'Repetition 3x',
          },
        ],
      },
      {
        id: 'round2',
        name: 'Round 2',
        exercises: [
          {
            id: 'ex4',
            name: 'Tabata Intervals',
            time: '00:30',
            reps: 'Repetition 4x',
          },
          {
            id: 'ex5',
            name: 'Bicycle Crunches',
            time: '00:30',
            reps: 'Repetition 2x',
          },
        ],
      },
    ],
  };
  