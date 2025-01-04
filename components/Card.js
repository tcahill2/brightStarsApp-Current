import React, { useRef } from "react";
import {
  View,
  Image,
  TouchableHighlight,
  Animated,
  Pressable,
  Dimensions,
} from "react-native";
import { GlobalStyles } from "../Styles/GlobalStyles";

/**
 * 
 * @todo      CREATE BLACK CARD / NOT SOLID BLACK / OFFSET OF BLACK
 *            ADD ROYALTY FREE MUSIC
 * 
              SHAPES:
              TRIANGLE, CIRCLE, SQUARE, STAR, OCTAGON, DIAMOND, CROSS,
              PENTAGON, HEART, CRESCENT (HALF MOON)
 * 
 */

export default function Card({ card, handleChoice, disabled, flipped }) {
  // This takes the card clicked and passes it to the parent function.
  const handleClick = () => {
    if (!disabled) {
      if (!flipped) {
        !!flipRotation ? flipToBack() : flipToFront();
        handleChoice(card);
      }
    }
  };

  const win = Dimensions.get("window");

  /**   =======================================
   *          FLIP ANIMATION BELOW
   *    =======================================
   *
   *@todo      implement animated:
   *               This will be used to animate the cards flipping over to make
   *               them look cleaner and more appropriate.
   */

  const flipAnimation = useRef(new Animated.Value(0)).current;

  let flipRotation = 0;

  flipAnimation.addListener(({ value }) => (flipRotation = value));

  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };

  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,

      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  return (
    <>
      <Pressable onPress={handleClick}>
        <Animated.Image
          resizeMode={"contain"}
          style={
            flipped
              ? [
                  { ...flipToFrontStyle },
                  GlobalStyles.cardBack,
                  { height: win.height * 0.2, width: win.width * 0.2 },
                  flipToFront(),
                ]
              : [
                  GlobalStyles.cardFront,
                  { ...flipToBackStyle },
                  { height: win.height * 0.2, width: win.width * 0.2 },
                  flipToFront(),
                ]
          }
          source={card.image}
        />
        <Animated.Image
          resizeMode={"contain"}
          style={
            flipped
              ? [
                  flipToFront(),
                  { ...flipToFrontStyle },
                  GlobalStyles.cardBackTurn,
                  { height: win.height * 0.2, width: win.width * 0.2 },
                ]
              : [
                  GlobalStyles.cardBack,
                  { ...flipToBackStyle },
                  { height: win.height * 0.2, width: win.width * 0.2 },
                  flipToBack(),
                ]
          }
          source={require("../assets/images/Matching_Cards/BACKGROUND_CARD.png")}
        />
      </Pressable>
    </>
  );
}
