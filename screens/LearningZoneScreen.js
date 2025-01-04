import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  StatusBar,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import SearchList from "../components/SeachList";
// Font Imports
import { Acme_400Regular } from "@expo-google-fonts/acme";
import { Entypo } from "@expo/vector-icons";
import Header from "../components/Headers/Header";
import { LinearGradient } from "expo-linear-gradient";

/**
 *
 * @param {*} param0
 * @returns
 *
 * @description         The learning zone screen is a screen that will contain and display all the
 *                      available learning games to the user. This will look very much like the gamezone
 *                      but with different colors alongside different games which will be oriented to the
 *                      learning zone perspective.
 */

const PAGES = [
  {
    name: "Basic Work Skills",
    id: 0,
    color: "#1ecbe1",
    screen: "BasicWorkSkills",
    description:
      "These are skills acquired through experience or training that are related to jobs in the workforce",
    image: require("../assets/images/LearningZone/BasicWorkSkillsImage.png"),
  },
  {
    name: "Communication Skills",
    id: 1,
    color: "#36c97f",
    screen: "CommunicationIntegrationSkills",
    description:
      "These are all skills related to communcation skills meaning; listening, speaking, reading and writing skills.",
    image: require("../assets/images/LearningZone/CommunicationSkillsImage.png"),
  },
  {
    name: "Daily Living Skills",
    id: 2,
    color: "#5de619",
    screen: "DailyLivingSkills",
    description:
      "This is a wide range of interpersonal skills related to everyday living activities from making food to crossing the road!",
    image: require("../assets/images/LearningZone/DailyLivingSkillsImage.png"),
  },
  {
    name: "Gross & Fine Skills",
    id: 3,
    color: "#c0f20d",
    screen: "GrossFineSkills",
    description:
      "These are skills related to physical movement and or motor skills. Things like this include drawing and muscle manipulation!",
    image: require("../assets/images/LearningZone/GrossFineSkillImage.png"),
  },
  {
    name: "Self Care Skills",
    id: 4,
    color: "#ee9911",
    screen: "SelfCareSkills",
    description:
      "These are all skills involving routine daily self care skills like brushing teeth and washing clothes!",
    image: require("../assets/images/LearningZone/SelfCareSkillsImage.png"),
  },
  {
    name: "Social Skills",
    id: 5,
    color: "#ee6211",
    screen: "SocialInterpretationSkills",
    description:
      "Social Interpretation skills are used in any and all social interactions. This can include probablem solving and ways to approach certain situations!",
    image: require("../assets/images/LearningZone/SocialSkillsImage.png"),
  },
];

function LearningZoneScreen() {
  const nav = useNavigation();

  const win = Dimensions.get("window");
  const [appIsReady, setAppIsReady] = useState(false);

  let [fontsLoaded] = Font.useFonts({
    Acme_400Regular,
  });

  const navigateTo = (data) => {
    nav.navigate(data.screen, { data: data });
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["#BCEAF6", "#FFAAB0", "#9DDED6"]}>
        <Header title={"Learning Zone"} color={"#46e35b"} />
        <ScrollView nestedScrollEnabled={true} style={{ marginTop: 75 }}>
          <View style={{ marginTop: 50 }}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 30,
                paddingTop: 30,
                borderBottomWidth: 3,
                marginRight: 20,
                marginLeft: 20,
                fontWeight: "bold",
              }}
            >
              Featured Games
            </Text>
            <FlatList
              data={PAGES}
              horizontal={true}
              style={{}}
              decelerationRate={0}
              snapToInterval={win.width - 15}
              snapToAlignment="center"
              contentContainerStyle={{
                justifyContent: "center",
                alignContent: "center",
                flexGrow: 1,
              }}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity onPress={() => navigateTo(item)}>
                    <ImageBackground
                      source={item.image}
                      resizeMode={"contain"}
                      imageStyle={{
                        justifyContent: "space-around",
                        borderRadius: 30,
                      }}
                      style={{
                        width: win.width * 0.8,
                        height: win.height * 0.6,
                        margin: 30,
                      }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          flex: 1,
                          bottom: 0,
                        }}
                      >
                        <LinearGradient
                          style={{
                            width: win.width * 0.8,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                          }}
                          colors={[item.color, "transparent"]}
                        >
                          <View
                            style={{
                              justifyContent: "flex-end",
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 30,
                                marginTop: 10,
                                paddingLeft: 10,
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              {item.name}
                            </Text>
                            <Text
                              style={{
                                padding: 10,
                                fontSize: 20,
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              {item.description}
                            </Text>
                          </View>
                        </LinearGradient>
                      </View>
                    </ImageBackground>
                  </TouchableOpacity>
                );
              }}
            />
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              Try Searching Your Game
            </Text>
            <SearchList data={PAGES} navigateMethod={navigateTo} />
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

export default LearningZoneScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 25,
    fontWeight: "bold",
    padding: 30,
    color: "#363636",
  },
  flatListStyle: {
    justifyContent: "center",
    padding: 20,
  },
  flatListText: {
    padding: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  flatlistDesc: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
