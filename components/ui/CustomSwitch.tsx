// src/components/ui/CustomSwitch.tsx

import React from 'react';
import { Switch, StyleSheet, View, Text, StyleProp, ViewStyle, TextStyle, SwitchProps } from 'react-native';
import { theme } from '../../theme';

interface CustomSwitchProps extends SwitchProps {
  label?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const CustomSwitch: React.FC<CustomSwitchProps> = ({
  label,
  value,
  onValueChange,
  containerStyle,
  labelStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <Switch
        trackColor={{
          false: theme.colors.secondary,
          true: theme.colors.accent,
        }}
        thumbColor={value ? theme.colors.white : theme.colors.black}
        ios_backgroundColor={theme.colors.secondary}
        onValueChange={onValueChange}
        value={value}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginRight: theme.spacing.sm,
    fontSize: theme.typography.fontSizeMedium,
    color: theme.colors.black,
  },
});
