import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { theme } from '@/theme'; // Adjust path if needed
import { CustomInput } from '@/components/ui/CustomInput'; // Adjust path if needed
import { CustomButton } from '@/components/ui/CustomButton'; // Adjust path if needed
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';


export default function FillProfileScreen() {
    const [avatarSeed, setAvatarSeed] = useState<string>('JohnDoe');
    const [fullName, setFullName] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const router = useRouter();
    const handleBack = () => {
        router.replace("/(setup)/goals")
    };

    // Generate a random seed or logic to update the avatar
    const handleRefreshAvatar = () => {
        const randomSeed = Math.random().toString(36).substring(7); // e.g., random 5-char string
        setAvatarSeed(randomSeed);
    };

    const handleStart = () => {
        console.log('Profile Info:', { fullName, nickname, email, mobileNumber });
        router.replace("/(tabs)/home")
        // e.g., navigate to next screen or handle logic
    };

    // DiceBear avatar URL (PNG example). You can switch to 'svg' or other styles.
    const avatarUrl = `https://api.dicebear.com/9.x/bottts/png?seed=${avatarSeed}&size=256`;

    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backContainer} onPress={handleBack}>
                    <Ionicons name="chevron-back" size={20} color={theme.colors.accent} />
                    <Text style={styles.backText}>Back</Text>
                </TouchableOpacity>

                {/* Title & Description */}
                <Text style={styles.title}>Fill Your Profile</Text>
                <Text style={styles.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </Text>

                {/* Avatar + Refresh Icon */}
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: avatarUrl }}
                        style={styles.avatar}
                        resizeMode="contain"
                    />
                    <TouchableOpacity style={styles.refreshButton} onPress={handleRefreshAvatar}>
                        <Ionicons name="refresh" size={20} color={theme.colors.black} />
                    </TouchableOpacity>
                </View>

                {/* Input Fields */}
                <CustomInput
                    value={fullName}
                    onChangeText={setFullName}
                    placeholder="Full Name"
                    placeholderTextColor={theme.colors.white}
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle}
                />
                <CustomInput
                    value={nickname}
                    onChangeText={setNickname}
                    placeholder="Nickname"
                    placeholderTextColor={theme.colors.white}
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle}
                />
                <CustomInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor={theme.colors.white}
                    keyboardType="email-address"
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle}
                />
                <CustomInput
                    value={mobileNumber}
                    onChangeText={setMobileNumber}
                    placeholder="Mobile Number"
                    placeholderTextColor={theme.colors.white}
                    keyboardType="phone-pad"
                    containerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle}
                />

                {/* Start Button */}
                <View style={styles.continueContainer}>
                <CustomButton
                    label="Start"
                    onPress={handleStart}
                    variant="primary"
                    style={styles.startButton}
                />
                </View>
               
            </View>
        </SafeAreaContainer>
    );
}

// Styles
const AVATAR_SIZE = 100;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: theme.spacing.lg,
        paddingTop: theme.spacing.xl,
    },
    backContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: theme.spacing.md,
    },
    backText: {
        color: theme.colors.accent,
        fontSize: theme.typography.fontSizeMedium,
        marginLeft: theme.spacing.xs,
    },
    title: {
        color: theme.colors.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: theme.spacing.xs,
    },
    description: {
        color: theme.colors.white,
        fontSize: theme.typography.fontSizeSmall,
        marginBottom: theme.spacing.md,
    },
    avatarContainer: {
        alignSelf: 'center',
        marginBottom: theme.spacing.md,
        position: 'relative',
    },
    avatar: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE / 2,
        backgroundColor: theme.colors.white,
    },
    refreshButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        backgroundColor: theme.colors.accent, // lime green
        padding: theme.spacing.xs,
        borderRadius: theme.borderRadius.md,
    },
    inputContainer: {
        marginBottom: theme.spacing.md,
    },
    inputStyle: {
        backgroundColor: theme.colors.lightPurple,
        color: theme.colors.black,
    },
    startButton: {
        alignSelf: 'center',
        width: '50%',
        marginTop: theme.spacing.lg,
    },
    continueContainer:{ 
        marginVertical: 30,
    }
});
