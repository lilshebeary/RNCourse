import { StyleSheet, Text, View, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "rgb(238,44,130)" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#3fb8af",
    
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "black",
    padding: 8,
    fontSize: 20
  },
});
