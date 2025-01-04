import {
  createNavigationContainerRef,
  useNavigationState,
} from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../components/Headers/HomeHeader";
import { LinearGradient } from "expo-linear-gradient";
/**
 *
 * @param {*} param0
 * @returns
 *
 * @description       This is the home screen which is the main screen of the applicaiton. This screen will
 *                    display information about the app alongside information about the user who is currently using it
 *                    This is the first page/screen to always open for the user and will always be loaded and displayed
 *                    first.
 */

const HomeScreen = ({ navigation, name }) => {
  // Variable Used
  const win = Dimensions.get("window");
  const nav = createNavigationContainerRef();
  const [scrollLock, setScrollLock] = useState(true);

  const navigate = (name, params) => {
    if (nav.isReady()) {
      nav.navigate(name);
    } else {
    }
  };

  const setScroll = (flag) => {
    setScrollLock(flag);
  };

  return (
    <View>
      <ImageBackground
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
        source={require("../assets/images/Home_BackgroundBST.png")}
      >
        <HomeHeader title={"Bright Stars App"} color={"#3654db"} />
        <ScrollView style={{ flex: 1, marginTop: 75 }}>
          <LinearGradient
            colors={["white", "gray"]}
            style={{
              flex: 1,
              margin: 10,
              borderRadius: 30,
              marginTop: 100,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold",
                marginTop: 20,
                padding: 10,
              }}
            >
              How To Start!
            </Text>
            <Text style={{ padding: 30, fontSize: 20, textAlign: "center" }}>
              You can click our icon at the top right side of the screen to get
              started and display the side navigation panel!
            </Text>
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <LinearGradient
                colors={["teal", "blue"]}
                style={{
                  marginRight: win.width * 0.2,
                  marginLeft: win.width * 0.2,
                  marginBottom: 20,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    padding: 10,

                    color: "white",
                  }}
                >
                  Play Now
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["white", "gray"]}
            style={{
              flex: 1,
              margin: 10,
              marginTop: 50,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold",
                marginTop: 20,
                padding: 10,
              }}
            >
              The Learning Zone
            </Text>
            <Text
              style={{
                padding: 20,
                fontSize: 20,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              The Learning Zone utilizes more of the learning aspect of games
              allowing users to learn and advance their skills in everyday task
              that they are able to accopmlish!
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={["white", "gray"]}
            style={{
              flex: 1,
              backgroundColor: "white",
              margin: 10,
              marginTop: 50,
              borderRadius: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: 40,
                fontWeight: "bold",
                marginTop: 20,
                padding: 10,
              }}
            >
              The Game Zone
            </Text>
            <Text
              style={{
                padding: 20,
                fontSize: 20,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              The Game Zone is an area in which users can play games while still
              partaking in the benefits of Learning!
            </Text>
            <Text
              style={{
                padding: 20,
                fontSize: 20,
                textAlign: "center",
                marginTop: 20,
              }}
            >
              Currently the Game Zone has three games for users to try with them
              being a memory card game, a counting cashier game and a matching
              game where you drag to the correct answer!
            </Text>
          </LinearGradient>

          <View>
            <Text
              style={{ textAlign: "center", fontSize: 30, fontWeight: "bold" }}
            >
              Things To Come...
            </Text>
            <Text
              style={{
                fontSize: 30,
                margin: 20,
                textAlign: "center",
                marginBottom: 200,
              }}
            >
              There will be many more games and feature to follow
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 30,
    color: "#363636",
  },
});
