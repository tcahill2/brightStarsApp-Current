import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Modal,
  ScrollView,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import TextDraggable from "./TextDraggable";
import TextOption from "./TextOptions";

const GameViewer = () => {
  const nav = useNavigation();
  const win = Dimensions.get("window");
  const route = useRoute();

  const item = route.params.item;

  const [sentences, setSentences] = useState([]);

  // Constants / Variables
  const [round, setRound] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const shuffleDeck = () => {
    //If sentences isn't loaded
    if (sentences.length === 0) {
      item.sentences.map((item) => {
        sentences.push(item);
      });
    }

    let i = sentences.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = sentences[i];
      sentences[i] = sentences[j];
      sentences[j] = temp;
    }
  };

  const nextLevel = () => {
    setShowModal(true);
  };

  const updateSentences = () => {
    setSentences((current) =>
      current.filter((item) => {
        return item.id !== round;
      })
    );

    if (round !== 3) {
      setRound(round + 1);
    } else {
      nav.navigate("LearningZoneScreen");
    }
  };

  // This shuffles the deck for us on startup
  shuffleDeck();

  return (
    <SafeAreaView style={{}}>
      <Text style={{ textAlign: "center", fontSize: 25, fontWeight: "bold" }}>
        Step {round + 1}
      </Text>
      <Text style={{ fontSize: 25, textAlign: "center", marginTop: 20 }}>
        {item.name}
      </Text>
      <View style={{}}>
        <Image
          source={item.images[round].image}
          resizeMode={"cover"}
          style={{
            width: win.width * 0.5,
            height: win.width * 0.5,
            alignSelf: "center",
            borderRadius: 30,
          }}
        />
      </View>
      <ScrollView scrollEnabled={true} style={{}}>
        <View style={{ marginBottom: 400 }}>
          {sentences.map((item, i) => {
            return (
              <TextOption
                nextLevel={nextLevel}
                key={i}
                text={item.sentence}
                id={item.id}
                round={round}
              />
            );
          })}
        </View>
      </ScrollView>

      <Modal visible={showModal} animationType="fade" style={{ flex: 1 }}>
        <LinearGradient style={{ flex: 1 }} colors={["white", "#63C5DA"]}>
          <SafeAreaView style={{marginTop: 30}}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                borderBottomWidth: 5,
                marginRight: 50,
                marginLeft: 50,
              }}
            >
              {item.name}
            </Text>
            <Image
              style={{
                alignSelf: "center",
                height: win.width * 0.6,
                width: win.width * 0.6,
                marginTop: 40,
                borderRadius: 30,
              }}
              resizeMode="cover"
              source={item.images[round].image}
            />
            <Text
              style={{
                textAlign: "center",
                fontSize: 25,
              }}
            >
              Step {round + 1}
            </Text>
            <Text style={{ margin: 30, fontSize: 30, textAlign: "center" }}>
              {item.sentences[round].sentence}
            </Text>
            <TouchableOpacity
              style={{ marginTop: 30 }}
              onPress={() => {
                setShowModal(false), updateSentences();
              }}
            >
              <LinearGradient
                style={{ marginRight: 50, marginLeft: 50, borderRadius: 30 }}
                colors={["teal", "blue"]}
              >
                <Text
                  style={{ fontSize: 30, textAlign: "center", padding: 10 }}
                >
                  Next Step!
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </SafeAreaView>
        </LinearGradient>
      </Modal>
    </SafeAreaView>
  );
};

export default GameViewer;
