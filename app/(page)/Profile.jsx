import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
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
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.profileName}>John Doe </Text>
        {/* Replace with dynamic name */}
      </View>

      {/* Options Section */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton} onPress={handleLogout}>
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#3A5A40",
    padding: 16,
    alignItems: "center",
  },
  profileName: {
    fontSize: 24,
    color: "#ffffff",
    fontFamily: "Poppins_600SemiBold",
  },
  optionsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  optionButton: {
    backgroundColor: "#3A5A40",
    padding: 15,
    width: "80%",
    alignItems: "center",
    marginVertical: 10,
    borderRadius: 5,
  },
  optionText: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
});
