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

const Category = () => {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
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

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Income Categories</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.accCard}>
            <CategoryItem
              icon="cash-plus"
              title="Salary"
            />
            <CategoryItem
              icon="ticket-outline"
              title="Lottery"
            />
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Expense Categories</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.accCard}>
            <CategoryItem
              icon="food"
              title="Food"
            />
            <CategoryItem
              icon="lightning-bolt"
              title="Electricity"
            />
          </View>

          <View style={styles.addCategoryContainer}>
            <TouchableOpacity style={styles.addCategory}>
              <View style={styles.addLogo}>
                <MaterialCommunityIcons name="plus" size={24} color="#000000" />
              </View>
              <Text style={styles.addText}>Add Category</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const CategoryItem = ({ icon, title }) => (
  <View style={styles.cardList}>
    <View style={styles.category}>
      <MaterialCommunityIcons name={icon} size={24} color="#FFFFFF" />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.categoryText}>{title}</Text>
    </View>
    <MaterialCommunityIcons name="dots-horizontal" size={24} color="#000" />
  </View>
);

export default Category;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  balance: {
    paddingHorizontal: 16,
    paddingVertical: 8,
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
  section: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    paddingTop: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
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
  addCategoryContainer: {
    paddingHorizontal: 80,
    marginTop: 8,
    alignItems: "center",
  },
  addCategory: {
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
  addText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 12,
  },
  line: {
    height: 2,
    backgroundColor: "#000",
    marginVertical: 3,
  },
});
