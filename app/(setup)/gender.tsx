import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust import path as needed
import { CustomButton } from '@/components/ui/CustomButton'; // Adjust import if needed
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';

export default function GenderScreen() {
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(
    null
  );

  const router = useRouter();

  const handleBack = () => {
    router.replace("/(setup)/main")
    // e.g., navigation.goBack()
  };

  const handleSelectGender = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
  };

  const handleContinue = () => {

    router.replace("/(setup)/age")
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        {/* Header with "Back" text */}
        <TouchableOpacity style={styles.backContainer} onPress={handleBack}>
  <Ionicons name="chevron-back" size={20} color={theme.colors.accent} />
  <Text style={styles.backText}>Back</Text>
</TouchableOpacity>

        {/* Title & Description */}
        <Text style={styles.title}>What’s Your Gender</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

        {/* Gender Selection Row */}
        <View style={styles.genderRow}>
          {/* Male */}
          <TouchableOpacity
            style={[
              styles.circle,
              selectedGender === 'male' ? styles.selectedCircle : styles.unselectedCircle,
            ]}
            onPress={() => handleSelectGender('male')}
          >
            <Ionicons
              name="male"
              size={60}
              color={selectedGender === 'male' ? theme.colors.black : theme.colors.white}
            />
          </TouchableOpacity>
          <Text style={styles.genderLabel}>Male</Text>

          {/* Female */}
          <TouchableOpacity
            style={[
              styles.circle,
              selectedGender === 'female' ? styles.selectedCircle : styles.unselectedCircle,
            ]}
            onPress={() => handleSelectGender('female')}
          >
            <Ionicons
              name="female"
              size={60}
              color={selectedGender === 'female' ? theme.colors.black : theme.colors.white}
            />
          </TouchableOpacity>
          <Text style={styles.genderLabel}>Female</Text>
        </View>

       <View style={styles.continueButtonContainer}>
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

const CIRCLE_SIZE = 125;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  backText: {
    color: theme.colors.accent, // Lime green
    fontSize: theme.typography.fontSizeMedium,
    marginLeft: theme.spacing.xs, // space between icon and text
  },
  title: {
    color: theme.colors.white,
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
  },
  description: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.lg,
  },
  genderRow: {
    height: '60%',
    flexDirection: 'column',
    justifyContent: "space-around",
    alignItems: 'center',
    marginBottom: theme.spacing.xl,
  },
  circle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.sm,
  },
  selectedCircle: {
    backgroundColor: theme.colors.accent, // Lime green fill
  },
  unselectedCircle: {
    backgroundColor: theme.colors.black,
    borderWidth: 2,
    borderColor: theme.colors.white,
  },
  genderLabel: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeMedium,
    textAlign: 'center',
  },
  continueButton: {
    alignSelf: 'center',
  },
  continueButtonContainer:{
    marginVertical: 30,
  }
});
