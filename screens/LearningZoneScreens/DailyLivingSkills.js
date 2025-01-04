import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import {
  Dimensions,
  Image,
  LayoutAnimation,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Headers/Header";
import SearchList from "../../components/SeachList";

const ACTIVITY_DATA = [
  {
    name: "Using a Kettle",
    id: 0,
    description:
      "A Kettle is normally used to heat the water during the process of making coffee.",
    sentences: [
      {
        id: 0,
        sentence: "Fill the kettle with water",
      },
      { id: 1, sentence: "Plug in the kettle" },
      { id: 2, sentence: "Switch on the kettle" },
      {
        id: 3,
        sentence:
          "Allow the kettle to boil for 3-4 minutes and it will switch off when complete!",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/UsingKettle/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/UsingKettle/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/UsingKettle/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/UsingKettle/Picture4.jpg"),
      },
    ],
  },
  {
    name: "Making instant coffee",
    id: 1,
    description:
      "Making instant coffee can be for some a daily occurence! This is normally the coffee that most people make in the mornings!",
    sentences: [
      { id: 0, sentence: "Boil the Kettle" },
      { id: 1, sentence: "Empty one packet of coffee mix into the mug" },
      { id: 2, sentence: "Add about 150ml of hot water" },
      { id: 3, sentence: "Stir well and enjoy!" },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/InstantCoffee/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/InstantCoffee/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/InstantCoffee/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/InstantCoffee/Picture3.jpg"),
      },
    ],
  },
  {
    name: "How To lock a door (knob is a twist-lock)",
    id: 2,
    description: "How to lock a door in which you must use a key to lock.",
    sentences: [
      {
        id: 0,
        sentence: "make sure the door is closed.",
      },
      {
        id: 1,
        sentence:
          "Find the circular button with a ridge at the center of the doorknob",
      },
      {
        id: 2,
        sentence:
          "Pinch the circular button and twist it clockwise as far as it will go. (90 degree twist)",
      },
      {
        id: 3,
        sentence:
          "Try and open the door to confirm that it was locked succesfully.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/LockDoor/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/LockDoor/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/LockDoor/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/LockDoor/Picture4.png"),
      },
    ],
  },
  {
    name: "How To unlock a door from outside (Using a key)",
    id: 3,
    description: "How to unlock a door in which you must use a key to unlock.",
    sentences: [
      {
        id: 0,
        sentence:
          "By having the key on your hand, slip in the key onto the doorknob's keyhole.",
      },
      {
        id: 1,
        sentence: "Make 90 degrees twist clockwise to unlock the door.",
      },
      { id: 2, sentence: "Hold the door knob and twist it and push or pull" },
      {
        id: 3,
        sentence: "Once the door opens you can remove key.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/UnlockDoor/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/UnlockDoor/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/UnlockDoor/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/UnlockDoor/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How To use hand sanitizer",
    id: 4,
    description: "How to apply hand sanitizer to your hands",
    sentences: [
      {
        id: 0,
        sentence:
          "Apply two squirts of hand sanitizer into the palm of your hand.",
      },
      {
        id: 1,
        sentence: "begin rubbing your hands together",
      },
      {
        id: 2,
        sentence:
          "Continue for 20 seconds making sure to get into between your fingers.",
      },
      {
        id: 3,
        sentence: "Once hands are no longer wet you are done!",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/UseHandsanitizer/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/UseHandsanitizer/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/UseHandsanitizer/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/UseHandsanitizer/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How to wash dishes!",
    id: 4,
    description: "It is important to know and be able to wash dishes!",
    sentences: [
      {
        id: 0,
        sentence:
          "Turn on water and put dish soap on your sponge or rag.",
      },
      {
        id: 1,
        sentence: "Wet the sponge and begin washing your dish of choice",
      },
      {
        id: 2,
        sentence:
          "Rinse the dish with clean water after making sure all dirt was removed.",
      },
      {
        id: 3,
        sentence: "Dry the dish off with a clean towel.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/WashDishes/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/WashDishes/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/WashDishes/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/WashDishes/Picture4.jpg"),
      },
    ],
  },
  {
    name: "How to clean off the table!",
    id: 5,
    description: "This can be an everyday thing and is important to always do after meals!",
    sentences: [
      {
        id: 0,
        sentence:
          "Make sure to get the towel wet!",
      },
      {
        id: 1,
        sentence: "Twist it to get the excess water out of it",
      },
      {
        id: 2,
        sentence:
          "Place the towel on the table with your hand on top of the towel",
      },
      {
        id: 3,
        sentence: "Move the towel in a circular motion all around to wipe the table.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/CleaningTable/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/CleaningTable/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/CleaningTable/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/CleaningTable/Picture4.png"),
      },
    ],
  },
  {
    name: "How to get yourself a bowl of cereal!",
    id: 6,
    description: "IF you enjoy a snack of cereal this is an important one for you!",
    sentences: [
      {
        id: 0,
        sentence:
          "Open the bag of cereal you want to eat",
      },
      {
        id: 1,
        sentence: "Put the desired amount of cereal you want in your bowl",
      },
      {
        id: 2,
        sentence:
          "Now put the desired amount of milk you would like in the bowl",
      },
      {
        id: 3,
        sentence: "Use a spoon to get all your cereal wet and scoop it up to enjoy.",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/DailySkills/BowlOfCereal/Picture1.png"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/DailySkills/BowlOfCereal/Picture2.png"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/DailySkills/BowlOfCereal/Picture3.png"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/DailySkills/BowlOfCereal/Picture4.png"),
      },
    ],
  },
];

const DailyLivingSkills = () => {
  // This is to access parameters and navigatipon
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
      <Header color={data.color} title={"Daily Living"} />
      {/**
       *      THIS CONTAINS THE ACTUAL BODY OF THE PRORAM
       */}

      <View style={{ marginTop: 125 }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Welcome to Daily Livng Skills!
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

export default DailyLivingSkills;
