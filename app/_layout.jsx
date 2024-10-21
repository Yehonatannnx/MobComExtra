import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import { SQLiteProvider } from "expo-sqlite";
import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from "@expo-google-fonts/poppins";

const initializeDatabase = async (db) => {
  try {
    await db.execAsync(
      `PRAGMA journal_mode = WAL;
      PRAGMA foreign_keys = ON;

      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL
      );

      CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        balance INTEGER DEFAULT 1,
        income INTEGER DEFAULT 1,
        expense INTEGER DEFAULT 1,
        user_id INTEGER
      );

      CREATE TABLE IF NOT EXISTS income_categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT DEFAULT "Untitled" NOT NULL,
        user_id INTEGER
      );

      CREATE TABLE IF NOT EXISTS expense_categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT DEFAULT "Untitled" NOT NULL,
        user_id INTEGER
      );

      CREATE TABLE IF NOT EXISTS accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT DEFAULT "Untitled" NOT NULL,
        balance INTEGER DEFAULT 0,
        user_id INTEGER
      );

      CREATE TABLE IF NOT EXISTS budgets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        budget INTEGER DEFAULT 0,
        balance INTEGER DEFAULT 0,
        user_id INTEGER,
        expense_id INTEGER
      );
      `
    );
    console.log("Database initialized!");
  } catch (error) {
    console.log("Error while initializing the database: ", error);
  }
};

const checkUserSession = async () => {
  try {
    const userSession = await AsyncStorage.getItem("userSession");
    console.log("User session:", userSession); // Log the user session
    if (userSession) {
      // Navigate to the home screen if a session is found
      console.log("Session found, navigating to home."); // Log session found
      router.push("/home");
    } else {
      console.log("No session found, staying on current screen."); // Log no session found
    }
  } catch (error) {
    console.log("Error checking user session: ", error);
  }
};

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [isReady, setIsReady] = useState(false);
  const [fontsLoaded, error] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  useEffect(() => {
    // Check for user session only after the app is ready
    if (isReady) {
      checkUserSession();
    }
  }, [isReady]);

  useEffect(() => {
    if (error) {
      console.error("Error loading fonts:", error);
    }
  }, [error]);

  useEffect(() => {
    async function prepareApp() {
      if (fontsLoaded) {
        // Hide the splash screen and set the app as ready
        await SplashScreen.hideAsync();
        setIsReady(true);
      }
    }
    prepareApp();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SQLiteProvider databaseName="etrackmo.db" onInit={initializeDatabase}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(forms)" options={{ headerShown: false }} />
        <Stack.Screen name="(page)" options={{ headerShown: false }} />
      </Stack>
    </SQLiteProvider>
  );
};

export default RootLayout;
