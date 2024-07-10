import React from "react";
import { Button } from "react-native";

/**
 * Component for rendering the edit button.
 * @param {Object} props - Component props.
 * @param {string} props.id - ID of the task to edit.
 * @param {Function} props.handleEditTask - Function to handle task editing.
 */
const EditButton = ({ id, handleEditTask }) => {
  return (
    <Button
      title="Edit Task"
      onPress={() => handleEditTask(id)}
      color="#3AA6B9"
    />
  );
};

export default EditButton;
