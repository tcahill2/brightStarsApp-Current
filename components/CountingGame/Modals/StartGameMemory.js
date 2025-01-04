import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Dimensions, Modal, Text, View } from "react-native";

const StartGameMemory = ({ startGame, visibility }) => {
  const [visible, setVisible] = useState(true);
  const win = Dimensions.get("window");
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    console.log("receiving visibility as: " + visibility);
    if (!visibility) {
      setVisible(!visibility);
      setTimer(5);
    }
  }, [visibility]);

  useEffect(() => {
    if (timer > 0) {
      //setTimeout(() => setTimer(timer - 1), 1000);
    }
    if (timer === 0) {
      startGame();
      setVisible(false);
    }
  }, [timer]);

  return (
    <Modal transparent={true} visible={visible} style={{}}>
      <LinearGradient
        colors={["#F8B195", "#355C7D"]}
        style={{
          marginTop: win.height * 0.25,
          marginRight: 30,
          marginLeft: 30,
          borderRadius: 30,
          padding: 10,
          height: win.height * 0.5,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            fontWeight: "bold",
            color: "white",
          }}
        >
          The Memory Game
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            color: "white",
            paddingTop: 30,
          }}
        >
          Try and find the cards that match!
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            color: "white",
            marginTop: 40,
          }}
        >
          The Game Will Start In:
        </Text>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          {timer}
        </Text>
      </LinearGradient>
    </Modal>
  );
};

export default StartGameMemory;
