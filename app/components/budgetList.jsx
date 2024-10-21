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

const budgetList = () => {
  return (
    <View>
      <BudgetItem
        icon="tshirt-crew"
        title="Clothing"
        budget="Php 500.00"
        spent="Php 200.00"
      />
      <BudgetItem
        icon="food"
        title="Food"
        budget="Php 5000.00"
        spent="Php 2000.00"
      />
    </View>
  );
};

const BudgetItem = ({ icon, title, budget, spent }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [myBudget, setMyBudget] = useState(budget);

  const handleOptionSelect = (option) => {
    if (option === "Edit") {
      setDropdownVisible(false); // Hide the dropdown
      setModalVisible(true); // Show the modal
    } else if (option === "Delete") {
      setDropdownVisible(false); // Hide the dropdown
      setModalDelete(true); // Show the modal
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
    <View
      style={[
        styles.cardList,
        { alignItems: "flex-start", justifyContent: "flex-start" },
      ]}
    >
      <View style={styles.category}>
        <MaterialCommunityIcons name={icon} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{title}</Text>
        <Text style={styles.paymentMethod}>Budget: {budget}</Text>
        <Text style={styles.paymentMethod}>Spent: {spent}</Text>
        <Text style={styles.paymentMethod}>Remaining: </Text>
      </View>

      <TouchableOpacity onPress={() => setDropdownVisible(!dropdownVisible)}>
        <MaterialCommunityIcons name="dots-horizontal" size={24} color="#000" />
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => handleOptionSelect("Edit")}
          >
            <Text style={styles.dropdownText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => handleOptionSelect("Delete")}
          >
            <Text style={styles.dropdownText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal for Edit */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Edit Budget</Text>

            <View style={styles.inlineContainer}>
              <Text style={styles.label}>Budget: </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter account name"
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

      {/* Modal for Delete */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalDelete}
        onRequestClose={() => setModalDelete(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.delmodalTitle}>Remove Budget for {title}?</Text>
            <Text style={styles.delTitle}>
              Budget for this category will be removed
            </Text>

            <View style={styles.delContainer}>
              <TouchableOpacity
                style={styles.delcancelBtn}
                onPress={() => setModalDelete(false)}
              >
                <Text style={styles.delButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delBtn}
                onPress={() => {
                  // Handle the category add logic here
                  setModalDelete(false);
                }}
              >
                <Text style={styles.customButtonText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default budgetList;

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
  dropdownMenu: {
    position: "absolute",
    top: -80, // Adjust this value to position the dropdown correctly
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    elevation: 5, // Shadow for Android
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 30,
  },
  dropdownText: {
    fontSize: 16,
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
  delmodalTitle: {
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 16,
    textAlign: "center",
  },
  delTitle: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 12,
    textAlign: "center",
  },
  delContainer: {
    fontFamily: "Poppins_400Regular",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  delcancelBtn: {
    backgroundColor: "#666666",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 8,
  },
  delBtn: {
    backgroundColor: "#c1121f",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  delButtonText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
  },
});
