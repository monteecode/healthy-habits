import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={{ backgroundColor: "red", width: "100%" }}>
      <TextInput
        placeholder="Enter health goal"
        onChangeText={props.goalInputHandler}
        value={props.enteredGoal}
        style={styles.inputContainer}
      />
      <Button
        title="ADD"
        style={{ marginBottom: 20 }}
        onPress={props.addGoalHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
});
export default GoalInput;
