import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Budget = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.date}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={24}
              color="#000"
            />
            <Text style={styles.dateView}>September 2024</Text>
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color="#000"
            />
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

          <View style={styles.account}>
            <Text style={styles.accountTitle}>Budgeted</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.accCard}>
            <View style={styles.cardList}>
              <View style={styles.category}>
                <MaterialCommunityIcons
                  name="tshirt-crew"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Clothing</Text>
                <Text style={styles.paymentMethod}>Budget: Php 500.00</Text>
                <Text style={styles.paymentMethod}>Spent: Php 200.00</Text>
                <Text style={styles.paymentMethod}>Remaining</Text>
              </View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="#000"
              />
            </View>
            <View style={styles.cardList}>
              <View style={styles.category}>
                <MaterialCommunityIcons name="wifi" size={24} color="#FFFFFF" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Internet</Text>
                <Text style={styles.paymentMethod}>Budget: Php 1,500.00</Text>
                <Text style={styles.paymentMethod}>Spent: Php 500.00</Text>
                <Text style={styles.paymentMethod}>Remaining</Text>
              </View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={24}
                color="#000"
              />
            </View>
          </View>

          <View style={styles.account}>
            <Text style={styles.accountTitle}>Not Budgeted</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.accCard}>
            <View style={styles.cardList}>
              <View style={styles.category}>
                <MaterialCommunityIcons name="food" size={24} color="#FFFFFF" />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Food</Text>
              </View>
              <TouchableOpacity style={styles.setBtn}>
                <Text style={styles.setTxt}>Set Budget</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.cardList}>
              <View style={styles.category}>
                <MaterialCommunityIcons
                  name="heart-pulse"
                  size={24}
                  color="#FFFFFF"
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.categoryText}>Health</Text>
              </View>
              <TouchableOpacity style={styles.setBtn}>
                <Text style={styles.setTxt}>Set Budget</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.addAcc}>
            <View style={styles.addLogo}>
              <MaterialCommunityIcons name="plus" size={24} color="#000000" />
            </View>
            <View style={styles.addContainer}>
              <Text style={styles.categoryText}>Set from previous months</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Budget;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
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
  account: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    paddingTop: 8,
  },
  accCard: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 8,
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
  addAcc: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 4,
    borderColor: "#000",
    borderWidth: 1,
  },
  addLogo: {
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
  },
  addContainer: {
    alignItems: "center",
  },
  line: {
    height: 2,
    backgroundColor: "#000",
    marginVertical: 3,
  },
  setBtn: {
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 4,
  },
  setTxt: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#232323",
  },
});
