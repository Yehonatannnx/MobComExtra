import React, { useEffect, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";

SplashScreen.preventAutoHideAsync();

export default function Index() {
  const router = useRouter();

  const [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [error]);

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplashScreen();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image source={require("../assets/logo.png")} style={styles.img1} />
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title1}>E-Track Mo</Text>
      <Text style={styles.intro}>
        Track your income, monitor expenses, and manage your budget—all in one
        place.{"\n"}
        Stay on top of your spending and make smarter financial decisions every
        day.{"\n"}
      </Text>
      <Text style={styles.outro}>
        Let’s get started on your journey to financial freedom!
      </Text>

      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => router.push("/signin")}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 36,
    paddingTop: 4,
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 28,
    textAlign: "center",
    top: 0,
    color: "#3A5A40",
  },
  title1: {
    fontFamily: "Poppins_700Bold",
    fontSize: 36,
    marginBottom: 6,
    textAlign: "center",
    top: 0,
    color: "#3A5A40",
  },
  intro: {
    fontFamily: "Poppins_400Regular",
    textAlign: "center",
  },
  outro: {
    fontFamily: "Poppins_700Bold",
    textAlign: "center",
    marginBottom: 32,
    fontSize: 16,
    color: "#3A5A40",
  },
  img1: {
    height: 130,
    width: "100%",
    resizeMode: "contain",
    marginBottom: 16,
    marginTop: 16,
  },
  loginButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 12,
  },
  signUpButton: {
    backgroundColor: "#3A5A40",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 12,
  },
  loginText: {
    fontFamily: "Poppins_700Bold",
    color: "#000",
    fontSize: 16,
  },
  signUpText: {
    fontFamily: "Poppins_700Bold",
    color: "#fff",
    fontSize: 16,
  },
});
