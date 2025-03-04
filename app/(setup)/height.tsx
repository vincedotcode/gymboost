import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Slider from '@react-native-community/slider';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme';
import { CustomButton } from '@/components/ui/CustomButton';
import { useRouter } from 'expo-router';
const { width } = Dimensions.get('window');
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';


export default function HeightSelector() {
  const [heightValue, setHeightValue] = useState(165);
const router = useRouter();


  const handleBack = () => {
    router.replace("/(setup)/weight")  
};

  const handleContinue = () => {
router.replace("/(setup)/goals")    // Proceed to next step
  };

  return (
    <SafeAreaContainer>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backContainer} onPress={handleBack}>
          <Ionicons name="chevron-back" size={20} color={theme.colors.accent} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Select Your Height</Text>
      </View>
      
      {/* Main Content: Centered Height Display */}
      <View style={styles.mainContent}>
        <Text style={styles.heightDisplay}>{heightValue} cm</Text>
      </View>
      
      {/* Footer: Slider & Continue Button */}
      <View style={styles.footer}>
        <View style={styles.sliderContainer}>
          <Slider
            style={styles.slider}
            minimumValue={100}
            maximumValue={220}
            step={1}
            value={heightValue}
            onValueChange={setHeightValue}
            minimumTrackTintColor={theme.colors.accent}
            maximumTrackTintColor={theme.colors.white}
            thumbTintColor={theme.colors.accent}
          />
        </View>
        <CustomButton
          label="Continue"
          onPress={handleContinue}
          variant="primary"
          style={styles.continueButton}
        />
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({

  header: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  backText: {
    color: theme.colors.accent,
    fontSize: theme.typography.fontSizeMedium,
    marginLeft: theme.spacing.xs,
  },
  title: {
    color: theme.colors.white,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heightDisplay: {
    color: theme.colors.accent,
    fontSize: 64, // Big enough to grab attention
    fontWeight: 'bold',
  },
  footer: {
    paddingHorizontal: theme.spacing.lg,
    paddingBottom: theme.spacing.xl,
  },
  sliderContainer: {
    marginVertical: theme.spacing.lg,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  continueButton: {
    alignSelf: 'center',
    marginTop: theme.spacing.xl,
  },
});
