import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

/**
 * CustomCheckbox Component
 * @param {boolean} isChecked - State to indicate if the checkbox is checked
 * @param {function} onPress - Function to handle checkbox press event
 * @returns {JSX.Element} Custom checkbox element
 */
const CustomCheckbox = ({ isChecked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, isChecked && styles.checkedCheckbox]}>
        {isChecked && <MaterialIcons name="check" size={18} color="white" />}
      </View>
      {/* <Text style={styles.checkboxLabel}>
        {isChecked ? "Completed" : "Not Completed"}
      </Text> */}
    </TouchableOpacity>
  );
};

// Styles for CustomCheckbox component
const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "left",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
  },
  checkedCheckbox: {
    backgroundColor: "#3AA6B9",
    borderColor: "#3AA6B9",
  },
  checkboxLabel: {
    fontSize: 16,
  },
});

export default CustomCheckbox;
