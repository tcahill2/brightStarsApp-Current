import React from "react";
import { View, Text } from "react-native";

const MemoryTabRight = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "red",
        marginRight: "10%",
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textAlign: "right",
          marginRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        CD
      </Text>
    </View>
  );
};

export default MemoryTabRight;
