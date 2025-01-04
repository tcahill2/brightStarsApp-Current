import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  PanResponder,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MatchingStyles } from "../Styles/MatchingStyles";
import Animated from "react-native-reanimated";

const MatchingDisplay = ({
  listItem,
  randItem,
  checkChoice,
  leftEnabled,
  rightEnabled,
  complete,
}) => {
  const leftTabRef = useRef();

  const win = Dimensions.get("window");

  const [rightBtnOpacity, setRightBtnOpacity] = useState(1);
  const [leftBtnOpacity, setLeftBtnOpacity] = useState(1);
  const [leftColor, setLeftColor] = useState("tomato");
  const [rightColor, setRightColor] = useState("tomato");

  useEffect(() => {
    if (!rightEnabled) {
      setRightBtnOpacity(0.5);
    } else {
      setRightBtnOpacity(1);
    }

    if (!leftEnabled) {
      setLeftBtnOpacity(0.5);
    } else {
      setLeftBtnOpacity(1);
    }
  }, [leftEnabled, rightEnabled]);

  return (
    <View style={{ flex: 1 }}>
      <Animated.View style={{ flexDirection: "column" }}>
        <TouchableOpacity
          disabled={leftEnabled}
          onPress={() => {
            checkChoice("l", listItem);
          }}
          ref={leftTabRef}
          style={{
            borderTopRightRadius: 20,
            borderBottomEndRadius: 20,
            backgroundColor: listItem.match ? "green" : "tomato",
            marginTop: 20,
            padding: 20,
            width: win.width * 0.3,
            height: win.height * 0.1,
            width: "40%",
            opacity: leftBtnOpacity,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            {listItem.name}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={rightEnabled}
          onPress={() => {
            console.log(
              "Detect Click For: " +
                randItem.name +
                ", and ID is: " +
                randItem.id
            );
            checkChoice("r", randItem);
          }}
          style={{
            position: "absolute",
            alignSelf: "flex-end",
            borderTopLeftRadius: 20,
            borderBottomStartRadius: 20,
            backgroundColor: randItem.match ? "green" : "tomato",
            marginTop: 20,
            paddingLeft: 20,
            width: "35%",
            opacity: rightBtnOpacity,
          }}
        >
          <Image
            style={{ width: win.width * 0.2, height: win.height * 0.1 }}
            resizeMode={"contain"}
            source={randItem.image}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default MatchingDisplay;
