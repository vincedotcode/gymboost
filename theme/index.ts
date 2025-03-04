// theme.js

// 1. Define your core color palette
const colorPalette = {
    white: '#FFFFFF',
    black: '#232323',
    limeGreen: '#E2F163',
    purple: '#896CFE',
    lightPurple: '#B3A0FF',
  };
  
  // 2. Create a theme object using your palette
  export const theme = {
    colors: {
      // Semantic color assignments
      primary: colorPalette.purple,
      secondary: colorPalette.lightPurple,
      accent: colorPalette.limeGreen,
  
      background: colorPalette.white,
      text: colorPalette.black,
      white: colorPalette.white,
      black: colorPalette.black,
      lightPurple: colorPalette.lightPurple,
  
      // Additional semantic keys (optional)
      success: '#4CAF50',    // Example success color
      warning: '#FF9800',    // Example warning color
      error: '#F44336',      // Example error color
    },
  
    // 3. Spacing scale
    spacing: {
      xs: 4,
      sm: 8,
      md: 16,
      lg: 24,
      xl: 32,
      xxl: 40, // Add more if needed
    },
  
    // 4. Typography
    typography: {
      fontSizeSmall: 14,
      fontSizeMedium: 16,
      fontSizeLarge: 20,
      fontSizeXLarge: 24,
      fontSizeXXLarge: 32,
  
      // Example font weights
      fontWeightLight: '300',
      fontWeightRegular: '400',
      fontWeightMedium: '500',
      fontWeightBold: '700',
  
      // Line heights
      lineHeightSmall: 18,
      lineHeightMedium: 22,
      lineHeightLarge: 28,
    },
  
    // 5. Border Radius
    borderRadius: {
      sm: 4,
      md: 8,
      lg: 16,
      xl: 24,
      round: 9999, // for fully rounded/pill shapes
    },
  
    // 6. Shadows (Android uses elevation, iOS uses shadow props)
    // Note: React Native doesn't support "box-shadow" exactly like CSS,
    // but we can define platform-specific shadows or 'elevation' for Android.
    shadows: {
      // Basic example shadow style (iOS + Android)
      sm: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2, // Android
      },
      md: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
      },
      lg: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 6,
      },
    },
  };
  