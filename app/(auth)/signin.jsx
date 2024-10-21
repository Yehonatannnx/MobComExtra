import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { useSQLiteContext } from "expo-sqlite";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye-off");

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    setRightIcon(passwordVisibility ? "eye" : "eye-off");
  };

  const db = useSQLiteContext();

  const handleLogin = async () => {
    if (emailOrUsername.length === 0 || password.length === 0) {
      Alert.alert("Error", "Please enter all fields");
      return;
    }

    try {
      const user = await db.getFirstAsync(
        "SELECT * FROM users WHERE (email = ? OR username = ?) AND password = ?",
        [emailOrUsername, emailOrUsername, password]
      );
      if (user) {
        // Save the user session
        const userSession = { user_id: user.id };
        await AsyncStorage.setItem("userSession", JSON.stringify(userSession));
        console.log("User logged in successfully!");
        console.log(`User ID: ${userSession.user_id}`);
        Alert.alert("Success", "User logged in successfully!");
        router.push("/home");
      } else {
        Alert.alert("Error", "Invalid login credentials!");
      }
    } catch (error) {
      console.log("Error during login: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: "flex-start", width: 150 }}>
        <Image
          source={require("../../assets/etrackmo.png")}
          style={styles.img}
        />
      </View>
      <Image source={require("../../assets/cash.png")} style={styles.img1} />
      <Text style={styles.title}>Login</Text>
      <Text style={styles.label}>Email or Username</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="account"
          size={22}
          color="#232323"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Email or Username"
          value={emailOrUsername}
          onChangeText={setEmailOrUsername}
        />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons
          name="lock"
          size={22}
          color="#232323"
          style={styles.icon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={passwordVisibility}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={handlePasswordVisibility}
          style={styles.icon}
        >
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.signUp}>
        Don't have an account?
        <Link href="/signup" style={{ color: "#007BFF" }}>
          {" "}
          Sign Up
        </Link>
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    padding: 36,
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: 26,
    marginBottom: 12,
    textAlign: "center",
    top: 0,
    color: "#3A5A40",
  },
  label: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 4,
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#f3f3f3",
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    height: 50,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    color: "grey",
    fontSize: 14,
  },
  forgotPassword: {
    fontFamily: "Poppins_400Regular",
    color: "#007BFF",
    textAlign: "right",
    marginBottom: 20,
    fontSize: 12,
  },
  signUp: {
    fontFamily: "Poppins_600SemiBold",
    color: "#000",
    textAlign: "center",
    marginTop: 20,
    fontSize: 15,
  },
  img: {
    width: "100%",
    height: 50,
    resizeMode: "contain",
    left: 0,
    marginBottom: 16,
  },
  img1: {
    height: 130,
    width: "100%",
    resizeMode: "contain",
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: "#3A5A40",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 12,
  },
  loginText: {
    fontFamily: "Poppins_700Bold",
    color: "#fff",
    fontSize: 16,
  },
  icon: {
    paddingHorizontal: 8,
    backgroundColor: "transparent",
  },
});
