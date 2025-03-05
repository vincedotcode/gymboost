// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]"  options={{ headerShown: false }} />
      <Stack.Screen name="flow"  options={{ headerShown: false }} />

    </Stack>
  );
}
