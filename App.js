import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [healthGoals, sethealthGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    // setenteredGoal([...healthGoals, enteredGoal]);
    // sethealthGoals((currentGoals) => [...currentGoals, enteredGoal]);
    sethealthGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
  };

  const onDelete = (id) => {
    console.log("DOES DELETE WORK!!!");
    sethealthGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.key != id)
    );
  };

  const addModeHandler = () => {
    setIsAddMode(true);
  };
  return (
    <View style={styles.container}>
      <Button title="Add new goal" onPress={addModeHandler} />
      <GoalInput
        visible={isAddMode}
        goalInputHandler={goalInputHandler}
        enteredGoal={enteredGoal}
        addGoalHandler={addGoalHandler}
      />
      {/* <View style={{ backgroundColor: "red", width: "100%" }}>
        <TextInput
          placeholder="Enter health goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.inputContainer}
        />
        <Button
          title="ADD"
          style={{ marginBottom: 20 }}
          onPress={addGoalHandler}
        />
      </View> */}
      <FlatList
        keyExtractor={(item, index) => item.key}
        data={healthGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            goalId={itemData.item.key}
            onDelete={onDelete}
          />
        )}
      />
      {/* <ScrollView style={styles.list}>
        {healthGoals.map((goal, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{`${index + 1}. ${goal}`}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#fff",
  },
  list: {
    backgroundColor: "blue",
  },
});
