import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import CustomDrawer from "../components/CustomDrawer";
import ProfileScreen from "../screens/ProfileScreen";
import SettingScreen from "../screens/SettingScreen";
import HomeScreen from "../screens/HomeScreen";
import LearningZoneStack from "./LearningZoneStack";
import GameZoneStack from "./GameZoneStack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

/**
 * @description     The following file handles the navigation of the Drawer menu. This does not handle
 *                  any of the styling that can be found in the drawer menu this is simply the logic of the drawer
 *                  menu.
 *
 *                  We use the custom Drawer to stylize the top half of the drawer menu. This creates for a custom
 *                  look in our drawer navigation container.
 */

// This creates the drawer menu, naming is Drawer
const Drawer = createDrawerNavigator();

const DrawerNav = ({ loggedIn }) => {
  let name = "John Doe";
  console.log("This is the value of logged in! " + loggedIn);
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "#01abff",
        drawerLabelStyle: { marginLeft: -15, fontSize: 15 },
      }}
      drawerContent={(props) => <CustomDrawer {...props} loggedIn={loggedIn} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{ name: name }}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="md-home-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{ name: name }}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="person-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="The Game Zone"
        component={GameZoneStack}
        initialParams={{ name: name }}
        options={{
          drawerIcon: ({ color }) => {
            return (
              <Ionicons
                name="game-controller-outline"
                size={22}
                color={color}
              />
            );
          },
        }}
      />
      <Drawer.Screen
        name="The Learning Zone"
        component={LearningZoneStack}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="book-outline" size={22} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color }) => {
            return <Ionicons name="cog-outline" size={22} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
