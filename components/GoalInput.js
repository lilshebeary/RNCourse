import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
// import img from '../assets/images/goalImage.png';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goalImage.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button1}>
            <Button 
              color="#1f5c57" 
              title="Add Goal" 
              onPress={addGoalHandler} 
            />
          </View>
          <View style={styles.button2}>
            <Button 
              color="#f31282" 
              title="Cancel" 
              onCancel={props.onCancel} 
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgb(113,206,126)",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    padding: 10,
    marginTop: 20,
    borderRadius: 2,
    color: "#ffebeb",
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button1: {
    width: 120,
    marginHorizontal: 8,
    marginTop: 20,
    padding: 5,
    // backgroundColor: '#ba55d3'
    // borderWidth: 1,
    // borderColor: "#ba55d3",
  },
  button2: {
    width: 120,
    marginHorizontal: 8,
    marginTop: 20,
    padding: 5,
    // backgroundColor: '#f31282'
    // borderWidth: 1,
    // borderColor: "#f31282",
  },
  image: {
    height: 200,
    width: 200,
    margin: 20,
  },
});
