import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'; 
import { theme } from '@/theme'; 

interface AuthHeaderProps {
  title: string;
  onBackPress: () => void;
}

export const AuthHeader: React.FC<AuthHeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={onBackPress}>
        <Ionicons name="chevron-back" size={24} color={theme.colors.accent} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 24 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  iconContainer: {
    paddingRight: theme.spacing.sm,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: theme.colors.accent, // Lime green (#E2F163)
    fontSize: 24,
    fontWeight: 'bold',
  },
});
