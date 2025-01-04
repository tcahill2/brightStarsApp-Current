import { StyleSheet } from "react-native";

export const MatchingStyles = StyleSheet.create({
  BasicStyle: {
    flex: 1,
    backgroundColor: "tomato",
    marginTop: 20,
    padding: 20,
    width: "35%",
  },
  MatchingDisplay: {
    flexDirection: "column",
  },
  MatchingRight: {
    position: "absolute",
    alignSelf: "flex-end",
    borderTopLeftRadius: 20,
    borderBottomStartRadius: 20,
  },
  MatchingLeft: {
    height: 30,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
  },
  MatchingTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  ButtonContainer: {
    alignSelf: "center",
    marginTop: 200,
    marginBottom: 0,
    width: 150,
    backgroundColor: "tomato",
    borderRadius: 100,
  },
  ButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    padding: 30,
    fontSize: 20,
  },
});
