import React from "react";
import { Modal, TouchableOpacity, View, Text } from "react-native";

const GameCompleteModal = ({ bool, resetBool }) => {
  return (
    <Modal transparent={false} animationType="slide" visible={bool}>
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Text style={{ textAlign: "center", fontSize: 30, paddingBottom: 30 }}>
          Great Job You Completed The Game!
        </Text>
        <TouchableOpacity
          onPress={() => {
            resetBool();
          }}
        >
          <View style={{backgroundColor: 'tomato', borderRadius: 20}}>
            <Text
              style={{ textAlign: "center", fontSize: 25, fontWeight: "bold", padding: 20, color: 'white' }}
            >
              Return To Main Menu
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default GameCompleteModal;
