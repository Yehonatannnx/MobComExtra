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
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import BalanceCard from "../components/balanceCard";
import IncomeExpenseCard from "../components/incomeExpenseCard";
import AccountList from "../components/accountList";

const Account = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [accountName, setAccountName] = useState("");
  const [balance, setBalance] = useState("");
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

          <View style={styles.account}>
            <Text style={styles.accountTitle}>Accounts</Text>
            <View style={styles.line} />
          </View>

          <View style={styles.container1}>
            <AccountList></AccountList>
          </View>

          <View style={styles.addContainer}>
            <TouchableOpacity
              style={styles.addAcc}
              onPress={() => setModalVisible(true)}
            >
              <View style={styles.addLogo}>
                <MaterialCommunityIcons name="plus" size={24} color="#000000" />
              </View>
              <Text style={[styles.categoryText, { marginLeft: 12 }]}>
                Add Account
              </Text>
            </TouchableOpacity>
          </View>

          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitle}>Add New Account</Text>

                <View style={styles.inlineContainer}>
                  <Text style={styles.label}>Name: </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter account name"
                    value={accountName}
                    onChangeText={(text) => setAccountName(text)}
                  />
                </View>
                <View style={styles.inlineContainer}>
                  <Text style={styles.label}>Balance: </Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter initial balance"
                    value={balance}
                    onChangeText={(text) => setBalance(text)}
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
                    <Text style={styles.customButtonText}>Save</Text>
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

export default Account;

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
  account: {
    paddingHorizontal: 16,
    paddingBottom: 4,
    paddingTop: 8,
  },
  accountTitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  accCard: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  addContainer: {
    paddingHorizontal: 80,
    marginTop: 8,
    alignItems: "center",
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
  categoryText: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    color: "#232323",
  },
  line: {
    height: 2,
    backgroundColor: "#000",
    marginVertical: 3,
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
