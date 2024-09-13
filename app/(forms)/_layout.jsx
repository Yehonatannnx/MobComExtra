import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import addIncome from "./addIncome";
import addExpense from "./addExpense";
import addTransfer from "./addTransfer";

const Stack = createStackNavigator();

const FormsLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="addIncome"
        component={addIncome}
        options={{
          title: "Add Income",
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
      <Stack.Screen
        name="addExpense"
        component={addExpense}
        options={{
          title: "Add Expense",
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
      <Stack.Screen
        name="addTransfer"
        component={addTransfer}
        options={{
          title: "Add Transfer",
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
