import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CustomCheckbox from "./CustomCheckbox";

/**
 * SingleTask Component
 * @param {string} name - Name of the task
 * @param {string} createdAt - Task creation date
 * @param {string} priority - Task priority level
 * @param {JSX.Element} children - Child components (e.g., Edit/Delete buttons)
 * @returns {JSX.Element} Single task element
 */
const SingleTask = ({ name, createdAt, priority, children }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  /**
   * Get the border color based on task priority
   * @param {string} value - Task priority
   * @returns {string} Border color
   */
  const getBorderColor = (value) => {
    switch (value) {
      case "High":
        return "red";
      case "Medium":
        return "orange";
      case "Low":
        return "blue";
      default:
        return "transparent";
    }
  };

  const borderColor = getBorderColor(priority);

  /**
   * Toggle the completion state of the task
   */
  const toggleCheckbox = () => {
    setIsCompleted(!isCompleted);
  };

  return (
    <>
      {!name ? null : (
        <View style={[styles.container, { borderLeftColor: borderColor }]}>
          <CustomCheckbox isChecked={isCompleted} onPress={toggleCheckbox} />
          <View>
            <View>
              <Text
                style={[
                  styles.taskName,
                  isCompleted && styles.taskNameCompleted,
                ]}
              >
                {name}
              </Text>
            </View>

            <View>
              <Text style={styles.createdAt}>🗓️ {createdAt}</Text>
            </View>
            {children}
          </View>
        </View>
      )}
    </>
  );
};

export default SingleTask;

// Styles for SingleTask component
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    width: "100%",
    marginVertical: 6,
    paddingVertical: 4,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 8,
    borderLeftColor: "#000",
    borderRightColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  taskName: {
    fontSize: 18,
    fontWeight: "500",
    textTransform: "capitalize",
    color: "#181818",
    marginBottom: 3,
    textAlign: "center",
  },
  taskNameCompleted: {
    textDecorationLine: "line-through",
  },
  createdAt: {
    color: "blue",
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
  },
});
