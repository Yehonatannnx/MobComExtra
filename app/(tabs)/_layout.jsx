import { StyleSheet, View, Text, Alert, TouchableOpacity } from "react-native";
import React from "react";
import { router, Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Drawer = createDrawerNavigator();

const headerOptions = {
  headerStyle: {
    backgroundColor: "#3A5A40",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "Poppins_700Bold",
  },
  headerTitleAlign: "center",
};

const TabIcon = ({ icon, color, size, name, focused }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} color={color} size={size} />
      <Text
        style={{
          marginTop: 5,
          fontFamily: focused ? "Poppins_600SemiBold" : "Poppins_400Regular",
          color: focused ? "#3A5A40" : "#666666",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const LogoutScreen = ({ navigation }) => {
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
                await AsyncStorage.removeItem('userSession');
                console.log('User logged out successfully!');
                router.push("/signin"); // Navigate back to the login screen
                Alert.alert('Success', 'Logged out successfully!')
            } catch (error) {
              console.log('Error during logout: ', error);
            }
        },
      },
    ]);
  };

  return (
    <View style={styles.logoutContainer}>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#3A5A40",
        tabBarInactiveTintColor: "#666666",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#3A5A40",
          height: 70,
        },
      }}
    >
      {[
        { name: "home", icon: "home", title: "Home" },
        { name: "analytics", icon: "poll", title: "Analytics" },
        { name: "budget", icon: "piggy-bank", title: "Budget" },
        { name: "account", icon: "wallet", title: "Account" },
        { name: "category", icon: "shape", title: "Category" },
      ].map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            title: screen.title,
            headerShown: false,
            tabBarIcon: (props) => (
              <TabIcon icon={screen.icon} {...props} name={screen.title} />
            ),
            ...headerOptions,
          }}
        />
      ))}
    </Tabs>
  );
};

const RootLayout = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: "#ffffff",
          width: 240,
        },
        headerStyle: {
          backgroundColor: "#3A5A40",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontFamily: "Poppins_700Bold",
          fontSize: 20,
        },
        headerTitleAlign: "center",
        headerRight: () => (
          <MaterialCommunityIcons
            name="magnify"
            size={24}
            color="#fff"
            style={{ marginRight: 16 }}
          />
        ),
      }}
    >
      <Drawer.Screen name="E-Track Mo" component={HomeScreen} />

      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: {
    fontSize: 24,
    color: "#3A5A40",
    fontFamily: "Poppins_600SemiBold",
  },
});

export default RootLayout;