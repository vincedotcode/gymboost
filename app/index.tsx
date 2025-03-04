// OnboardingScreen.tsx

import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { slides, SlideData } from '@/constants/Slide'; // Adjust path as needed
import { theme } from '@/theme'; // Your theme file
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';
const { width, height } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const flatListRef = useRef<FlatList<SlideData>>(null);
  const router = useRouter();
  // Handle scroll event to update current index
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(event.nativeEvent.contentOffset.x / slideSize);
    setCurrentIndex(index);
  };

  // Go to next slide or finish
  const handleNextPress = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      // Last slide reached, proceed to next screen (e.g., login or home)
      router.replace("/(auth)/login")
      // Navigate to next screen
    }
  };

  // Optional: render pagination dots
  const renderPaginationDots = () => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    );
  };

  // Render each onboarding slide
  const renderItem = ({ item }: { item: SlideData }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground source={item.image} style={styles.backgroundImage}>
          {/* Dark overlay to make text more visible */}
          <View style={styles.overlay} />

          {/* Centered content */}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <SafeAreaContainer>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Pagination dots */}
      {renderPaginationDots()}

      {/* Next / Get Started button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleNextPress}>
          <Text style={styles.buttonText}>
            {currentIndex === slides.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({

  slide: {
    width: width,
    height: height,
  },
  backgroundImage: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center',      // Centers content horizontally
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)', // Dark overlay
  },
  contentContainer: {
    // The content is already centered by the parent (backgroundImage)
    // Additional padding or styling can be applied here if needed
    paddingHorizontal: theme.spacing.lg,
    alignItems: 'center',
  },
  title: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeLarge,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeMedium,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  paginationContainer: {
    position: 'absolute',
    marginVertical: 20,
    bottom: theme.spacing.xl * 2.5, // Above the button
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.white,
    marginHorizontal: 4,
    opacity: 0.5,
  },
  activeDot: {
    opacity: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: theme.colors.accent, // e.g., lime green (#E2F163)
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
  },
  buttonText: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
    fontWeight: 'bold',
  },
});
