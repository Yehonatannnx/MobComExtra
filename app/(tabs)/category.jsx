import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import BalanceCard from "../components/balanceCard";
import IncomeExpenseCard from "../components/incomeExpenseCard";
import IncomeCategory from "../components/incomeCategory";
import ExpenseCategory from "../components/expenseCategory";
import { useSQLiteContext } from "expo-sqlite";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Category = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [selectedTab, setSelectedTab] = useState("Income");

  const db = useSQLiteContext();

  // Function to save the category
  const saveCategory = async () => {

    if (categoryName.length === 0) {
      Alert.alert('Error', 'Please enter a category name');
      return;
    }
    try {
      const userSession = await AsyncStorage.getItem('userSession');
      const { user_id } = JSON.parse(userSession);

      let tableName = selectedTab === 'Income' ? 'income_categories' : 'expense_categories';

      // Insert the category into the database
      await db.runAsync(`INSERT INTO ${tableName} (name, user_id) VALUES (?, ?)`, [categoryName, user_id]);
      Alert.alert('Success', `${selectedTab} category added successfully!`);
      const result = await db.getAllAsync('SELECT * FROM income_categories');
      setModalVisible(false); // Close the modal
      setCategoryName('');
    } catch (error) {
      console.log('Error saving category: ', error);
      Alert.alert('Error', 'Failed to add category');
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.container1}>
            <BalanceCard></BalanceCard>
          </View>
          <View style={styles.container}>
            <IncomeExpenseCard></IncomeExpenseCard>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Income Categories</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.container1}>
            <IncomeCategory></IncomeCategory>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Expense Categories</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.container1}>
            <ExpenseCategory></ExpenseCategory>
          </View>

          <View style={styles.addCategoryContainer}>
            <TouchableOpacity
              style={styles.addCategory}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.addLogo}>
                <MaterialCommunityIcons name="plus" size={24} color="#000000" />
              </View>
              <Text style={styles.addText}>Add Category</Text>
            </TouchableOpacity>
          </View>
          {/* Modal */}
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Add New Category</Text>
                <View style={styles.inlineContainer}>
                  <Text style={styles.label}>Type: </Text>
                  <TouchableOpacity
                    style={[
                      styles.tabButton,
                      selectedTab === "Income" && styles.selectedTabButton,
                    ]}
                    onPress={() => setSelectedTab("Income")}
                  >
                    <Text
                      style={
                        selectedTab === "Income"
                          ? styles.selectedTabText
                          : styles.tabText
                      }
                    >
                      Income
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      styles.tabButton,
                      selectedTab === "Expense" && styles.selectedTabButton,
                    ]}
                    onPress={() => setSelectedTab("Expense")}
                  >
                    <Text
                      style={
                        selectedTab === "Expense"
                          ? styles.selectedTabText
                          : styles.tabText
                      }
                    >
                      Expense
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.inlineContainer}>
                  <Text style={styles.label}>Name: </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter category name"
                    value={categoryName}
                    onChangeText={setCategoryName}
                  />
                </View>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.customButtonText}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.saveBtn}
                    onPress={() => {
                      // Handle the category add logic here
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.customButtonText} onPress={saveCategory}>Save</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  container1: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 8,
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
  line: {
    height: 2,
    backgroundColor: "#000",
    marginVertical: 3,
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
  inlineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    justifyContent: "right",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginRight: 8,
  },
  input: {
    fontFamily: "Poppins_400Regular",
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    flex: 1,
  },
  buttonContainer: {
    fontFamily: "Poppins_400Regular",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginLeft: 5,
  },
  selectedTabButton: {
    backgroundColor: "#3A5A40",
    borderColor: "#3A5A40",
  },
  tabText: {
    color: "#000",
    fontFamily: "Poppins_400Regular",
  },
  selectedTabText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
  cancelBtn: {
    backgroundColor: "#666666",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 8,
  },
  saveBtn: {
    backgroundColor: "#118ab2",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  customButtonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
});
