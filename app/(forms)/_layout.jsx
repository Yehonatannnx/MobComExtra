import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AddIncome from "./AddIncome";
import AddExpense from "./AddExpense";
import AddTransfer from "./AddTransfer";

const Stack = createStackNavigator();

const FormsLayout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddIncome"
        component={AddIncome}
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
        name="AddExpense"
        component={AddExpense}
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
        name="AddTransfer"
        component={AddTransfer}
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
