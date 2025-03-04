import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from 'react-native';
import { theme } from '@/theme';
import { CustomButton } from '@/components/ui/CustomButton';
import { useRouter } from 'expo-router';
import SafeAreaContainer from '@/components/ui/SafeAreaContainer';


export default function SetupScreen() {
    const router = useRouter();
    const handleNext = () => {
       router.replace("/(setup)/gender")
    };

    return (
        <SafeAreaContainer>
            <ImageBackground
                source={require('@/assets/setup/main.png')}
                style={styles.backgroundImage}
            >
                {/* Dark overlay to make text more visible if needed */}

            </ImageBackground>
            <View style={styles.overlay} />

            {/* Content Container */}
            <View style={styles.contentContainer}>
                <Text style={styles.headline}>Consistency Is The Key To Progress. Don’t Give Up!</Text>

                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Text>
                </View>

              
            </View>
            <View style={styles.nextButtonContainer}>
            <CustomButton
                    label="Next"
                    onPress={handleNext}
                    variant="primary"
                    style={styles.nextButton}
                />
                </View>
        </SafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1, // occupy the full screen
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
    },
    contentContainer: {
        marginTop: 30,
        paddingHorizontal: theme.spacing.lg,
        marginBottom: theme.spacing.xl * 1, // extra bottom padding
    },
    headline: {
        color: theme.colors.accent, // lime green (#E2F163)
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: theme.spacing.md,
    },
    subtitleContainer: {
        backgroundColor: theme.colors.lightPurple, // purple background
        borderRadius: theme.borderRadius.md,
        padding: theme.spacing.md,
        marginBottom: theme.spacing.md,
    },
    subtitle: {
        color: theme.colors.black,
        textAlign: 'center',
        fontSize: theme.typography.fontSizeSmall,
    },
    nextButtonContainer : {
        marginBottom: 100,
        alignItems: 'center',
        marginTop: 0,
        justifyContent: 'center',
    },
    nextButton: {
        width: '50%',
        borderRadius: theme.borderRadius.md,
        alignSelf: 'center', // or 'center' if you want the button centered
    },
});