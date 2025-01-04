import { View, Modal, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useRef, useState } from "react";

const WrongSubmitModal = ({ hide, isVisible, reward }) => {
  useEffect(() => {
    console.log("This is the value of isVisible: " + isVisible);
  }, [isVisible]);
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          marginTop: "80%",
        }}
      >
        <Text style={{ fontSize: 20, textAlign: "center", padding: 20 }}>
          Your are trying to find the total:
        </Text>
        <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
          $ {parseFloat(reward).toFixed(2)}
        </Text>
        <Text style={{ fontSize: 30, textAlign: "center", padding: 20 }}>
          Sorry But It Looks Like That's Not Right!
        </Text>
        <TouchableOpacity
          onPress={() => {
            hide();
          }}
        >
          <Text
            style={{
              fontSize: 30,
              padding: 20,
              backgroundColor: "red",
              borderRadius: 20,
              color: "white",
            }}
          >
            Okay
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default WrongSubmitModal;
