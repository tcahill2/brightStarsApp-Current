import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import Header from "../../components/Headers/Header";
import SearchList from "../../components/SeachList";

const ACTIVITY_DATA = [
  {
    name: "How to snap a jacket up",
    id: 0,
    description:
      "It is always important to know how to do your jacket up so you don't get cold!",
    sentences: [
      {
        id: 0,
        sentence: "Hold the snaps in each hand",
      },
      {
        id: 1,
        sentence: "Line up both sides of the snaps",
      },
      {
        id: 2,
        sentence: "Squeeze the two sides together (should feel / hear a click)",
      },
      {
        id: 3,
        sentence: "Check to make sure they are clicked together",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/GrossFineSkill/HowToDoSnaps/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/GrossFineSkill/HowToDoSnaps/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/GrossFineSkill/HowToDoSnaps/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/GrossFineSkill/HowToDoSnaps/Picture4.png"),
      },
    ],
  },
  {
    name: "How to zipper up a jacket!",
    id: 0,
    description:
      "It is always important to know how to zip up your jacket up so you don't get cold!",
    sentences: [
      {
        id: 0,
        sentence: "Hold the bottom of the jacket (next to the zipper).",
      },
      {
        id: 1,
        sentence: "Line up the bottom of the zippers together.",
      },
      {
        id: 2,
        sentence: "Holding the bottom zipper, pull the tab up",
      },
      {
        id: 3,
        sentence: "Pull the tab to the top of the jackets zipper",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/GrossFineSkill/ZippingUpJacket/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/GrossFineSkill/ZippingUpJacket/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/GrossFineSkill/ZippingUpJacket/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/GrossFineSkill/ZippingUpJacket/Picture4.png"),
      },
    ],
  },
  {
    name: "How to do velcro shoes up!",
    id: 0,
    description:
      "Velcro shoes always come in handy but it is important to know how to use them!",
    sentences: [
      {
        id: 0,
        sentence: "Place your foot inside of the shoe",
      },
      {
        id: 1,
        sentence: "Hold onto the top part of the velcro",
      },
      {
        id: 2,
        sentence: "Line it up with the velcro part on the other side",
      },
      {
        id: 3,
        sentence: "Press down along the velcro making sure it is tight.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/GrossFineSkill/VelcroShoes/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/GrossFineSkill/VelcroShoes/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/GrossFineSkill/VelcroShoes/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/GrossFineSkill/VelcroShoes/Picture4.png"),
      },
    ],
  },
];

const GrossFineSkills = () => {
  const nav = useNavigation();
  const route = useRoute();
  const win = Dimensions.get("window");

  const data = route.params.data;

  const navigateTo = (item) => {
    nav.navigate("GameViewer", {
      item: item,
    });
  };
  return (
    <SafeAreaView style={{}}>
      {/**
       *      THIS CONTAINS THE HEADER
       */}
      <Header color={data.color} title={"Gross Skills"} />
      {/**
       *      THIS CONTAINS THE ACTUAL BODY OF THE PRORAM
       */}

      <View style={{ marginTop: 125 }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Welcome to Gross and Fine Skills!
        </Text>
        <Text
          style={{
            fontSize: 25,
            textAlign: "center",
            marginTop: 30,
            margin: 20,
          }}
        >
          Here you will find information about skills and things that you can
          utilize in everyday activities!
        </Text>
        <ScrollView nestedScrollEnabled={true}>
          <SearchList data={ACTIVITY_DATA} navigateMethod={navigateTo} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default GrossFineSkills;
