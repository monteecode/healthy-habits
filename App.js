import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [healthGoals, sethealthGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    // setenteredGoal([...healthGoals, enteredGoal]);
    sethealthGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "red", width: "100%" }}>
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
      </View>
      <ScrollView style={styles.list}>
        {healthGoals.map((goal, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{`${index + 1}. ${goal}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginBottom: 10,

    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
  list: {
    backgroundColor: "blue",
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
  },
});
