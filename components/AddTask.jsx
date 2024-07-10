import React, { useEffect, useState } from "react";
import { Button, Modal, StyleSheet, TextInput, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

/**
 * Component for adding or editing a task.
 * @param {Object} props - Component props.
 * @param {Function} props.onCloseModal - Function to close the modal.
 * @param {Function} props.handleTask - Function to handle task submission.
 * @param {Function} props.setPriorityValue - Function to set priority value.
 * @param {Object|null} props.editTask - Task to be edited.
 */
const AddTask = ({ onCloseModal, handleTask, setPriorityValue, editTask }) => {
  const [singleTaskName, setSingleTaskName] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [priority, setPriority] = useState(null);
  const items = [
    { label: "Low", value: "Low" },
    { label: "Medium", value: "Medium" },
    { label: "High", value: "High" },
  ];

  useEffect(() => {
    setPriorityValue(priority);
  }, [priority]);

  useEffect(() => {
    if (editTask) {
      setSingleTaskName(editTask.name);
      setPriority(editTask.priority);
    }
  }, [editTask]);

  const handleAddSingleTask = () => {
    handleTask(singleTaskName);
    setSingleTaskName("");
    setPriority("");
  };

  return (
    <View>
      <Modal animationType="slide" style={styles.container}>
        <View style={styles.inputContainer}>
          <View>
            <TextInput
              placeholder="Task Name"
              style={styles.textInput}
              placeholderTextColor="#dddddd"
              onChangeText={setSingleTaskName}
              value={singleTaskName}
            />
          </View>
          <View style={[styles.textInput, styles.dropDownInput]}>
            <DropDownPicker
              items={items}
              open={isOpen}
              setOpen={setIsOpen}
              value={priority}
              setValue={setPriority}
              autoScroll
              placeholder="Select Task Priority"
              placeholderStyle={{
                color: "#AF47D2",
                fontSize: 16,
                fontWeight: "400",
              }}
              disableBorderRadius={false}
              theme="LIGHT"
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={[styles.cancelBtn, styles.addBtn]}>
              <Button
                title="Add Task"
                onPress={handleAddSingleTask}
                color="#40A578"
              />
            </View>
            <View style={styles.cancelBtn}>
              <Button title="Cancel" onPress={onCloseModal} color="#FF5D5D" />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222222",
  },
  textInput: {
    width: 310,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: "#dddddd",
    borderWidth: 2,
    marginBottom: 8,
    color: "#ffffff",
    fontSize: 18,
    borderRadius: 8,
    shadowColor: "#dddddd",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 1,
  },
  dropDownInput: {
    width: "80%",
    borderColor: "transparent",
    borderWidth: 0,
    zIndex: 555,
    fontSize: 18,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    columnGap: 12,
  },
  addBtn: {
    backgroundColor: "#40A578",
  },
  cancelBtn: {
    width: "30%",
    fontSize: 16,
    fontWeight: "600",
  },
});
