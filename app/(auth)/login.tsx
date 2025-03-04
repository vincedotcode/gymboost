// LoginScreen.tsx

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { theme } from '@/theme'; // Adjust the import path as needed
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomButton } from '@/components/ui/CustomButton';
import { AuthHeader } from '@/components/auth/AuthHeader'; // Import the new AuthHeader
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/")
  };

  const handleForgotPassword = () => {
    // Navigate to Forgot Password screen
    console.log('Forgot Password pressed');
  };

  const handleSignUp = () => {
    router.replace("/(auth)/signup")
  };

  // Example back button callback
  const handleBackPress = () => {
    router.replace("/")
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        {/* Auth Header with Chevron and Title */}
        <AuthHeader title="Log In" onBackPress={handleBackPress} />

        <View style={styles.contentContainer}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.subText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>

        {/* Input Fields */}
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="example@example.com"
          placeholderTextColor={theme.colors.white}
          containerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
        />
        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={theme.colors.white}
          secureTextEntry
          containerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
        />

        {/* Forgot Password */}
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <CustomButton
          label="Log In"
          onPress={handleLogin}
          variant="primary"
          style={styles.loginButton}
        />

        {/* Social Logins */}
        <Text style={styles.orSignUpWith}>or sign up with</Text>
        <View style={styles.socialContainer}>
          {/* Placeholder for social buttons */}
          <CustomButton
            label="G"
            onPress={() => console.log('Google login')}
            variant="outline"
            style={styles.socialButton}
            textStyle={styles.socialButtonText}
          />
          <CustomButton
            label="Fb"
            onPress={() => console.log('Facebook login')}
            variant="outline"
            style={styles.socialButton}
            textStyle={styles.socialButtonText}
          />
        </View>

        {/* Sign Up Link */}
        <View style={styles.signUpContainer}>
          <Text style={styles.subText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signUpLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({

  contentContainer: {
    marginVertical: 50,
    alignItems: "center"
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  welcomeTitle: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
  },
  subText: {
    textAlign: "center",
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.md,
  },
  inputContainer: {
    marginBottom: theme.spacing.md,
  },
  inputStyle: {
    backgroundColor: theme.colors.lightPurple, // Light purple input background
    color: theme.colors.black,
  },
  forgotPassword: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    textAlign: 'right',
    marginBottom: theme.spacing.md,
  },
  loginButton: {
    marginBottom: theme.spacing.md,
  },
  orSignUpWith: {
    color: theme.colors.white,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  socialButton: {
    marginHorizontal: theme.spacing.sm,
    width: 60,
    height: 44,
  },
  socialButtonText: {
    // Possibly center the text or style differently
    color: theme.colors.primary,
    fontSize: 18,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpLink: {
    color: theme.colors.accent,
    fontWeight: 'bold',
  },
});
