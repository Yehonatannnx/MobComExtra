import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const datePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setSelectedDate(date);
    hideDatePicker();
  };

  // Format the selected date for display (e.g., "September 2024")
  const formatDate = (date) => {
    const options = { month: "long", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };
  return (
    <View style={styles.date}>
      <MaterialCommunityIcons name="chevron-left" size={24} color="#000" />
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={styles.dateView}>{formatDate(selectedDate)}</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#000" />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={selectedDate} // Initial date shown in picker
      />
    </View>
  );
};

export default datePicker;

const styles = StyleSheet.create({
  date: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateView: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins_600SemiBold",
  },
});
