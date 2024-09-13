import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  SafeAreaView,
} from "react-native";
import { PieChart } from "react-native-gifted-charts";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const data = [
  { value: 30, color: "#FFB700", text: "Food" },
  { value: 60, color: "#26DFBC", text: "Education" },
  { value: 10, color: "#4D63F5", text: "Water" },
];

const CenterLabel = () => (
  <View style={styles.centerLabelContainer}>
    <Text style={styles.centerLabelText}>Expenses</Text>
  </View>
);

const Legend = () => (
  <View style={styles.legendContainer}>
    {data.map((item, index) => (
      <View key={index} style={styles.legendItem}>
        <View style={[styles.legendColor, { backgroundColor: item.color }]} />
        <Text style={styles.legendText}>{item.text}</Text>
      </View>
    ))}
  </View>
);

const Analytics = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.dateContainer}>
            <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
            <Text style={styles.dateText}>September 2024</Text>
            <MaterialCommunityIcons name="chevron-right" size={24} color="#000" />
          </View>

          <View style={styles.pieContainer}>
            <View style={styles.pieCard}>
              <View style={styles.pieRow}>
                <PieChart
                  data={data}
                  donut
                  innerRadius={40}
                  radius={85}
                  centerLabelComponent={CenterLabel}
                  showText={false}
                />
                <Legend />
              </View>
            </View>
          </View>

          <View style={styles.accountContainer}>
            <Text style={styles.accountTitle}>Expenses</Text>
          </View>

          <View style={styles.expenseList}>
            {data.map((item, index) => (
              <View key={index} style={styles.cardItem}>
                <View style={[styles.categoryIcon, { backgroundColor: item.color }]}>
                  <MaterialCommunityIcons
                    name={
                      item.text === "Food" ? "food" :
                      item.text === "Education" ? "school" :
                      "water"
                    }
                    size={24}
                    color="#FFFFFF"
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.categoryText}>{item.text}</Text>
                  <Text style={styles.paymentMethod}>Php {item.value * 100}.00</Text>
                </View>
                <Text style={styles.amount}>{item.value}%</Text>
              </View>
            ))}
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
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dateText: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
  pieContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  pieCard: {
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  pieRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  legendContainer: {
    marginLeft: 32,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
  },
  centerLabelContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  centerLabelText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  accountContainer: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    paddingTop: 8,
  },
  accountTitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  expenseList: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  cardItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  categoryIcon: {
    width: 40,
    height: 40,
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
    color: "#000",
  },
});
