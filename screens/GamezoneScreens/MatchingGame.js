import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useState } from "react";
import { View, Text, Dimensions, Modal, TouchableOpacity } from "react-native";
import MatchingDisplay from "../../components/MatchingDisplay";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Headers/Header";
import AudioController from "../../components/AudioController";

const MatchingImagesEasy = [
  {
    name: "Apple",
    image: require("../../assets/images/MatchingGame/Easy/Apple.png"),
    id: 1,
    match: false,
  },
  {
    name: "CD",
    image: require("../../assets/images/MatchingGame/Easy/CD.png"),
    id: 2,
    match: false,
  },
  {
    name: "Book",
    image: require("../../assets/images/MatchingGame/Easy/Book.png"),
    id: 3,
    match: false,
  },
  {
    name: "Computer",
    image: require("../../assets/images/MatchingGame/Easy/Laptop-computer.png"),
    id: 4,
    match: false,
  },
  {
    name: "Toothbrush",
    image: require("../../assets/images/MatchingGame/Easy/Toothbrush.png"),
    id: 5,
    match: false,
  },
  {
    name: "Pencil",
    image: require("../../assets/images/MatchingGame/Easy/Pencil.png"),
    id: 6,
    match: false,
  },
  {
    name: "Desk",
    image: require("../../assets/images/MatchingGame/Easy/Desk.png"),
    id: 7,
    match: false,
  },
  {
    name: "Dog",
    image: require("../../assets/images/MatchingGame/Easy/Dog.png"),
    id: 8,
    match: false,
  },
  {
    name: "Cat",
    image: require("../../assets/images/MatchingGame/Easy/Cat.png"),
    id: 9,
    match: false,
  },
  {
    name: "House",
    image: require("../../assets/images/MatchingGame/Easy/House.png"),
    id: 10,
    match: false,
  },
];

const MatchingGame = () => {
  const musicURL = require("../../assets/music/PointingGame.wav");
  const route = useRoute();
  const win = Dimensions.get("window");
  const nav = useNavigation();

  const difficulty = route.params.difficulty;

  const [items, setItems] = useState([]);
  const [randItems, setRandItems] = useState([]);

  let numItems = difficulty + 2;

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    loadItems(numItems);
    setTimeout(() => setDataLoaded(true), 1000);
  }, []);

  const loadItems = (num) => {
    // Items
    do {
      const randNum = Math.floor(Math.random() * MatchingImagesEasy.length);

      if (!items.includes(MatchingImagesEasy[randNum])) {
        MatchingImagesEasy[randNum].match = false;
        items.push(MatchingImagesEasy[randNum]);
      }
    } while (items.length < num);

    // Random Items
    do {
      const randNum = Math.floor(Math.random() * items.length);
      if (!randItems.includes(items[randNum])) {
        randItems.push(items[randNum]);
      }
    } while (randItems.length < items.length);
  };

  const [leftChoice, setLeftChoice] = useState(0);
  const [rightChoice, setRightChoice] = useState(0);

  const [disableLeft, setdisableLeft] = useState(false);
  const [disableRight, setDisableRight] = useState(false);

  const [complete, setComplete] = useState(false);

  const [numComplete, setNumComplete] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [numRounds, setNumRounds] = useState(1);

  const [gameCompleteModal, setGameCompleteModal] = useState(false);

  useEffect(() => {
    if (items.length === numComplete) {
      if (numRounds === 3) {
        setGameCompleteModal(true);
      } else {
        setShowModal(true);
      }
    }
  }, [numComplete]);

  useEffect(() => {
    if (rightChoice && leftChoice) {
      if (rightChoice.id === leftChoice.id) {
        rightChoice.match = true;
        leftChoice.match = true;
        setNumComplete(numComplete + 1);
      }
      setComplete(true);
      setDisableRight(false);
      setdisableLeft(false);
      setRightChoice(null);
      setLeftChoice(null);
    }
    setComplete(false);
    console.log(
      "This is the number of correct geusses: " +
        numComplete +
        ", This is number of numItems: " +
        items.length
    );
  }, [leftChoice, rightChoice]);

  const checkChoice = (side, item) => {
    if (side === "l") {
      setLeftChoice(item);
      setdisableLeft(true);
    }

    if (side === "r") {
      setRightChoice(item);
      setDisableRight(true);
    }
  };

  const resetItems = (arr) => {
    arr.map((item) => {
      item.match = false;
    });
  };

  const nextRound = () => {
    setDataLoaded(false);
    resetItems(items);
    setNumRounds(numRounds + 1);
    setShowModal(false);
    setNumComplete(0);
    loadItems(numItems + 1);
    if (numRounds === 3) {
      console.log("The user has played 3 rounds!");
      numItems = difficulty;
      setNumRounds(0);
      setGameCompleteModal(true);
    }
    setTimeout(() => setDataLoaded(true), 1000);
  };

  return (
    <LinearGradient colors={["transparent", "#DC143C"]} style={{ flex: 1 }}>
      <Header title={"Matching"} color={"#FF8A8A"} />
      <View style={{ flex: 1, marginTop: 100 }}>
        {!dataLoaded ? (
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 50, textAlign: "center" }}>
              Loading...
            </Text>
          </View>
        ) : (
          items.map((item, i) => {
            return (
              <MatchingDisplay
                key={i}
                leftEnabled={disableLeft}
                rightEnabled={disableRight}
                listItem={item}
                randItem={randItems[i]}
                checkChoice={checkChoice}
                complete={complete}
              />
            );
          })
        )}
        <Modal
          style={{ backgroundColor: "transparent" }}
          visible={showModal}
          transparent={true}
        >
          <LinearGradient
            style={{ flex: 1, margin: 30, marginTop: 200, borderRadius: 30 }}
            colors={["white", "red"]}
          >
            <View>
              <Text style={{ margin: 30, textAlign: "center", fontSize: 40 }}>
                Great Job!
              </Text>
              <Text style={{ fontSize: 30, textAlign: "center", padding: 30 }}>
                You can now had onto the next level !
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => nextRound()}
              style={{ alignSelf: "center", bottom: 0 }}
            >
              <LinearGradient
                style={{ borderRadius: 30 }}
                colors={["teal", "blue"]}
              >
                <Text style={{ fontSize: 30, margin: 20 }}>Next Round!</Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </Modal>
        <Modal visible={gameCompleteModal} transparent={true}>
          <LinearGradient
            style={{ flex: 1, margin: 30, marginTop: 200, borderRadius: 30 }}
            colors={["green", "transparent"]}
          >
            <Text
              style={{
                margin: 30,
                textAlign: "center",
                fontSize: 30,
                color: "white",
              }}
            >
              Great Job You Completed The Game!
            </Text>
            <TouchableOpacity
              onPress={() => nav.goBack()}
              style={{ alignSelf: "center", top: 25 }}
            >
              <LinearGradient
                style={{ borderRadius: 30 }}
                colors={["teal", "blue"]}
              >
                <Text style={{ fontSize: 30, margin: 20 }}>
                  Back To Main Menu!
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
        </Modal>
        <AudioController musicURL={musicURL} />
      </View>
    </LinearGradient>
  );
};

export default MatchingGame;
