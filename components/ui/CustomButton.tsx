// src/components/ui/CustomButton.tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, StyleProp, ViewStyle, TextStyle, TouchableOpacityProps } from 'react-native';
import { theme } from '../../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface CustomButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  variant?: ButtonVariant;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onPress,
  variant = 'primary',
  style,
  textStyle,
  disabled = false,
  ...props
}) => {
  const buttonStyle = [
    styles.baseButton,
    variantStyles[variant],
    disabled && styles.disabledButton,
    style,
  ];

  const labelStyle = [
    styles.baseLabel,
    variantLabelStyles[variant],
    disabled && styles.disabledLabel,
    textStyle,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyle}
      disabled={disabled}
      {...props}
    >
      <Text style={labelStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseLabel: {
    fontSize: theme.typography.fontSizeMedium,
    fontWeight: '600',
  },
  disabledButton: {
    opacity: 0.5,
  },
  disabledLabel: {
    opacity: 0.8,
  },
});

const variantStyles = StyleSheet.create({
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
});

const variantLabelStyles = StyleSheet.create({
  primary: {
    color: theme.colors.white,
  },
  secondary: {
    color: theme.colors.black,
  },
  outline: {
    color: theme.colors.primary,
  },
});
