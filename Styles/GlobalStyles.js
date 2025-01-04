import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create({
  /**     ------------CARD STYLING LOCATED BELOW-----------
   *
   */
  cardFront: {
    position: "absolute",
    marginRight: 5,
  },
  cardBack: {
    position: "relative",
    backfaceVisibility: "hidden",
    marginRight: 5,
  },
  cardBackTurn: {
    position: "absolute",
    backfaceVisibility: "hidden",
    opacity: 0,
  },
  cardBorder: {
    flexWrap: "wrap",
    display: "flex",
  },
  back: {
    width: "100%",
  },
  hide: {
    position: "absolute",
    opacity: 0,
    height: 115,
    width: 80,
    margin: 5,
  },
  front: {
    transform: [{ rotateY: "90deg" }],
    position: "absolute",
  },
  flipped: {
    position: "relative",
    height: 120,
    width: 85,
    transform: [{ rotateY: "0deg" }],
  },
  cardContainer: {
    height: "100%",
  },
  /**       ----------TIMER STYLING LOCATED BELOW----------
   *
   */
  timerContainer: {
    alignItems: "center",
    bottom: 20,
  },
  timerCounter: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },
  timerTitle: {
    fontSize: 30,
    color: "tomato",
    fontWeight: "bold",
    borderRadius: 50,
    textAlign: "center",
    lineHeight: 75,
  },
  timerStyle: {
    borderWidth: 10,
    borderColor: "tomato",
    borderRadius: 50,
    width: 100,
    height: 100,
  },
});
