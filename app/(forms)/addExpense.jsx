import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const AddExpense = () => {
  const [amount, setAmount] = useState("Php ");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("Sep 13, 2024");
  const [time, setTime] = useState("00:00");
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDate = (selectedDate) => {
    const formattedDate = selectedDate.toLocaleDateString();
    setDate(formattedDate);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (selectedTime) => {
    const formattedTime = selectedTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(formattedTime);
    hideTimePicker();
  };
  return (
    <>
      <StatusBar backgroundColor="#ffffff" />
      <SafeAreaView style={styles.container}>
        <View style={[styles.dateTime, { marginTop: 8 }]}>
          {/* Date Picker */}
          <TouchableOpacity
            style={[styles.dateTimeCard, { marginRight: 4 }]}
            onPress={showDatePicker}
          >
            <TextInput
              style={styles.txtInput}
              value={date}
              editable={false}
              placeholder="Select Date"
            />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirmDate}
            onCancel={hideDatePicker}
          />

          {/* Time Picker */}
          <TouchableOpacity
            style={[styles.dateTimeCard, { marginLeft: 4 }]}
            onPress={showTimePicker}
          >
            <TextInput
              style={styles.txtInput}
              value={time}
              editable={false}
              placeholder="Select Time"
            />
          </TouchableOpacity>

          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleConfirmTime}
            onCancel={hideTimePicker}
          />
        </View>

        <View style={styles.balance}>
          <Text style={styles.label}>Balance</Text>
          <View style={styles.inputCard}>
            <Text style={styles.txt}>Php 10,000.00</Text>
          </View>
        </View>

        <View style={styles.accountContainer}>
          <Text style={styles.label}>Account</Text>
          <View style={styles.account}>
            <View
              style={[
                styles.accCard,
                {
                  marginRight: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              <MaterialCommunityIcons
                name="wallet-outline"
                size={24}
                color="#000"
              />
              <Text style={styles.txt}>Account</Text>
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color="#000"
              />
            </View>
            <View
              style={[
                styles.accCard,
                {
                  marginLeft: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                },
              ]}
            >
              <MaterialCommunityIcons
                name="tag-outline"
                size={24}
                color="#000"
              />
              <Text style={styles.txt}>Category</Text>
              <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color="#000"
              />
            </View>
          </View>
        </View>

        <View style={styles.balance}>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.inputCard}>
            <TextInput
              style={styles.txtInput}
              keyboardType="numeric"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
        </View>

        <View style={styles.balance}>
          <Text style={styles.label}>Notes</Text>
          <View style={styles.inputCard}>
            <TextInput
              style={styles.txtInput}
              placeholder="Add notes..."
              multiline={true}
              numberOfLines={4}
              value={notes}
              onChangeText={(text) => setNotes(text)}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.txtBtn}>Add Expense</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default AddExpense;

const styles = StyleSheet.create({
  dateTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dateTimeCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
  },
  accountContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  account: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  accCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flex: 1,
  },
  txt: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
  },
  balance: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  label: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: 16,
  },
  inputCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  addBtn: {
    backgroundColor: "#3A5A40",
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  txtBtn: {
    fontFamily: "Poppins_400Regular",
    fontSize: 18,
    color: "#fff",
  },
  txtInput: {
    fontFamily: "Poppins_400Regular",
    color: "#000",
    fontSize: 18,
    textAlignVertical: "top",
  },
});
