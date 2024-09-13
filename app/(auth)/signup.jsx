import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold, Poppins_800ExtraBold } from '@expo-google-fonts/poppins';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function Index() {
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

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState('eye-off');

  const handlePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
    setRightIcon(passwordVisibility ? 'eye' : 'eye-off');
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/etrackmo.png')} style={styles.img} />
      </View>

      <Text style={styles.title}>Sign Up</Text>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="account" size={22} color="#232323" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Enter Email" />
      </View>

      <Text style={styles.label}>Username</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="account" size={22} color="#232323" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Enter Username" />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={22} color="#232323" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          secureTextEntry={passwordVisibility}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handlePasswordVisibility} style={styles.icon}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="lock" size={22} color="#232323" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={passwordVisibility}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={handlePasswordVisibility} style={styles.icon}>
          <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signUp}>
          Already have an account? 
          <Link href="../signin" style={styles.signInLink}> Login</Link>
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 36,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  logoContainer: {
    alignSelf: 'flex-start',
    width: 150,
  },
  title: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 26,
    marginBottom: 12,
    textAlign: 'left',
    color: '#3A5A40',
  },
  label: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    marginBottom: 8,
    marginLeft: 4,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#f3f3f3',
    borderRadius: 5,
    marginBottom: 20,
  },
  input: {
    fontFamily: 'Poppins_400Regular',
    height: 50,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: 'grey',
    fontSize: 14,
  },
  signUp: {
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 15,
  },
  signInButton: {
    marginTop: 10,
  },
  signInLink: {
    color: '#007BFF',
  },
  img: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#3A5A40',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 20,
  },
  loginText: {
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    fontSize: 16,
  },
  icon: {
    paddingHorizontal: 8,
    backgroundColor: 'transparent',
  },
});