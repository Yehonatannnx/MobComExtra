import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const Profile = () => {
  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to log out?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem("userSession");
            console.log("User logged out successfully!");
            router.push("/signin"); // Navigate back to the login screen
            Alert.alert("Success", "Logged out successfully!");
          } catch (error) {
            console.log("Error during logout: ", error);
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileEmail}>johndoe@gmail.com</Text>
          {/* Replace with dynamic name */}
        </View>

        {/* Options Section */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionText}>Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
            <Text style={styles.optionText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#3A5A40",
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  profileName: {
    fontSize: 18,
    color: "#ffffff",
    fontFamily: "Poppins_600SemiBold",
  },
  profileEmail: {
    fontSize: 14,
    color: "#ffffff",
    fontFamily: "Poppins_400Regular",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  optionButton: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 4,
  },
  optionText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
});
