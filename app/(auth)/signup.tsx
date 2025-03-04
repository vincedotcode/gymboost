import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { theme } from '@/theme'; // Adjust the import path to your theme
import { AuthHeader } from '@/components/auth/AuthHeader'; // Adjust the path if needed
import { CustomInput } from '@/components/ui/CustomInput';
import { CustomButton } from '@/components/ui/CustomButton';
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';

export default function SignUpScreen() {
  const [fullName, setFullName] = useState('');
  const [emailOrMobile, setEmailOrMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  // Example back button callback
  const handleBackPress = () => {
    router.replace("/(auth)/login")
  };

  const handleSignUp = () => {
    router.replace("/(auth)/fingerprint")

  };

  const handleLogIn = () => {
    router.replace("/(auth)/login")
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign up');
  };

  const handleFacebookSignUp = () => {
    console.log('Facebook sign up');
  };

  return (
    <SafeAreaContainer>
      <View style={styles.container}>
        <AuthHeader title="Create Account" onBackPress={handleBackPress} />

       <View style={styles.contentMain}>
       <Text style={styles.subTitle}>Let’s Start!</Text>
       </View>

        <CustomInput
          value={fullName}
          onChangeText={setFullName}
          placeholder="Full name"
          placeholderTextColor={theme.colors.white}
          containerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
        />

        <CustomInput
          value={emailOrMobile}
          onChangeText={setEmailOrMobile}
          placeholder="Email or Mobile Number"
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

        <CustomInput
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
          placeholderTextColor={theme.colors.white}
          secureTextEntry
          containerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
        />

        <Text style={styles.termsText}>
          By continuing, you agree to our{' '}
          <Text style={styles.linkText}>Terms of Use</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>

        <CustomButton
          label="Sign Up"
          onPress={handleSignUp}
          variant="primary"
          style={styles.signUpButton}
        />

        <View style={styles.socialContainer}>
          <CustomButton
            label="G"
            onPress={handleGoogleSignUp}
            variant="outline"
            style={styles.socialButton}
            textStyle={styles.socialButtonText}
          />
          <CustomButton
            label="Fb"
            onPress={handleFacebookSignUp}
            variant="outline"
            style={styles.socialButton}
            textStyle={styles.socialButtonText}
          />
        </View>

        {/* Already have an account? Log In */}
        <View style={styles.loginContainer}>
          <Text style={styles.subText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleLogIn}>
            <Text style={styles.logInLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.black, 
  },
  contentMain: {
marginVertical: 30,
alignItems: "center"
  },
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.xl,
  },
  subTitle: {
    color: theme.colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.md,
  },
  inputContainer: {
    marginBottom: theme.spacing.md,
  },
  inputStyle: {
    backgroundColor: theme.colors.lightPurple,
    color: theme.colors.black,
  },
  termsText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.md,
  },
  linkText: {
    color: theme.colors.accent, 
    textDecorationLine: 'underline',
  },
  signUpButton: {
    marginBottom: theme.spacing.md,
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
    color: theme.colors.primary,
    fontSize: 18,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
  },
  logInLink: {
    color: theme.colors.accent,
    fontWeight: 'bold',
  },
});
