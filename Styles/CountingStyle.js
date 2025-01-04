import { StyleSheet } from "react-native";

export const CountingStyle = StyleSheet.create({
  imagesContainer: {
    flexGrow: 1
  },
  images: {
    position: "relative",
    overflow: "visible",
    margin: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    resizeMode: "cover",
    height: 40,
    width: 100,
  },
  coins: {
    overflow: "visible",
    margin: 10,
    flexWrap: "wrap",
    flexDirection: "row",
    resizeMode: "cover",
    height: 47,
    width: 50,
  },
});
