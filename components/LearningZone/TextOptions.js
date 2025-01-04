import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const TextOption = ({ text, id, round, nextLevel }) => {
  const [opacity, setOpacity] = useState(100);
  const [color, setColor] = useState("grey");

  // Get the dimensions of the users screen
  const win = Dimensions.get("window");

  useEffect(() => {
    setColor("grey");
  }, [round]);

  const checkAnswer = () => {
    if (id === round) {
      setColor("green");
      setTimeout(() => nextLevel(), 1000);
    } else {
      setColor("red");
    }
  };

  return (
    <View style={{ marginTop: 5 }}>
      <TouchableOpacity
        onPress={() => {
          console.log("This is the ID of the item: " + id);
          checkAnswer();
        }}
        style={{ margin: 10 }}
      >
        <Text
          style={{
            fontSize: 20,
            backgroundColor: color,
            color: "white",
            borderRadius: 30,
            padding: 10,
            textAlign: "center",
            opacity: opacity,
          }}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TextOption;
