import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const headerOptions = (router) => ({
  headerStyle: {
    backgroundColor: "#3A5A40",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "Poppins_700Bold",
  },
  headerTitleAlign: "center",
  headerLeft: () => (
    <TouchableOpacity onPress={() => router.push("/Profile")}>
      <MaterialCommunityIcons
        name="account"
        size={24}
        color="#fff"
        style={{ marginLeft: 16 }}
      />
    </TouchableOpacity>
  ),
  headerRight: () => (
    <MaterialCommunityIcons
      name="magnify"
      size={24}
      color="#fff"
      style={{ marginRight: 16 }}
    />
  ),
});

const TabIcon = ({ icon, color, size, name, focused }) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={icon} color={color} size={size} />
      <Text
        style={{
          marginTop: 5,
          fontSize: 13,
          fontFamily: focused ? "Poppins_600SemiBold" : "Poppins_400Regular",
          color: focused ? "#3A5A40" : "#666666",
        }}
      >
        {name}
      </Text>
    </View>
  );
};

const RootLayout = () => {
  const router = useRouter(); // Get the router instance

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
            title: "E-Track Mo",
            headerShown: true,
            tabBarIcon: (props) => (
              <TabIcon icon={screen.icon} {...props} name={screen.title} />
            ),
            ...headerOptions(router), // Pass the router to headerOptions
          }}
        />
      ))}
    </Tabs>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
