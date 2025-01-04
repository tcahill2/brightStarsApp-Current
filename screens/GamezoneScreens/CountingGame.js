import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
  Button,
  SafeAreaView,
} from "react-native";
import Money from "../../components/CountingGame/Money";
import Coins from "../../components/CountingGame/Coins";
import { CountingStyle } from "../../Styles/CountingStyle";
import WrongSubmitModal from "../../components/CountingGame/Modals/WrongSubmitModal";
import { useNavigation, useRoute } from "@react-navigation/native";
import GameCompleteModal from "../../components/CountingGame/Modals/GameCompleteModal";
import AudioController from "../../components/AudioController";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../../components/Headers/Header";

const MoneyImages = [
  {
    image: require("../../assets/images/CountingImages/5_Bill_BST.png"),
    id: 5,
  },
  {
    image: require("../../assets/images/CountingImages/10_Bill_BST.png"),
    id: 10,
  },
  {
    image: require("../../assets/images/CountingImages/20_Bill_BST.png"),
    id: 20,
  },
  {
    image: require("../../assets/images/CountingImages/50_Bill_BST.png"),
    id: 50,
  },
];

const CoinImages = [
  {
    image: require("../../assets/images/CountingImages/2_Toonie_BST.png"),
    id: 2,
  },
  {
    image: require("../../assets/images/CountingImages/1_Dollar_BST.png"),
    id: 1,
  },
  {
    image: require("../../assets/images/CountingImages/25_Cents_BST.png"),
    id: 0.25,
  },
  {
    image: require("../../assets/images/CountingImages/10_Cents_BST.png"),
    id: 0.1,
  },
  {
    image: require("../../assets/images/CountingImages/5_Cents_BST.png"),
    id: 0.05,
  },
];

/**
 *
 * @todo If Player hits submit and the answer is wrong notify that user of this
 * @todo Setup the number of rounds that the user will play:
 * @todo Make it so that the money regenrates when it is moved from the play area
 * @todo Add music to the area to create a more entertaining area
 * @todo Create a prettier environment
 */

