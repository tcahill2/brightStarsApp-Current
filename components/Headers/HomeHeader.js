import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

/**
 *
 * @param {*} navigation  This allows the icon in the top right corner of the screen to be able to
 *                        access the drawer menu.
 *
 * @returns               This returns the header at the top of the page of the app. This is what contains
 *                        the icon that the user will modify along with the welcome sign.
 *
 * @description           The following file will take care of the header area and will be used for information
 *                        regarding the page the the user has navigated too. This will handle users information
 *                        updating it and displaying it to them as required.
 */

const HomeHeader = ({ navigation, name, title, color }) => {
  console.log("This is the value of name:" + name);

  const nav = useNavigation();

  return (
    <View style={{ position: "absolute", width: "100%", zIndex: 2 }}>
      <LinearGradient
        colors={[color, "black"]}
        style={{
          paddingTop: StatusBar.currentHeight + 10,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 30,
            paddingBottom: 30,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            position: "absolute",
            right: 30,
          }}
        >
          <TouchableOpacity onPress={() => nav.openDrawer()}>
            <View
              style={{
                marginTop: StatusBar.currentHeight,
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 50,
              }}
            >
              <Image
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                }}
                source={require("../../assets/images/Bright_Stars_Tech_Logo_TRANSPARENT.png")}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ position: "absolute", left: 30 }}>
          <View
            style={{
              marginTop: StatusBar.currentHeight,
              borderColor: "white",
              borderBottomWidth: 2,
            }}
          >
            <TouchableOpacity onPress={() => nav.goBack()}>
              <Text style={{ color: "white", fontSize: 20 }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default HomeHeader;

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
