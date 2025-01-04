import React from "react";
import { View, Text } from "react-native";

const MemoryTabLeft = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "teal",
        marginLeft: "10%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      }}
    >
      <Text
        style={{
          textAlign: "left",
          marginLeft: 10,
          fontSize: 10,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        Image CD
      </Text>
    </View>
  );
};

export default MemoryTabLeft;
