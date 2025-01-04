import React from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";

const LevelCompleteModal = ({visible, EndGame, overallTime}) => {
  return (
    <Modal
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#606070",
        margin: 50,
      }}
      animationType="fade"
      transparent={false}
      visible={visible}
    >
      <Text
        style={{
          fontSize: 30,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Great Job!
      </Text>
      <Text
        style={{
          fontSize: 30,
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        It Took You This Long To Complete The 4 Levels!
      </Text>
      <View
        style={{
          fontSize: 30,
          justifyContent: "center",
          textAlign: "center",
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 25 }}>
          {("0" + Math.floor((overallTime / 60000) % 60)).slice(-2)}:
        </Text>
        <Text style={{ fontSize: 25 }}>
          {("0" + Math.floor((overallTime / 1000) % 60)).slice(-2)}:
        </Text>
        <Text style={{ fontSize: 25 }}>
          {("0" + Math.floor((overallTime / 10) % 100)).slice(-2)}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            justifyContent: "center",
            textAlign: "center",
            bottom: 350,
            fontWeight: "bold",
          }}
        >
          Excellent Work!!
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          EndGame();
        }}
      >
        <View style={{ bottom: 20, marginRight: 50, marginLeft: 50 }}>
          <Text
            style={{
              padding: 20,
              textAlign: "center",
              fontSize: 25,
              backgroundColor: "tomato",
              borderRadius: 20,
            }}
          >
            Done
          </Text>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default LevelCompleteModal