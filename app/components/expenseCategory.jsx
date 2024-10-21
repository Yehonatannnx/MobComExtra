import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Modal,
} from "react-native";
import React, { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSQLiteContext } from "expo-sqlite";

const ExpenseCategory = () => {
  const [categories, setCategories] = useState([]);
  const db = useSQLiteContext();

  const fetchCategories = async () => {
    try {
      const userSession = await AsyncStorage.getItem('userSession');
      const { user_id } = JSON.parse(userSession);

      const result = await db.getAllAsync('SELECT * FROM expense_categories');
      setCategories(result || []); // Set categories to state
    } catch (error) {
      console.log('Error fetching categories: ', error);
    }
  };

  useEffect(() => {
    fetchCategories(); // Call the fetch function on component mount
  }, []);

  return (
    <View>
      {categories.map(category => (
        <CategoryItem key={category.id} icon="food" title={category.name} categoryId={category.id} onCategoryUpdated={fetchCategories} />
      ))}
    </View>
  );
};

const CategoryItem = ({ icon, title, categoryId, onCategoryUpdated }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const db = useSQLiteContext();

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

  const handleEditConfirm = async () => {
    try {
      // Update the category in the database
      await db.runAsync(`UPDATE expense_categories SET name = ? WHERE id = ?`, [editValue, categoryId]);
      console.log("Edited Value:", editValue); // Log the edited value
      setModalVisible(false); // Hide the modal after editing
      onCategoryUpdated(); // Refresh categories
    } catch (error) {
      console.log('Error editing category: ', error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      // Delete the category from the database
      await db.runAsync(`DELETE FROM expense_categories WHERE id = ?`, [categoryId]);
      console.log("Deleted category:", title);
      setModalDelete(false); // Hide the modal after deletion
      onCategoryUpdated(); // Refresh categories
    } catch (error) {
      console.log('Error deleting category: ', error);
    }
  };

  return (
    <View style={styles.cardList}>
      <View style={styles.category}>
        <MaterialCommunityIcons name={icon} size={24} color="#FFFFFF" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{title}</Text>
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
            <Text style={styles.modalTitle}>Edit Category</Text>

            <View style={styles.inlineContainer}>
              <Text style={styles.label}>Name: </Text>
              <TextInput
                style={styles.input}
                placeholder="Enter category name"
                value={editValue}
                onChangeText={(text) => setEditValue(text)}
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
                onPress={handleEditConfirm} // Call the handleEditConfirm function
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
            <Text style={styles.delmodalTitle}>
              Remove category for {title}?
            </Text>
            <Text style={styles.delTitle}>This category will be removed</Text>

            <View style={styles.delContainer}>
              <TouchableOpacity
                style={styles.delcancelBtn}
                onPress={() => setModalDelete(false)}
              >
                <Text style={styles.delButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.delBtn}
                onPress={handleDeleteConfirm} // Call the handleDeleteConfirm function
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


export default ExpenseCategory;

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
  dropdownMenu: {
    position: "absolute",
    top: -80,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 5,
    elevation: 5,
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
