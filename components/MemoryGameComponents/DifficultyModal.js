import React, { useEffect, useState } from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GameSetupStyle } from "../../Styles/GameSetupStyles";

const DifficultyModal = ({ visible, navigateTo }) => {
  const [difficulty, setDifficulty] = useState(0);

  useEffect(() => {
    if (difficulty !== 0) {
      navigateTo(difficulty);
    }
    setDifficulty(0);
  }, [difficulty]);

  return (
    <SafeAreaProvider>
      <Modal
        useNativeDriver={true}
        animationType="slide"
        transparent={true}
        visible={visible}
      >
        <View style={GameSetupStyle.ModalStyle}>
          <Text style={GameSetupStyle.ModalHeader}>Select Difficulty</Text>
          <View style={GameSetupStyle.ModalOptions}>
            <TouchableOpacity onPress={() => setDifficulty(1)}>
              <Text style={GameSetupStyle.ModalText}>Easy</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDifficulty(2)}>
              <Text style={GameSetupStyle.ModalText}>Medium</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setDifficulty(3)}>
              <Text style={GameSetupStyle.ModalText}>Hard</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setDifficulty(4)}>
            <Text style={GameSetupStyle.ModalText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </SafeAreaProvider>
  );
};

export default DifficultyModal;
