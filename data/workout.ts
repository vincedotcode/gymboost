// workoutsData.ts

export interface Workout {
    id: string;
    categoryId: string; // reference to the category
    title: string;
    description: string;
  
    // NEW FIELDS for the card
    time: string; // e.g., "60 Minutes"
    calories: number; // e.g., 1320
    exercisesCount: number; // e.g., 5
    imageUrl: string; // link to a thumbnail image
  }
  
  export const WORKOUTS: Workout[] = [
    // Chest Workouts
    {
      id: 'w1',
      categoryId: 'cat1',
      title: 'Upper Body',
      description: 'Some longer description for the modal, if needed.',
      time: '60 Minutes',
      calories: 1320,
      exercisesCount: 5,
      imageUrl: 'https://placehold.co/400',
    },
    {
      id: 'w6',
      categoryId: 'cat1',
      title: 'Chest Pump',
      description: 'Bench press, incline press, and dips for a full chest workout.',
      time: '45 Minutes',
      calories: 950,
      exercisesCount: 4,
      imageUrl: 'https://placehold.co/400',
    },
  
    // Back Workouts
    {
      id: 'w2',
      categoryId: 'cat2',
      title: 'Boost Energy And Vitality',
      description: 'A short snippet about how exercise can boost energy.',
      time: '45 Minutes',
      calories: 900,
      exercisesCount: 4,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Energy',
    },
    {
      id: 'w3',
      categoryId: 'cat2',
      title: 'Pull Out',
      description: 'Deadlift, Pull-Ups, Cable Rows for a strong back.',
      time: '30 Minutes',
      calories: 1210,
      exercisesCount: 3,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Pull+Out',
    },
    {
      id: 'w7',
      categoryId: 'cat2',
      title: 'Back Attack',
      description: 'Lat pulldowns, deadlifts, and rows for complete back strength.',
      time: '50 Minutes',
      calories: 1150,
      exercisesCount: 4,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Back+Attack',
    },
  
    // Shoulder Workouts
    {
      id: 'w8',
      categoryId: 'cat3',
      title: 'Strong Shoulders',
      description: 'Military press, lateral raises, and shrugs for boulder shoulders.',
      time: '40 Minutes',
      calories: 850,
      exercisesCount: 3,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Strong+Shoulders',
    },
  
    // Arm Workouts
    {
      id: 'w9',
      categoryId: 'cat4',
      title: 'Arm Day Burn',
      description: 'Bicep curls, tricep dips, and hammer curls for massive arms.',
      time: '35 Minutes',
      calories: 720,
      exercisesCount: 3,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Arm+Day+Burn',
    },
  
    // Leg Workouts
    {
      id: 'w4',
      categoryId: 'cat5',
      title: 'Lower Body Blast',
      description: 'Squats, Lunges, and more for legs and glutes.',
      time: '50 Minutes',
      calories: 1100,
      exercisesCount: 4,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Lower+Body',
    },
    {
      id: 'w10',
      categoryId: 'cat5',
      title: 'Leg Day Power',
      description: 'Deadlifts, step-ups, and Bulgarian split squats for strong legs.',
      time: '60 Minutes',
      calories: 1300,
      exercisesCount: 5,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Leg+Day+Power',
    },
  
    // Glutes
    {
      id: 'w11',
      categoryId: 'cat6',
      title: 'Glute Sculpt',
      description: 'Hip thrusts, Romanian deadlifts, and band work for toned glutes.',
      time: '45 Minutes',
      calories: 980,
      exercisesCount: 4,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Glute+Sculpt',
    },
  
    // Abs & Core
    {
      id: 'w12',
      categoryId: 'cat7',
      title: 'Core Crusher',
      description: 'Planks, leg raises, and Russian twists for a strong core.',
      time: '30 Minutes',
      calories: 650,
      exercisesCount: 3,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Core+Crusher',
    },
  
    // Cardio
    {
      id: 'w13',
      categoryId: 'cat8',
      title: 'High-Intensity Cardio',
      description: 'Jump rope, sprint intervals, and stair climbs.',
      time: '40 Minutes',
      calories: 1200,
      exercisesCount: 4,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=High+Intensity+Cardio',
    },
  
    // Full Body
    {
      id: 'w5',
      categoryId: 'cat9',
      title: 'Avocado And Egg Toast',
      description: 'A healthy meal alternative. (Example of a different content)',
      time: '15 Minutes',
      calories: 150,
      exercisesCount: 0, // or ignore if it's a meal example
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Avocado+Toast',
    },
    {
      id: 'w14',
      categoryId: 'cat9',
      title: 'Full Body Blitz',
      description: 'Burpees, kettlebell swings, squats, and push-ups for a total workout.',
      time: '60 Minutes',
      calories: 1400,
      exercisesCount: 5,
      imageUrl: 'https://via.placeholder.com/200x150.png?text=Full+Body+Blitz',
    },
  
    // Functional Training
    {
      id: 'w15',
      categoryId: 'cat10',
      title: 'Athletic Conditioning',
      description: 'Box jumps, sled pushes, and battle ropes for explosive power.',
      time: '50 Minutes',
      calories: 1150,
      exercisesCount: 4,
      imageUrl: 'https://placehold.co/400',
    },
  
    // Mobility
    {
      id: 'w16',
      categoryId: 'cat11',
      title: 'Full Body Stretch',
      description: 'Yoga-based stretching to improve flexibility and recovery.',
      time: '30 Minutes',
      calories: 350,
      exercisesCount: 3,
      imageUrl: 'https://placehold.co/400',
    },
  
    // HIIT
    {
      id: 'w17',
      categoryId: 'cat12',
      title: 'HIIT Inferno',
      description: 'Short bursts of intense exercises like burpees, jump squats, and push-ups.',
      time: '30 Minutes',
      calories: 1000,
      exercisesCount: 4,
      imageUrl: 'https://placehold.co/400',
    },
  
    // ...And so on for each category
  ];
  