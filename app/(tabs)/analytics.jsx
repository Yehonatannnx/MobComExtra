import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import DatePicker from "../components/datePicker";
import { Dropdown } from "react-native-element-dropdown";
import { useState } from "react";
import ExpenseAnalytics from "../components/expenseAnalytics";
import IncomeAnalytics from "../components/incomeAnalytics";

const Analytics = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedView, setSelectedView] = useState("expense"); // Default view

  const expenseOptions = [
    { label: "Expense View", value: "expense" },
    { label: "Income View", value: "income" },
    { label: "Transfer View", value: "transfer" },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container1}>
            <DatePicker></DatePicker>
          </View>
          <View style={styles.dropdownContainer}>
            {/* Dropdown to select the view */}
            <Dropdown
              style={styles.dropdown}
              data={expenseOptions}
              labelField="label"
              valueField="value"
              placeholder="Select View"
              value={selectedView}
              onChange={(item) => {
                setSelectedView(item.value); // Update view based on selection
              }}
            />
              
            {/* Conditionally render content based on selected view */}
            <View>
              {selectedView === "expense" && (
                <ExpenseAnalytics></ExpenseAnalytics>
              )}
              {selectedView === "income" && <IncomeAnalytics></IncomeAnalytics>}
              {selectedView === "transfer" && (
                <Text style={styles.contentText}>
                  This is the Transfer View content.
                </Text>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Analytics;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container1: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dropdown: {
    height: 50,
    borderColor: "#3A5A40",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontFamily: "Poppins_600SemiBold",
  },
  dropdownContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contentContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});
