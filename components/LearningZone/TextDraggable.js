import React, { useRef, useState } from "react";
import { View, Image, Dimensions } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const TextDraggable = ({ sentence }) => {
  const win = Dimensions.get("window");

  const [textY, setTextY] = useState(0);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event, context) => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);

      console.log("This is the value of Y: " + translateY.value);
    },
  });

  const rStryle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const textRef = useRef(null);

  return (
    <View>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.Text
          ref={textRef}
          onLayout={() => {
            textRef.current.measure((fx, fy, width, height, px, py) => {
              setTextY(py);
              console.log("This is the height: " + py);
            });
          }}
          style={[
            rStryle,
            {
              textAlign: "center",
              padding: 10,
              borderRadius: 10,
              borderWidth: 3,
              fontSize: 15,
              fontWeight: "bold",
              margin: 10,
            },
          ]}
        >
          {sentence}
        </Animated.Text>
      </PanGestureHandler>
    </View>
  );
};

export default TextDraggable;
