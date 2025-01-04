import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

/**
 *
 * @param {props} this passes the navigator to our custom drawer
 * @returns       this returns the custom navigation drawer imaging
 *
 * @description   The following file is the customisation of the navigation
 *                drawer. The imaging and styling is contained with this file
 *                It accepts the navigation prop as a drawer and adds styling
 */
const CustomDrawer = (props, { loggedIn }) => {
  console.log("This is the value of logged in Custom Drawer: " + loggedIn);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#01abff" }}
      >
        <ImageBackground
          style={{ padding: 20 }}
          source={require("../assets/images/BackgroundIMAGE_BLUE_BUBBLES.png")}
        >
          <Image
            style={{
              height: 70,
              width: 70,
              borderRadius: 40,
              marginBottom: 10,
            }}
            source={require("../assets/images/hipster-toast-bread-funny-cartoon-character-vector-23019967.jpg")}
          />
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
            {props.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "bold",
                marginRight: 10,
              }}
            >
              25 Trophies Earned!
            </Text>
            <Ionicons name="trophy" color={"#ffff"} size={20} />
          </View>
        </ImageBackground>
        <View style={{ paddingTop: 10, backgroundColor: "#ffff" }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "grey" }}>
        <TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="log-out-outline" size={22} />
            {loggedIn ? (
              <Text style={{ paddingRight: 10 }}>Logout</Text>
            ) : (
              <Text style={{ paddingRight: 30 }}>Login</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
