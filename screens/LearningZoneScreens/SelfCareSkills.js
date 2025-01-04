import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, Dimensions, ScrollView } from "react-native";
import Header from "../../components/Headers/Header";
import SearchList from "../../components/SeachList";

// Game Data For SelfCareSkills
const ACTIVITY_DATA = [
  {
    name: "How To Fold Pants",
    id: 0,
    description:
      "Folding pants is a very important skill to have especially when growing up!",
    sentences: [
      {
        id: 0,
        sentence:
          "Fold Pants in half lengthwise, with the front side facing in and back pockets facing out.",
      },
      { id: 1, sentence: "Tuck the seat in, against one of the legs" },
      { id: 2, sentence: "Fold the bottom hem up toward the waistband" },
      {
        id: 3,
        sentence: "Fold the pants into thirds",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingPants/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingPants/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingPants/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingPants/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How To Fold Shorts",
    id: 1,
    description:
      "Folding shorts is a task that may seem simple but there are some tricks to be learned along the way!",
    sentences: [
      { id: 0, sentence: "Place the shorts on the table " },
      {
        id: 1,
        sentence:
          "Fold the shorts in half lengthwise with the back pockets facing out",
      },
      { id: 2, sentence: "Tuck the seat in, against one of the legs" },
      { id: 3, sentence: "Fold it in half" },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingShorts/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingShorts/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingShorts/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingShorts/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How To Fold A T-Shirt",
    id: 2,
    description:
      "Folding a T-Shirt can be done and complete with four easy steps !",
    sentences: [
      { id: 0, sentence: "Place the shirt face down on a flat surface" },
      {
        id: 1,
        sentence: "Fold the shirt in half on top of itself",
      },
      { id: 2, sentence: "Tuck the sleeve in" },
      { id: 3, sentence: "Flip over and fold the shirt in half" },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingTShirt/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingTShirt/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingTShirt/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/Self-CareSkills/FoldingTShirt/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How To Put Socks On",
    id: 3,
    description:
      "The common task of putting your socks on with some tips and tricks!",
    sentences: [
      {
        id: 0,
        sentence:
          "Hold one sock up from the cuff with the heel on the bottom of your foot",
      },
      {
        id: 1,
        sentence:
          "Scrunch the sock up towards the toes; Put your toes in and pull the sock over your toes.",
      },
      { id: 2, sentence: "Continue to pull the sock up and over your heel" },
      { id: 3, sentence: "Continue Pulling the sock up above your ankle" },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/Self-CareSkills/PuttingOnSocks/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/Self-CareSkills/PuttingOnSocks/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/Self-CareSkills/PuttingOnSocks/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/Self-CareSkills/PuttingOnSocks/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How to wash your hands!",
    id: 4,
    description:
      "Washing your hands is an everyday task that is very important for good hygiene!",
    sentences: [
      {
        id: 0,
        sentence: "Get your hands wet and add soap to your hands",
      },
      {
        id: 1,
        sentence:
          "Rub your hands together for approximately 30 seconds, make sure to get between your fingers.",
      },
      { id: 2, sentence: "Rinse the soap off your hands completely." },
      {
        id: 3,
        sentence: "Dry your hands off using paper towel or air dryer.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/Self-CareSkills/WashHands/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/Self-CareSkills/WashHands/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/Self-CareSkills/WashHands/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/Self-CareSkills/WashHands/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How to replace your toilet paper!",
    id: 5,
    description:
      "This is a task we all must complete at some point during our weeks of work or at home!",
    sentences: [
      {
        id: 0,
        sentence: "Get a new roll of toilet paper.",
      },
      {
        id: 1,
        sentence:
          "Remove the empty roll of toilet paper (push the ends of the inner roll inwards to remove)",
      },
      { id: 2, sentence: "Put the inner piece in the new roll" },
      {
        id: 3,
        sentence: "Place the two of them together back on the stand",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/Self-CareSkills/ReplacingToiletPaper/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/Self-CareSkills/ReplacingToiletPaper/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/Self-CareSkills/ReplacingToiletPaper/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/Self-CareSkills/ReplacingToiletPaper/Picture4.png"),
      },
    ],
  },
];

const SelfCareSkills = () => {
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
    <View style={{ flex: 1 }}>
      <View>
        <Header title={"Self Care"} color={data.color} />
      </View>
      <View style={{ flex: 1, marginTop: 125 }}>
        <ScrollView nestedScrollEnabled={true}>
          <Text style={{ fontSize: 30, textAlign: "center", margin: 30 }}>
            Welcome To Self Care Skills
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 25,
              margin: 30,
            }}
          >
            here you can find information on everyday task like hygiene and
            maintenance. Things that are included but not limited to are folding
            pants, t-shirt, socks, brushing your teeth and much much more!
          </Text>

          <SearchList data={ACTIVITY_DATA} navigateMethod={navigateTo} />
        </ScrollView>
      </View>
    </View>
  );
};

export default SelfCareSkills;
