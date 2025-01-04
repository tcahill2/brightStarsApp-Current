import { Dimensions, StyleSheet } from "react-native";

export const GameSetupStyle = StyleSheet.create({
  /**     ------------CARD STYLING LOCATED BELOW-----------
   *
   */

  GameImage: {
    flexShrink: 1,
    resizeMode: "contain",
    backgroundColor: "teal",
    borderRadius: 40,
    alignSelf: "center",
    width: 300,
    height: 170,
    marginTop: 30,
  },
  GameOption: {
    justifyContent: "center",
  },
  GameOptionText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },

  // Cashier Game Styling
  CashierGameImage: {
    resizeMode: "contain",
    backgroundColor: "tomato",
    borderRadius: 40,
    alignSelf: "center",
    paddingRight: 50,
    paddingLeft: 50,
    width: 250,
    height: 170,
    marginTop: 30,
  },

  CashierGameContainer: {
    //backgroundColor: "tomato",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  /// Modal CONFIGURATION STYLING

  ModalStyle: {
    backgroundColor: "#fff",
    flex: 1,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 100,
    marginTop: 100,
    borderRadius: 40,
    borderColor: "tomato",
    borderWidth: 5,
  },
  ModalOptions: {
    justifyContent: "center",
    flex: 1,
  },
  ModalText: {
    backgroundColor: "tomato",
    padding: 20,
    marginRight: 30,
    marginLeft: 30,
    marginBottom: 15,
    borderRadius: 40,
    justifyContent: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  ModalHeader: {
    top: 10,
    fontSize: 40,
    textAlign: "center",
    borderBottomWidth: 5,
    marginRight: 30,
    marginLeft: 30,
  },
});
