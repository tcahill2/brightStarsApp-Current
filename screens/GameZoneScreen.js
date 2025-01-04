import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Header from "../components/Headers/Header";
import DifficultyModal from "../components/MemoryGameComponents/DifficultyModal";
import { GameSetupStyle } from "../Styles/GameSetupStyles";
import { LinearGradient } from "expo-linear-gradient";

/**
 *
 * @param {navigation} param0   This handles the navigation between the stack screens.
 *
 * @returns                     This returns the gameZone screen which will display all the available
 *                              games to the user.
 *
 * @description                 The following file displays all available games to the user that they are able
 *                              to currently play. This will display to them in a menu like way in which they will
 *                              be able to pick from.
 */

const GAME_DATA = [
  {
    name: "Memory Game",
    id: 0,
    image: require("../assets/images/Matching_Cards/PICTURE_OF_PLAYINGCARDS.png"),
    description:
      "This is your typical game of cards! You will have to pick cards at random! Flipping them over and trying to remember what colors are where! Ranging from three different difficulties",
    screen: "Memory",
    color: "#FFC30B",
  },
  {
    name: "Counting Game",
    id: 1,
    image: require("../assets/images/Matching_Cards/CASH_REGISTER_COUNTINGLOGO.png"),
    description:
      "In this game you must return the appropriate amount of change back to the user! The register will display the amount required and it is your job to make the change!",
    screen: "CountingGame",
    color: "#76BA1B",
  },
  {
    name: "Match Words To Images",
    id: 2,
    image: require("../assets/images/Matching_Cards/MatchingGameImage.png"),
    description:
      "The matching game consist of words and images! It is your job to match them to the appropriate word that they resemble! Each levels changes with difficulty ranging from option to words / pictures!",
    screen: "MatchingGame",
    color: "#B80F0A",
  },
];

const GameZoneScreen = ({ name }) => {
  // Get The Data For The Screen Size
  const win = Dimensions.get("window");

  //Access the navigation Hook
  const nav = useNavigation();

  //Getters n Setters
  const [difficultyModalVisible, setDifficultyModalVisible] = useState(false);
  const [screen, setScreen] = useState("");

  const navigateTo = (difficulty) => {
    if (difficulty !== 4) {
      nav.navigate(screen, (difficulty = { difficulty }));
    }
    setDifficultyModalVisible(false);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["transparent", "#C27933"]} style={{ flex: 1 }}>
        {/**
         *        Header Code With The Navigation
         */}
        <Header title={"GameZone"} color={"#d7b553"} />
        <View style={{ flex: 1, marginTop: 125 }}>
          {/**
           *    Scroll View Which is Main View
           */}
          <ScrollView
            scrollEnabled={true}
            nestedScrollEnabled={true}
            contentContainerStyle={{ justifyContent: "center" }}
          >
            <FlatList
              data={GAME_DATA}
              horizontal={true}
              decelerationRate={0}
              snapToInterval={win.width + 20}
              nestedScrollEnabled={true}
              snapToAlignment="center"
              style={{ flex: 1, marginBottom: 30 }}
              contentContainerStyle={{ justifyContent: "space-around" }}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 30,
                        fontWeight: "bold",
                        padding: 20,
                      }}
                    >
                      {item.name}
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        setScreen(item.screen),
                          setDifficultyModalVisible(!difficultyModalVisible);
                      }}
                      key={item.id}
                      style={{
                        width: win.width * 0.8,
                        height: win.width,
                        margin: 50,
                      }}
                    >
                      <LinearGradient
                        style={{ flex: 1, borderRadius: 30 }}
                        colors={["transparent", item.color]}
                      >
                        <Image
                          source={item.image}
                          resizeMode="contain"
                          style={{
                            width: win.width * 0.6,
                            flex: 1,
                            alignSelf: "center",
                          }}
                        />
                        <View>
                          <Text
                            style={{
                              marginTop: 5,
                              textAlign: "center",
                              flexWrap: "wrap",
                              flexDirection: "row",
                              fontSize: 20,
                              fontWeight: "bold",
                              padding: 10,
                            }}
                          >
                            {item.description}
                          </Text>
                        </View>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </ScrollView>
        </View>
        <View>
          <DifficultyModal
            visible={difficultyModalVisible}
            navigateTo={navigateTo}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default GameZoneScreen;

const styles = StyleSheet.create({
  gameStyling: {
    alignItems: "center",
    backgroundColor: "#FD6A02",
    padding: 10,
    borderRadius: 10,
  },
  textStyling: {
    fontSize: 24,
  },
  gameContainer: {
    backgroundColor: "#ffff",
  },
  seperator: {
    paddingRight: 100,
    paddingLeft: 100,
    alignSelf: "center",
  },
  button: {
    backgroundColor: "tomato",
    borderRadius: 40,
    padding: 10,
    alignContent: "center",
    overflow: "hidden",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    paddingTop: 10,
    textAlign: "center",
    color: "#363636",
  },
});
