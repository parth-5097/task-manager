import React from "react";
import { Button } from "react-native";

/**
 * Component for rendering the delete button.
 * @param {Object} props - Component props.
 * @param {string} props.id - ID of the task to delete.
 * @param {Function} props.handleDeleteTask - Function to handle task deletion.
 */
const DeleteButton = ({ id, handleDeleteTask }) => {
  return (
    <Button
      title="Delete"
      onPress={() => handleDeleteTask(id)}
      color="#A91D3A"
    />
  );
};

export default DeleteButton;
