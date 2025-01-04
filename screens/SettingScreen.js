import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Headers/Header";
import { LinearGradient } from "expo-linear-gradient";

function SettingScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header title={'Settings'} color={'#884DFF'} navigation={navigation} />
      <LinearGradient
        style={{ flex: 1, height: 30, width: "100%" }}
        colors={["#DACE9D", "#E4B64B"]}
      >
        <Text style={{ textAlign: "center", fontSize: 30 }}>Hello World</Text>
      </LinearGradient>
    </View>
  );
}

export default SettingScreen;
