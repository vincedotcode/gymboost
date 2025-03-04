import React from 'react';
import { View, KeyboardAvoidingView, Platform, ScrollView, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '@/theme';
const { height } = Dimensions.get('window');

interface SafeAreaContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
}

const SafeAreaContainer: React.FC<SafeAreaContainerProps> = ({ children, scrollable = false }) => {
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: theme.colors.black }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {scrollable ? (
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, minHeight: height }}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View style={{ flex: 1 }}>{children}</View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SafeAreaContainer;
