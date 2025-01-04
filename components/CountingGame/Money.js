import React, { useEffect, useRef, useState } from "react";
import Animated, {
  EasingNode,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";
import { View } from "react-native";
import { CountingStyle } from "../../Styles/CountingStyle";
import { runOnJS } from "react-native-reanimated/lib/reanimated2/core";

const Money = ({ bill, calculator, positionY, insertHeight, reset }) => {
  // Keep track of the height of the Y
  const [moneyY, setMoneyY] = useState(0);
  const [moneyHeight, setMoneyHeight] = useState(0);

  // X and Y values for the bill
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // X and Y values for the second bill
  const translateX2 = useSharedValue(0);
  const translateY2 = useSharedValue(0);

  // References to the two different bills
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const fadeAnim2 = useRef(new Animated.Value(0)).current;

  // This sends the value of the bill to the calculator function
  const AddTotal = (number) => {
    calculator(number);
  };

  // This controls what bill is fading in and out and when
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
      console.log("Received Money Ref2!");

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

  // Pan Gesture Handles the click events
  // Values for Pan Gesture Handler
  const center = Math.abs(moneyY - positionY);
  const bottomOfBoxInsert = center - moneyHeight / 2;
  const topOfBoxInsert = center + moneyHeight / 3;

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
      // 785 is height of screen
      // -108 $5 is in the clear
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
        case 5:
          runOnJS(AddTotal)(5);
          break;
        case 10:
          runOnJS(AddTotal)(10);
          break;
        case 20:
          runOnJS(AddTotal)(20);
          break;
        case 50:
          runOnJS(AddTotal)(50);
          break;
        case 100:
          runOnJS(AddTotal)(100);
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
        case 5:
          runOnJS(AddTotal)(5);
          break;
        case 10:
          runOnJS(AddTotal)(10);
          break;
        case 20:
          runOnJS(AddTotal)(20);
          break;
        case 50:
          runOnJS(AddTotal)(50);
          break;
        case 100:
          runOnJS(AddTotal)(100);
          break;
      }
    },
  });

  const moneyRef = useRef(null);
  const moneyRef2 = useRef(null);

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
      {/**
       * This is the first Card that the user will see who's opacity is set to one
       */}
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.Image
          ref={moneyRef}
          onLayout={() => {
            moneyRef.current.measure((fx, fy, width, height, px, py) => {
              setMoneyY(py);
              setMoneyHeight(height);
            });
          }}
          style={[CountingStyle.images, rStryle, { opacity: fadeAnim }]}
          source={bill.image}
        />
      </PanGestureHandler>

      <PanGestureHandler onGestureEvent={panGestureEvent2}>
        <Animated.Image
          ref={moneyRef2}
          onLayout={() => {
            moneyRef2.current.measure((fx, fy, width, height, px, py) => {
              setMoneyY(py);
              setMoneyHeight(height);
            });
          }}
          style={[
            CountingStyle.images,
            rStryle2,
            { position: "absolute", opacity: fadeAnim2 },
          ]}
          source={bill.image}
        />
      </PanGestureHandler>
    </View>
  );
};

export default Money;
