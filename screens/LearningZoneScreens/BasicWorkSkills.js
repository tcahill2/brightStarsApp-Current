import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView } from "react-native";
import Header from "../../components/Headers/Header";
import SearchList from "../../components/SeachList";

//Game Data
const ACTIVITY_DATA = [
  {
    name: "How To Use Scissors",
    id: 0,
    description:
      "It is always important to use something right, especially scissors which can be sharp!",
    sentences: [
      {
        id: 0,
        sentence: "Hold your scissors well using the grips appropriately",
      },
      {
        id: 1,
        sentence: "When holding scissors you keep your thumb up.",
      },
      { id: 2, sentence: "Keep the scissors moving, open and shut." },
      {
        id: 3,
        sentence:
          "Move the paper into the scissors. Hold your paper tightly and repeat step 2 to 3 till the paper is cut in half.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/UsingScissors/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/UsingScissors/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/UsingScissors/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/UsingScissors/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How To Use a glue stick",
    id: 0,
    description:
      "Glue sticks can be used for a variety of different task! It is important to know how to use them!",
    sentences: [
      {
        id: 0,
        sentence: "Take the glue sticks cap off",
      },
      {
        id: 1,
        sentence:
          "Twist the bottom of the glue stick enough to show the top of the glue",
      },
      {
        id: 2,
        sentence:
          "Put the glue on the paper and stick objects ontop of the glue",
      },
      {
        id: 3,
        sentence:
          "now twist the glue back down and put the cap back on the glue stick",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/GlueStick/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/GlueStick/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/GlueStick/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/GlueStick/Picture4.png"),
      },
    ],
  },
  {
    name: "How To Refill a stapler",
    id: 0,
    description:
      "In some jobs we must use a stapler quite often! It is important to know and understand how we refill a stapler.",
    sentences: [
      {
        id: 0,
        sentence: "Make sure you have your stapler and staples ready",
      },
      {
        id: 1,
        sentence:
          "Open the stapler and place the row of staples inside the stapler",
      },
      {
        id: 2,
        sentence: "Close the stapler making sure to not force it shut",
      },
      {
        id: 3,
        sentence: "Now test the stapler by testing it on a piece of paper.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/RefillStapler/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/RefillStapler/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/RefillStapler/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/RefillStapler/Picture4.png"),
      },
    ],
  },
  {
    name: "How to use a binder clip",
    id: 0,
    description:
      "Binder clips are commonly used to help organize paper and or documents!",
    sentences: [
      {
        id: 0,
        sentence:
          "Squeezing the back of a binder clip will make the binder clips jaws open",
      },
      {
        id: 1,
        sentence:
          "Keep the clip open while squeezing and place the stack of papers into it",
      },
      {
        id: 2,
        sentence: "Clamp both sides of the binder clip down.",
      },
      {
        id: 3,
        sentence: "Your paper should now be secured with the clip",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/BinderClipOnPaper/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/BinderClipOnPaper/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/BinderClipOnPaper/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/BasicWorkSkills/BinderClipOnPaper/Picture4.png"),
      },
    ],
  },
];

const BasicWorkSkills = () => {
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
        <Header title={"Work Skills"} color={data.color} />
      </View>
      <View style={{ flex: 1, marginTop: 125 }}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            margin: 30,
          }}
        >
          Welcome To Work Skills! Here you can find information related your
          workspaces, project and things that you will commonly find and
          interact with while during or at work!
        </Text>
        <ScrollView nestedScrollEnabled={true}>
          <SearchList data={ACTIVITY_DATA} navigateMethod={navigateTo} />
        </ScrollView>
      </View>
    </View>
  );
};

export default BasicWorkSkills;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
