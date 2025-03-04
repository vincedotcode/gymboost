// src/components/ui/CustomInput.tsx

import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from 'react-native';
import { theme } from '../../theme';

interface CustomInputProps extends TextInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  errorMessage?: string;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  errorMessage = '',
  containerStyle,
  inputStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={[styles.input, errorMessage && styles.errorInput, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondary}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        {...props}
      />
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: theme.spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: theme.borderRadius.sm,
    padding: theme.spacing.md,
    fontSize: theme.typography.fontSizeMedium,
    color: theme.colors.black,
    backgroundColor: theme.colors.white,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    marginTop: theme.spacing.xs,
    color: 'red',
    fontSize: theme.typography.fontSizeSmall,
  },
});
