import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native';
import { theme } from '@/theme'; // Adjust the import path as needed
import { AuthHeader } from '@/components/auth/AuthHeader';
import { CustomButton } from '@/components/ui/CustomButton';
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';

export default function SetFingerprintScreen() {

    const router = useRouter();
  const handleBackPress = () => {
    console.log('Back pressed');
    // e.g., navigation.goBack()
  };

  const handleSkip = () => {
    console.log('Skip pressed');
    // Navigate to next screen or skip fingerprint setup
  };

  const handleContinue = () => {
    router.replace("/(setup)/main")
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        {/* Header */}
        <AuthHeader title="Set Your Fingerprint" onBackPress={handleBackPress} />

        {/* Description */}
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore.
        </Text>

        {/* Fingerprint Icon Section */}
        <View style={styles.fingerprintContainer}>
        <Image
            source={require('@/assets/images/Mark.png')}
            style={styles.fingerprintImage}
            resizeMode="contain"
          />
        </View>
       

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <CustomButton
            label="Skip"
            onPress={handleSkip}
            variant="outline"
            style={styles.skipButton}
          />
          <CustomButton
            label="Continue"
            onPress={handleContinue}
            variant="primary"
            style={styles.continueButton}
          />
        </View>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  description: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.md,
    alignItems: "center",
    marginVertical: 10,
  },
  fingerprintContainer: {
    backgroundColor: theme.colors.lightPurple, // Purple background
    borderRadius: theme.borderRadius.md,
    height: 250, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.lg,
  },
  fingerprintIcon: {
    fontSize: 100, // Placeholder icon size
    color: theme.colors.white,
  },
  buttonContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  skipButton: {
    marginBottom: theme.spacing.md,
  },
  continueButton: {
    // Additional styling if needed
  },
  fingerprintImage: {
    width: 120, // Adjust size as desired
    height: 120,
  },
});
