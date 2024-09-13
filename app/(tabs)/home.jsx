import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Home = () => {
  const [showOptions, setShowOptions] = useState(false);
  const router = useRouter();

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.date}>
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            <Text style={styles.dateView}>September 2024</Text>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#000" />
          </View>

          <View style={styles.balance}>
            <View style={styles.card}>
              <Text style={styles.label}>Overall Balance</Text>
              <Text style={styles.cash}>Php 10,000.00</Text>
            </View>
          </View>

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

          <View style={styles.transaction}>
            <Text style={styles.transactionTitle}>Transaction List</Text>
            <Text style={styles.transactionDate}>Monday, Sept 9</Text>
            <View style={styles.cardList}>
              <View style={styles.category}>
                <MaterialCommunityIcons name="cart-outline" size={24} color="#FFFFFF" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Groceries</Text>
                <Text style={styles.paymentMethod}>Cash</Text>
              </View>
              <Text style={[styles.amount, { color: "#E63946" }]}>- Php 1,000.00</Text>
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
            <View style={styles.cardList}>
              <View style={styles.category}>
                <MaterialCommunityIcons name="swap-horizontal" size={24} color="#FFFFFF" />
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
        </ScrollView>

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
                onPress={() => router.push("/addIncome")}
              >
                <Text style={styles.optTxt}>+ Income</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => router.push("/addExpense")}
              >
                <Text style={styles.optTxt}>+ Expense</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => router.push("/addTransfer")}
              >
                <Text style={styles.optTxt}>+ Transfer</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 80, // Adjust based on the height of the floating button and options container
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dateView: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
  balance: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  card: {
    width: "100%",
    height: 100,
    backgroundColor: "#588157",
    justifyContent: "center",
    alignItems: "flex-start",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    fontSize: 12,
  },
  cash: {
    color: "#fff",
    fontFamily: "Poppins_700Bold",
    fontSize: 30,
  },
  balanceSub: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 4,
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
  transaction: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    paddingTop: 8,
  },
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
    bottom: 80, // Adjust based on fabContainer height
    right: 20,
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
