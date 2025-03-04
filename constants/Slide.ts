// slidesData.ts

export interface SlideData {
    id: string;
    title: string;
    subtitle: string;
    image: any; // or ImageSourcePropType
  }
  
  export const slides: SlideData[] = [
    {
      id: '1',
      title: 'Start Your Journey Towards A More Active Lifestyle',
      subtitle: 'Swipe or tap "Next" to continue',
      image: require('../assets/onboarding/image1.png'),
    },
    {
      id: '2',
      title: 'Find Nutrition Tips That Fit Your Lifestyle',
      subtitle: 'Discover healthy meal plans',
      image: require('../assets/onboarding/image2.png'),
    },
    {
      id: '3',
      title: 'A Community For You, Challenge Yourself',
      subtitle: 'Get started on your fitness journey today',
      image: require('../assets/onboarding/image3.png'), 
    },
  ];
  