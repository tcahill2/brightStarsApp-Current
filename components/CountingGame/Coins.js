import React, { useEffect, useRef, useState } from "react";
import Animated, {
  EasingNode,
  FadeOut,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import { View, Image } from "react-native";
import { CountingStyle } from "../../Styles/CountingStyle";
import { runOnJS } from "react-native-reanimated/lib/reanimated2/core";

const Coins = ({ bill, calculator, positionY, insertHeight, reset }) => {
  // X and Y values for the bill
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Second Images X and Y values
  const translateX2 = useSharedValue(0);
  const translateY2 = useSharedValue(0);

  // References to the two animation values
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  const [total, setTotal] = useState(0);

  const [coinY, setCoinY] = useState(0);
  const [coinHeight, setCoinHeight] = useState(0);

  const AddTotal = (number) => {
    calculator(number);
  };

  const FadeOut = (ref) => {
    if (ref === 1) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        easing: EasingNode.linear,
      }).start();

      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: 1000,
        easing: EasingNode.linear,
      }).start();

      setTimeout(() => {
        translateX.value = 0;
        translateY.value = 0;
      }, 1000);
    } else {
      
      Animated.timing(fadeAnim2, {
        toValue: 0,
        duration: 1000,
        easing: EasingNode.linear,
      }).start();

      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        easing: EasingNode.linear,
      }).start();

      setTimeout(() => {
        translateX2.value = 0;
        translateY2.value = 0;
      }, 1000);
    }
  };

  useEffect(() => {
    if (reset) {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      AddTotal(0);
    }
  }, [reset]);

  const coinRef = useRef(null);
  const coinRef2 = useRef(null);

  const center = Math.abs(positionY - coinY);
  const bottomOfBoxInsert = center - coinHeight / 2;
  const topOfBoxInsert = center + coinHeight / 3;

  // Pan Gesture Handles the click events
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      if (
        translateY.value > 0 ||
        translateY.value > -bottomOfBoxInsert ||
        translateY.value < -topOfBoxInsert
      ) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
        return;
      }

      runOnJS(FadeOut)(1);

      switch (bill.id) {
        case 2:
          runOnJS(AddTotal)(2);
          break;
        case 1:
          runOnJS(AddTotal)(1);
          break;
        case 0.25:
          runOnJS(AddTotal)(0.25);
          break;
        case 0.1:
          runOnJS(AddTotal)(0.1);
          break;
        case 0.05:
          runOnJS(AddTotal)(0.05);
          break;
      }
    },
  });

  const panGestureEvent2 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX2.value;
      context.translateY = translateY2.value;
    },
    onActive: (event, context) => {
      translateX2.value = event.translationX + context.translateX;
      translateY2.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      // 785 is height of screen
      // -108 $5 is in the clear
      if (
        translateY2.value > 0 ||
        translateY2.value > -bottomOfBoxInsert ||
        translateY2.value < -topOfBoxInsert
      ) {
        translateX2.value = withSpring(0);
        translateY2.value = withSpring(0);
        return;
      }

      runOnJS(FadeOut)(2);

      switch (bill.id) {
        case 2:
          runOnJS(AddTotal)(2);
          break;
        case 1:
          runOnJS(AddTotal)(1);
          break;
        case 0.25:
          runOnJS(AddTotal)(0.25);
          break;
        case 0.1:
          runOnJS(AddTotal)(0.1);
          break;
        case 0.05:
          runOnJS(AddTotal)(0.05);
          break;
      }
    },
  });

  // This moves the Bill Accordingly
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

  const rStryle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX2.value,
        },
        {
          translateY: translateY2.value,
        },
      ],
    };
  });

  // Returns the HTML of the Bill
  return (
    <View>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.Image
          ref={coinRef}
          onLayout={() => {
            coinRef.current.measure((fx, fy, width, height, px, py) => {
              setCoinY(py);
              setCoinHeight(height);
            });
          }}
          style={[
            CountingStyle.coins,
            rStryle,
            { opacity: fadeAnim, position: "relative" },
          ]}
          source={bill.image}
        />
      </PanGestureHandler>

      <PanGestureHandler onGestureEvent={panGestureEvent2}>
        <Animated.Image
          ref={coinRef2}
          onLayout={() => {
            coinRef2.current.measure((fx, fy, width, height, px, py) => {
              setCoinY(py);
              setCoinHeight(height);
            });
          }}
          style={[
            CountingStyle.coins,
            rStryle2,
            { opacity: fadeAnim2, position: "absolute" },
          ]}
          source={bill.image}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Coins;
