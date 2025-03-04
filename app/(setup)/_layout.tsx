// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="main"  options={{ headerShown: false }} />
      <Stack.Screen name="gender"  options={{ headerShown: false }} />
      <Stack.Screen name="age"  options={{ headerShown: false }} />
      <Stack.Screen name="weight"  options={{ headerShown: false }} />
      <Stack.Screen name="height"  options={{ headerShown: false }} />
      <Stack.Screen name="goals"  options={{ headerShown: false }} />
      <Stack.Screen name="profile"  options={{ headerShown: false }} />

    </Stack>
  );
}
