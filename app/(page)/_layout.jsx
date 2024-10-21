import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "./Profile";

const Stack = createStackNavigator();

const FormsLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          headerShown: true,
          headerStyle: {
            backgroundColor: "#3A5A40",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
};

export default FormsLayout;