function CountingGame() {
  const musicURL = require("../../assets/music/Counting_Game.mp3");
  // This is to access the paramaters passed through the navigation
  const route = useRoute();
  const difficulty = route.params.difficulty;

  /**
   *          Sets-Up the initial difficulty and control the regneration
   */

  const [numMax, setNumMax] = useState(0);
  const [numMin, setNumMin] = useState(0);
  const [reward, setReward] = useState(1);
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    console.log("THIS IS THE DIFFICULTY BEING PASSED : " + difficulty);
    switch (difficulty) {
      case 1:
        setupDifficulty(20, 1);
        break;
      case 2:
        setupDifficulty(75, 19);
        break;
      case 3:
        setupDifficulty(200, 74);
        break;
    }
  }, []);

  // This gets passed a value of the max and min number and sets it to a state variable
  const setupDifficulty = (maxNum, minNum) => {
    setNumMax(maxNum);
    setNumMin(minNum);

    // Calculates the temp Math value of the amount they are too find
    let temp = (Math.random() * (maxNum - minNum + 1) + minNum).toFixed(2);

    // If they are on level 1 remove the decimal points otherwise keep them
    if (difficulty === 1) {
      console.log("Math Equals: " + temp);
      temp = Math.floor(temp);
      setReward(temp);
    } else {
      /**
       *      Round the decimal either up or down so that it is 5 or Zero
       */

      // Convert to a string and get the last char in it to round up or down.
      let tempStr = temp.toString();
      if (tempStr.length >= 6) {
        console.log("Temp Value detected over 100!");
        let tempVal = tempStr.slice(5);
        tempStr = tempStr.substring(0, 5);

        if ((tempVal <= 7 && tempVal >= 5) || (tempVal >= 3 && tempVal <= 5)) {
          tempStr = tempStr + (5).toString();
          temp = parseFloat(tempStr);
        }
        if ((tempVal >= 0 && tempVal <= 2) || (tempVal <= 9 && tempVal >= 8)) {
          tempStr = tempStr + (0).toString();
          console.log(tempStr);
          temp = parseFloat(tempStr);
        }

        setReward(temp);
      }
      let tempVal = tempStr.slice(4);

      tempStr = tempStr.substring(0, 4);

      console.log("This is the Value of TempStr: " + tempStr);
      console.log("This is the Value of tempVal: " + tempVal);
      if ((tempVal <= 7 && tempVal >= 5) || (tempVal >= 3 && tempVal <= 5)) {
        tempStr = tempStr + (5).toString();
        temp = parseFloat(tempStr);
      }
      if ((tempVal >= 0 && tempVal <= 2) || (tempVal <= 9 && tempVal >= 8)) {
        tempStr = tempStr + (0).toString();
        console.log(tempStr);
        temp = parseFloat(tempStr);
      }

      console.log("This is the value of temp: " + temp);
      setReward(temp);
    }
  };
  console.log("1. This is what reward was set to: " + reward);

  /**
   *          Verify that the user only plays 5 rounds of the game and to end afterwards
   */

  // Data used to keep track of round numbers and the total inputted
  const [round, setRound] = useState(1);

  // This is used to find the position of the insert box
  const [posY, setPosY] = useState(0);
  const [height, setHeight] = useState(0);

  // Keeps track of data throughout the game
  const [reset, setReset] = useState(false);

  // Gets set to true when the game is completed
  const [gameCompleted, setGameCompleted] = useState(false);
  const [levelPass, setLevelPass] = useState(false);
  const [showError, setShowError] = useState(false);
  const [prevNumber, setPrevNumber] = useState(0);

  // Gets passed to money and coins component to add there values to the total
  // This calculates the total value of what the user has submitted
  const Calculator = (number) => {
    setPrevNumber(number);
    setTotal(total + number);
  };

  useEffect(() => {
    console.log(
      "Checking totals, reward = " + reward + ", The total = " + total
    );
    if (parseFloat(total) === parseFloat(reward)) {
      Submit();
    }

    if (total > reward) {
      setShowError(true);
      setTotal(total - prevNumber);
    }
  }, [total]);

  // This hides the modal
  const hideError = () => {
    setShowError(false);
  };

  const navigation = useNavigation();

  const hideGameCompleted = () => {
    setGameCompleted(false);
    navigation.popToTop();
  };

  const Reset = () => {
    setReset(true);
    setTotal(0);
  };

  // Resets the value of reset
  useEffect(() => {
    if (reset) {
      setReset(false);
    }
  }, [reset]);

  // Submit button checks the logic of their answer
  const Submit = () => {
    console.log("\nThis is the TOTAL: " + total.toFixed(2));
    console.log("This is the REWARD: " + reward + "\n");

    if (round === 5) {
      setGameCompleted(true);
    } else {
      if (total.toFixed(2) === parseFloat(reward).toFixed(2)) {
        setLevelPass(true);

        // Calculates the temp Math value of the amount they are too find
        let temp = (Math.random() * (numMax - numMin + 1) + numMin).toFixed(2);

        // If they are on level 1 remove the decimal points otherwise keep them
        if (difficulty === 1) {
          temp = Math.floor(temp);
          temp = temp.toFixed(2);
          console.log("SUBMIT LOG: This is Temp VALUEE: " + temp);
          setTimeout(() => setReward(temp), 1000);
        } else {
          /**
           *      Round the decimal either up or down so that it is 5 or Zero
           */

          // Convert to a string and get the last char in it to round up or down.

          let tempStr = temp.toString();
          if (tempStr.length >= 6) {
            console.log("Temp Value detected over 100!");
            let tempVal = tempStr.slice(5);
            tempStr = tempStr.substring(0, 5);

            if (
              (tempVal <= 7 && tempVal >= 5) ||
              (tempVal >= 3 && tempVal <= 5)
            ) {
              tempStr = tempStr + (5).toString();
              temp = parseFloat(tempStr);
            }
            if (
              (tempVal >= 0 && tempVal <= 2) ||
              (tempVal <= 9 && tempVal >= 8)
            ) {
              tempStr = tempStr + (0).toString();
              console.log(tempStr);
              temp = parseFloat(tempStr);
            }

            setReward(temp);
          }

          let tempVal = tempStr.slice(4);

          tempStr = tempStr.substring(0, 4);

          console.log("This is the Value of TempStr: " + tempStr);
          console.log("This is the Value of tempVal: " + tempVal);
          if (
            (tempVal <= 7 && tempVal >= 5) ||
            (tempVal >= 3 && tempVal <= 5)
          ) {
            tempStr = tempStr + (5).toString();
            temp = parseFloat(tempStr);
          }
          if (
            (tempVal >= 0 && tempVal <= 2) ||
            (tempVal <= 9 && tempVal >= 8)
          ) {
            tempStr = tempStr + (0).toString();
            console.log(tempStr);
            temp = parseFloat(tempStr);
          }

          console.log("This is the value of temp: " + temp);
        }
        setTimeout(() => {
          setReward(temp);
          setRound(round + 1);
        }, 1000);
      } else {
        setShowError(true);
        Reset();
      }
    }
  };

  const insertCoinRef = useRef(null);

  return (
    <SafeAreaView>
      <LinearGradient colors={["#98FF98", "transparent"]}>
        <Header title={"Counting"} color={"#98FF98"} />
        <View style={{ marginTop: 120 }}>
          <Text
            style={{
              fontSize: 25,
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            Round {round}
          </Text>
          <Text
            style={{
              fontSize: 25,
              justifyContent: "center",
              textAlign: "center",
              borderBottomWidth: 2,
              marginRight: 50,
              marginLeft: 50,
            }}
          >
            Please Find: ${parseFloat(reward).toFixed(2)}
          </Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            Drop Your Change Below!
          </Text>
          <Text style={{ fontSize: 20, textAlign: "center" }}>Total</Text>
          <View>
            <LinearGradient
              style={{
                height: 50,
                marginRight: 20,
                marginLeft: 20,
                marginBottom: 20,
                borderRadius: 30,
                flexDirection: "row",
                justifyContent: "center",
              }}
              colors={["teal", "blue"]}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              >
                $
              </Text>
              <Text
                style={{
                  fontSize: 30,
                  color: "white",
                }}
              >
                {total.toFixed(2)}
              </Text>
            </LinearGradient>
          </View>
          <View>
            <View
              ref={insertCoinRef}
              onLayout={() => {
                insertCoinRef.current.measure(
                  (fx, fy, width, height, px, py) => {
                    setPosY(py);
                    setHeight(height);
                  }
                );
              }}
              style={{
                backgroundColor: "tomato",
                borderRadius: 30,
                height: 60,
                marginRight: 40,
                marginLeft: 40,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 30,
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Drop Coins Here!
              </Text>
            </View>
            <Text style={{ fontSize: 25, textAlign: "center" }}>
              Take From Here
            </Text>
            <View
              style={{
                borderRadius: 40,
                borderWidth: 5,
                borderColor: "grey",
                marginRight: 15,
                marginLeft: 15,
              }}
            >
              <View
                contentContainerStyle={{ overflow: "visible" }}
                scrollEnabled={true}
              >
                <LinearGradient
                  style={{ borderRadius: 30 }}
                  colors={["#9A7B4F", "#3F301D"]}
                >
                  <View
                    style={[
                      CountingStyle.imagesContainer,
                      { overflow: "visible" },
                    ]}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {MoneyImages.map((bill) => (
                        <Money
                          key={bill.id}
                          bill={bill}
                          calculator={Calculator}
                          positionY={posY}
                          insertHeight={height}
                          reset={reset}
                        />
                      ))}
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                      }}
                    >
                      {CoinImages.map((coin) => (
                        <Coins
                          key={coin.id}
                          bill={coin}
                          calculator={Calculator}
                          positionY={posY}
                          insertHeight={height}
                          reset={reset}
                        />
                      ))}
                    </View>
                  </View>
                </LinearGradient>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingTop: 10,
            }}
          >
            <Modal
              style={{
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
              animationType="slide"
              visible={levelPass}
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <Text style={{ fontSize: 20, paddingBottom: 20 }}>
                  Great Job You Completed The Level!!
                </Text>
                <Button
                  title="Next Level"
                  onPress={() => {
                    setLevelPass(false);
                    Reset();
                  }}
                />
              </View>
            </Modal>
          </View>
          <GameCompleteModal
            bool={gameCompleted}
            resetBool={hideGameCompleted}
          />
          <WrongSubmitModal
            hide={hideError}
            reward={reward}
            isVisible={showError}
          />
        </View>
        <AudioController musicURL={musicURL} />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default CountingGame;
