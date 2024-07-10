import React, { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import AddTask from "./components/AddTask";
import SingleTask from "./components/SingleTask";
import DeleteButton from "./components/DeleteButton";
import EditButton from "./components/EditButton";
import { styles } from "./utils/styles";

/**
 * The main component for the Task Manager application.
 */
const App = () => {
  const [openModal, setOpenModal] = useState(false);
  const [taskName, setTaskName] = useState([]);
  const [priorityValue, setPriorityValue] = useState("");
  const [editTask, setEditTask] = useState(null);
  const [error, setError] = useState("");

  /**
   * Closes the modal.
   */
  const onCloseModal = () => {
    setOpenModal(false);
    setError("");
  };

  /**
   * Handles opening the add task modal.
   */
  const handleAddTask = () => {
    setOpenModal(true);
  };

  /**
   * Handles adding or editing a task.
   * @param {string} enteredText - The text of the task.
   */
  const handleTask = (enteredText) => {
    if (enteredText === "") {
      setError("Task name cannot be empty");
      Alert.alert("Error", "Task name cannot be empty");
    } else if (taskName.some((task) => task.name === enteredText)) {
      setError("Task name already exist!");
      Alert.alert("Error", "Task name already exist!");
    } else {
      if (editTask) {
        setTaskName((currentTask) =>
          currentTask
            .map((task) =>
              task.id === editTask.id
                ? { ...task, name: enteredText, priority: priorityValue }
                : task
            )
            .sort(
              (a, b) => priorityOrder(a.priority) - priorityOrder(b.priority)
            )
        );
        setEditTask(null);
      } else {
        setTaskName((currentTask) => {
          const newTasks = [
            ...currentTask,
            {
              id: Math.random().toString(),
              name: enteredText,
              priority: priorityValue,
              createdAt: new Date()
                .toLocaleString("en-BD", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                })
                .replace(",", ""),
              completed: false, // Initialize the task as not completed
            },
          ];
          return newTasks.sort(
            (a, b) => priorityOrder(a.priority) - priorityOrder(b.priority)
          );
        });
      }
      setOpenModal(false);
      setError("");
    }
  };

  const priorityOrder = (priority) => {
    switch (priority) {
      case "High":
        return 1;
      case "Medium":
        return 2;
      case "Low":
        return 3;
      default:
        return 4;
    }
  };

  /**
   * Handles editing a task.
   * @param {string} id - The id of the task to edit.
   */
  const handleEditTask = (id) => {
    const taskToEdit = taskName.find((task) => task.id === id);
    setEditTask(taskToEdit);
    setPriorityValue(taskToEdit.priority);
    setOpenModal(true);
  };

  /**
   * Handles deleting a task.
   * @param {string} id - The id of the task to delete.
   */
  const handleDeleteTask = (id) => {
    setTaskName(taskName.filter((task) => task.id !== id));
  };

  /**
   * Toggles the completion status of a task.
   * @param {string} id - The id of the task to toggle.
   */
  const toggleCompleteTask = (id) => {
    setTaskName((currentTask) =>
      currentTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.heading}>Task Manager</Text>
      <View style={styles.imgContainer}>
        <Image
          source={require("./assets/taskManagerLogo.png")}
          style={styles.logoImg}
        />
      </View>
      <View>
        <Button title="Add Task" onPress={handleAddTask} color="#663399" />
      </View>
      {openModal && (
        <AddTask
          onCloseModal={onCloseModal}
          setOpenModal={setOpenModal}
          setTaskName={setTaskName}
          handleTask={handleTask}
          handleDeleteTask={handleDeleteTask}
          setPriorityValue={setPriorityValue}
          editTask={editTask}
        />
      )}
      <View style={styles.taskList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={taskName}
          renderItem={(task) => (
            <SingleTask
              name={task.item.name}
              createdAt={task.item.createdAt}
              id={task.item.id}
              priority={task.item.priority}
              completed={task.item.completed}
              toggleCompleteTask={toggleCompleteTask}
            >
              <View style={styles.btn}>
                <DeleteButton
                  id={task.item.id}
                  handleDeleteTask={handleDeleteTask}
                />
                <EditButton id={task.item.id} handleEditTask={handleEditTask} />
              </View>
            </SingleTask>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default App;
