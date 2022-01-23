import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setenteredGoal] = useState("");
  const [healthGoals, sethealthGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setenteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    // setenteredGoal([...healthGoals, enteredGoal]);
    setenteredGoal((currentGoals) => [...currentGoals, enteredGoal]);
  };
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View style={{ backgroundColor: "red", width: "100%" }}>
        <TextInput
          placeholder="Enter health goal"
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={{
            marginBottom: 10,

            borderBottomColor: "black",
            borderBottomWidth: 1,
            padding: 10,
          }}
        />
        <Button
          title="ADD"
          style={{ marginBottom: 20 }}
          onPress={addGoalHandler}
        />
      </View>
      <View></View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
