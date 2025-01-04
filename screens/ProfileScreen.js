import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Headers/Header";

const ProfileScreen = ({ navigation }) => {
  return (
    <View>
      <Header title={"Profile"} color={"#F67280"} navigation={navigation} />
      <Text>Hey This is the profile screen!</Text>
    </View>
  );
};

export default ProfileScreen;
