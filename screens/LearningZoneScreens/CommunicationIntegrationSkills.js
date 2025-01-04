import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import SearchList from "../../components/SeachList";

const ACTIVITY_DATA = [
  {
    name: "How to write a Thank Your Card!",
    id: 4,
    description:
      "Often we will write a card for someones birthday or special event!",
    sentences: [
      {
        id: 0,
        sentence: "Prepare a thank you card and assortment of pens",
      },
      {
        id: 1,
        sentence: "Write on the card Thank you and short personal message",
      },
      {
        id: 2,
        sentence:
          "Place the card in the envelope that came with it and write the name of the person you are going to give it too.",
      },
      {
        id: 3,
        sentence:
          "Give the card to the person you want to say, 'Thank You!' too",
      },
    ],
    images: [
      {
        id: 0,
        image: require("../../assets/images/LearningZone/CommunicationSkills/WriteThankYouCard/Picture1.jpg"),
      },
      {
        id: 1,
        image: require("../../assets/images/LearningZone/CommunicationSkills/WriteThankYouCard/Picture2.jpg"),
      },
      {
        id: 2,
        image: require("../../assets/images/LearningZone/CommunicationSkills/WriteThankYouCard/Picture3.jpg"),
      },
      {
        id: 3,
        image: require("../../assets/images/LearningZone/CommunicationSkills/WriteThankYouCard/Picture4.jpg"),
      },
    ],
  },
];

const CommunicationIntegrationSkills = () => {
  const nav = useNavigation();

  const navigateTo = (item) => {
    nav.navigate("GameViewer", {
      item: item,
    });
  };
  return (
    <View>
      <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>
        Welcome To Communication Integration Skills!
      </Text>
      <Text
        style={{ fontSize: 30, textAlign: "center", margin: 30, marginTop: 30 }}
      >
        This zone is currently being worked on and will be implemented in the
        near future!
      </Text>
      <ScrollView nestedScrollEnabled={true}>
        <SearchList data={ACTIVITY_DATA} navigateMethod={navigateTo} />
      </ScrollView>
    </View>
  );
};

export default CommunicationIntegrationSkills;
