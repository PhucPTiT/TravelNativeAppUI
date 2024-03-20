import React, { useState } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

const Carousel = ({ initialValue }) => {
  const [number, setNumber] = useState(initialValue || 0);

  const handleIncrease = () => {
    setNumber(number + 1);
  };

  const handleDecrease = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
            <Text>←</Text>
        </TouchableOpacity>
        <Text>{number}</Text>
        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
            <Text>→</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 5,
  },
});

export default Carousel;
