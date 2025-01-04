import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import LevelCompleteModal from "../../components/LevelCompleteModal";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { GlobalStyles } from "../../Styles/GlobalStyles";
import Timer from "../../components/Timer";
import CardDisplay from "../../components/CardDisplay";
import Header from "../../components/Headers/Header";
import { LinearGradient } from "expo-linear-gradient";
import AudioController from "../../components/AudioController";
import StartGameMemory from "../../components/CountingGame/Modals/StartGameMemory";

/**
 *
 * @todo Add Music to the game for the user
 * @todo Make the overall appearance of it alot more prettyier and better
 * @todo programmatically change the size of the cards that appear.
 */

function MatchingGame() {
  /**
   *          ============= Variables USED =============
   *
   *          useState Variables that will be used.
   */
  const musicURL = require("../../assets/music/MemoryGame.wav");
  const route = useRoute();
  let levelDifficulty = route.params.difficulty;

  console.log(levelDifficulty);

  // Start the game and if its completed
  const [startGame, setStartGame] = useState(false);
  const [clock, setClock] = useState(false);
  const [level, setLevel] = useState(levelDifficulty);

  const [timer, setTimer] = useState(0);
  const [completeModal, setCompleteModal] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [overallTime, setOverallTime] = useState(0);
  /**
   *      ============== GAME SETUP ================
   *
   *      Based off the difficulty the user selected will decide on the cards
   *      and the amount of cards that are displayed to them.
   *
   */

  useEffect(() => {
    if (level === 5 + levelDifficulty) {
      setCompleteModal(true);
    }

    console.log("Level Has Been Updated: " + level);
  }, [level]);

  const navigation = useNavigation();

  const EndGame = () => {
    setModalVisible(false);
    setLevel(0);
    navigation.popToTop();
  };

  const StartGame = () => {
    setClock(true);
    setStartGame(true);
  };

  const NextLevel = () => {
    setModalVisible(true);
    setClock(false);
    setLevel(level + 1);
  };

  // Gets Timer Values
  const timerValue = (time) => {
    setOverallTime(timer + time);
    setTimer(time);
  };

  return (
    <>
      <Header title={"Matching"} color={"#F8DE7E"} />
      <LinearGradient colors={["#F8DE7E", "transparent"]} style={{ flex: 1 }}>
        <View style={{ alignItems: "center", marginTop: 130 }}>
          <Text>Timer</Text>
          <Timer timer={timerValue} isActive={clock} />
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", justifyContent: "center" }}
        >
          <CardDisplay
            isActive={startGame}
            level={level}
            difficulty={levelDifficulty}
            NextLevel={NextLevel}
          />
        </View>
        <LevelCompleteModal
          EndGame={EndGame}
          visible={completeModal}
          overallTime={overallTime}
        />
        <Modal
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#606070",
            margin: 50,
          }}
          animationType="fade"
          transparent={false}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
            console.log("closing Modal!!!");
          }}
        >
          <Text
            style={{
              fontSize: 30,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Great Job!
          </Text>
          <Text
            style={{
              fontSize: 30,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            It Took You
          </Text>
          <View
            style={{
              fontSize: 30,
              justifyContent: "center",
              textAlign: "center",
              flex: 1,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 25 }}>
              {("0" + Math.floor((timer / 60000) % 60)).slice(-2)}:
            </Text>
            <Text style={{ fontSize: 25 }}>
              {("0" + Math.floor((timer / 1000) % 60)).slice(-2)}:
            </Text>
            <Text style={{ fontSize: 25 }}>
              {("0" + Math.floor((timer / 10) % 100)).slice(-2)}
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 30,
                justifyContent: "center",
                textAlign: "center",
                bottom: 350,
                fontWeight: "bold",
              }}
            >
              Excellent Work!!
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(false), setStartGame(false);
            }}
          >
            <View style={{ bottom: 20, marginRight: 50, marginLeft: 50 }}>
              <Text
                style={{
                  padding: 20,
                  textAlign: "center",
                  fontSize: 25,
                  backgroundColor: "tomato",
                  borderRadius: 20,
                }}
              >
                Next Level
              </Text>
            </View>
          </TouchableOpacity>
        </Modal>
        <StartGameMemory visibility={modalVisible} startGame={StartGame} />
        <AudioController musicURL={musicURL} />
      </LinearGradient>
    </>
  );
}

export default MatchingGame;
