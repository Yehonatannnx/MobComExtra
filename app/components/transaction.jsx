import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const transaction = () => {
  return (
    <View style={styles.transaction}>
      <Text style={styles.transactionTitle}>Transaction List</Text>
      <Text style={styles.transactionDate}>Monday, Sept 9</Text>
      <View style={{ height: 2, backgroundColor: "#000", marginVertical: 3 }} />
      <View style={styles.cardList}>
        <View style={styles.category}>
          <MaterialCommunityIcons
            name="cart-outline"
            size={24}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryText}>Groceries</Text>
          <Text style={styles.paymentMethod}>Cash</Text>
        </View>
        <Text style={[styles.amount, { color: "#E63946" }]}>
          - Php 1,000.00
        </Text>
      </View>
      <View style={styles.cardList}>
        <View style={styles.category}>
          <MaterialCommunityIcons name="cash" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryText}>Income</Text>
          <Text style={styles.paymentMethod}>Card</Text>
        </View>
        <Text style={[styles.amount, { color: "#588157" }]}>Php 5,000.00</Text>
      </View>

      <Text style={styles.transactionDate}>Tuesday, Sept 10</Text>
      <View style={{ height: 2, backgroundColor: "#000", marginVertical: 3 }} />
      <View style={styles.cardList}>
        <View style={styles.category}>
          <MaterialCommunityIcons
            name="swap-horizontal"
            size={24}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryText}>Transfer</Text>
          <Text style={styles.paymentMethod}>Card to Cash</Text>
        </View>
        <Text style={[styles.amount, { color: "#0096c7" }]}>Php 1,000.00</Text>
      </View>
      <View style={styles.cardList}>
        <View style={styles.category}>
          <MaterialCommunityIcons name="food" size={24} color="#FFFFFF" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.categoryText}>Food</Text>
          <Text style={styles.paymentMethod}>Cash</Text>
        </View>
        <Text style={[styles.amount, { color: "#E63946" }]}>- Php 100.00</Text>
      </View>
    </View>
  );
};

export default transaction;

const styles = StyleSheet.create({
  transactionTitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  transactionDate: {
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
    marginBottom: 10,
    marginTop: 10,
  },
  cardList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 4,
  },
  category: {
    width: 40,
    height: 40,
    backgroundColor: "#3A5A40",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  categoryText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#232323",
  },
  paymentMethod: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#666666",
  },
  amount: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
});
