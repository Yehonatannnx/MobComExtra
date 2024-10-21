import { StyleSheet, Text, View } from "react-native";
import React from "react";

const incomeExpenseCard = () => {
  return (
    <View style={styles.balanceSub}>
      <View style={[styles.cardSub, { marginRight: 4 }]}>
        <Text style={styles.income}>Income</Text>
        <Text style={styles.incomeTxt}>Php 5,000.00</Text>
      </View>
      <View style={[styles.cardSub, { marginLeft: 4 }]}>
        <Text style={styles.expense}>Expense</Text>
        <Text style={styles.expenseTxt}>Php 2,000.00</Text>
      </View>
    </View>
  );
};

export default incomeExpenseCard;

const styles = StyleSheet.create({
  balanceSub: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardSub: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
  },
  income: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#3A5A40",
  },
  incomeTxt: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#3A5A40",
  },
  expense: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#E63946",
  },
  expenseTxt: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#E63946",
  },
});
