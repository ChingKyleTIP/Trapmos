import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

export default function SplashScreen({ navigation }) {
  const [logoOpacity] = useState(new Animated.Value(0));
  const [logoScale] = useState(new Animated.Value(0.8));

  useEffect(() => {
    // Start animations
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.timing(logoScale, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    // Navigate to the Login screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("Login"); // Ensure navigation works correctly
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../images/trapmos.png")}
        style={[styles.logo, { opacity: logoOpacity, transform: [{ scale: logoScale }] }]}
      />
      <Text style={styles.tagline}>We Trap, We Mark, and We Define.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  tagline: {
    marginTop: 20,
    fontSize: 16,
    color: "#333333",
    fontWeight: "bold",
  },
});
