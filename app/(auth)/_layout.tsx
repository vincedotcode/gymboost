// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login"  options={{ headerShown: false }} />
      <Stack.Screen name="signup"  options={{ headerShown: false }} />
      <Stack.Screen name="fingerprint"  options={{ headerShown: false }} />

    </Stack>
  );
}
