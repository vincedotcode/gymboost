import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme';
import { CustomButton } from '@/components/ui/CustomButton';

export default function ProfileScreen() {
  const handleEditProfile = () => {
    console.log('Edit Profile Pressed');
    // e.g., navigate to fill-profile or user info screen
  };

  const handleLogout = () => {
    console.log('Logout Pressed');
    // e.g., clear auth tokens or navigate to login screen
  };

  return (
    <View style={styles.container}>
      {/* Placeholder user info */}
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subText}>
        Manage your personal details and app settings here.
      </Text>

      <View style={styles.profileContainer}>
        <Ionicons name="person-circle" size={60} color={theme.colors.black} />
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileDetail}>johndoe@example.com</Text>
        <Text style={styles.profileDetail}>+1 234 567 8900</Text>

        <CustomButton
          label="Edit Profile"
          onPress={handleEditProfile}
          variant="outline"
          style={styles.editProfileButton}
          textStyle={styles.editProfileText}
        />
      </View>

      <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={20} color={theme.colors.accent} />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    padding: theme.spacing.lg,
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.accent,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing.sm,
  },
  subText: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.lg,
  },
  profileContainer: {
    backgroundColor: theme.colors.lightPurple,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    marginBottom: theme.spacing.lg,
  },
  profileName: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeMedium,
    fontWeight: 'bold',
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xs,
  },
  profileDetail: {
    color: theme.colors.black,
    fontSize: theme.typography.fontSizeSmall,
    marginBottom: theme.spacing.xs,
  },
  editProfileButton: {
    alignSelf: 'center',
    marginTop: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.accent,
  },
  editProfileText: {
    color: theme.colors.accent,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.spacing.md,
  },
  logoutText: {
    color: theme.colors.accent,
    fontSize: theme.typography.fontSizeMedium,
    marginLeft: theme.spacing.xs,
  },
});
