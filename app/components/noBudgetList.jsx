import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";

const noBudgetList = () => {
  return (
    <View>
      <NotBudgetItem icon="food" title="Food" />
      <NotBudgetItem icon="heart-pulse" title="Health" />
    </View>
  );
};

const NotBudgetItem = ({ icon, title }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [myBudget, setMyBudget] = useState();

  const handleOptionSelect = (option) => {
    if (option === "Edit") {
      setDropdownVisible(false); // Hide the dropdown
      setModalVisible(true); // Show the modal
    } else {
      console.log(option); // Log the selected option
      setDropdownVisible(false); // Hide the dropdown after selection
    }
  };

  const handleEditConfirm = () => {
    console.log("Edited Value:", editValue); // Log the edited value
    setModalVisible(false); // Hide the modal after editing
  };
  return (
    <View style={styles.cardList}>
      <View style={styles.category}>
        <MaterialCommunityIcons name={icon} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{title}</Text>
      </View>
      <TouchableOpacity
        style={styles.setBtn}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.setTxt}>Set Budget</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Set Budget</Text>

            <Text style={styles.budgetTitle}>{title}</Text>
            <View style={styles.inlineContainer}>
              <Text style={styles.label}>Budget: </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter amount"
                value={myBudget}
                onChangeText={(text) => setMyBudget(text)}
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
    </View>
  );
};

export default noBudgetList;

const styles = StyleSheet.create({
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
  budgetTitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 12,
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
