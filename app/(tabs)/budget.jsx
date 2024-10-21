import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BalanceCard from "../components/balanceCard";
import BudgetList from "../components/budgetList";
import NoBudgetList from "../components/noBudgetList";
import DatePicker from "../components/datePicker";

const budget = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container1}>
            <DatePicker></DatePicker>
          </View>
          <View style={styles.container}>
            <BalanceCard></BalanceCard>
          </View>

          <View style={styles.account}>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
              Budgeted
            </Text>
            <View style={styles.line} />
          </View>

          <View style={styles.container}>
            <BudgetList></BudgetList>
          </View>

          <View style={styles.account}>
            <Text style={{ fontSize: 16, fontFamily: "Poppins_600SemiBold" }}>
              Not Budgeted
            </Text>
            <View style={styles.line} />
          </View>

          <View style={styles.container}>
            <NoBudgetList></NoBudgetList>
          </View>

          <View style={{ paddingHorizontal: 50, marginTop: 8 }}>
            <TouchableOpacity style={styles.addAcc}>
              <View style={styles.addLogo}>
                <MaterialCommunityIcons name="plus" size={24} color="#000000" />
              </View>
              <View style={styles.addContainer}>
                <Text style={[styles.categoryText, { paddingHorizontal: 8 }]}>
                  Set from previous months
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default budget;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddinBottom: 8,
  },
  container1: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  account: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
  scrollContainer: {
    paddingBottom: 20,
  },
  categoryText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#232323",
  },
});
