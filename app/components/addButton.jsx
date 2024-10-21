import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const addButton = () => {
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <View style={styles.fabContainer}>
      <TouchableOpacity
        style={styles.fab}
        onPress={toggleOptions}
        accessibilityLabel="Add transaction"
      >
        <MaterialCommunityIcons name="plus" size={24} color="white" />
      </TouchableOpacity>

      {showOptions && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/AddIncome")}
          >
            <Text style={styles.optTxt}>+ Income</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/AddExpense")}
          >
            <Text style={styles.optTxt}>+ Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.optionButton}
            onPress={() => router.push("/AddTransfer")}
          >
            <Text style={styles.optTxt}>+ Transfer</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default addButton;

const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  fab: {
    backgroundColor: "#3A5A40",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  optionsContainer: {
    position: "absolute",
    bottom: 60,
    right: 1,
    alignItems: "center",
  },
  optionButton: {
    backgroundColor: "#588157",
    width: 100,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  optTxt: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});
