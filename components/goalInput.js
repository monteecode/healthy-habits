import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter health goal"
          onChangeText={props.goalInputHandler}
          value={props.enteredGoal}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttons}>
            <Button
              title="What is your health goal?"
              onPress={props.addGoalHandler}
            />
          </View>
          <View style={styles.buttons}>
            <Button title="Cancel goal" onPress={props.onCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginBottom: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttons: {
    width: "100%",
  },
});
export default GoalInput;
