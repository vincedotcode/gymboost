import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust the import path to your theme

export const Header: React.FC = () => {
  // Handlers for icons (optional)
  const handleSearchPress = () => {
    console.log('Search Pressed');
  };

  const handleNotificationsPress = () => {
    console.log('Notifications Pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Hi, Vince</Text>
        <Text style={styles.subtitle}>It’s time to challenge your limits.</Text>
      </View>

      {/* Icons Container */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={handleSearchPress} style={styles.iconButton}>
          <Ionicons
            name="search-outline"
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNotificationsPress} style={styles.iconButton}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// ------------------- STYLES -------------------
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: theme.colors.black,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
  },
  textContainer: {
    flexDirection: 'column',
  },
  greetingText: {
    color: theme.colors.primary, // Purple or brand color
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    color: theme.colors.white,
    fontSize: theme.typography.fontSizeSmall,
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: theme.spacing.md,
  },
});
