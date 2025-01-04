import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens of the games that will be navigated too
import GameZoneScreen from "../screens/GameZoneScreen";
// Matching Game and Levels
import Memory from "../screens/GamezoneScreens/Memory";
// Counting Game and Levels
import CountingGame from "../screens/GamezoneScreens/CountingGame";
// Memory Game and Levels
import MatchingGame from "../screens/GamezoneScreens/MatchingGame";

/**
 * @description       The following file is the Stack navigation file, this handles all stack request.
 *                    each function will handle a page that is displayed by the Drawer Menu. From here the
 *                    user will be able to navigate to different pages.
 *
 *                    the following file simply contains logic for the codebase and does not handle any styling.
 */

// The Following stack will handle the Game ONE STACK (CASHIER GAME)
// Will need to rename functions

function GameZoneStack(props, { name }) {
  // This is to be used by all general stacks
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="GameZoneScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="GameZoneScreen"
        initialParams={{ name: name }}
        component={GameZoneScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="MatchingGame"
        initialParams={{ name: name }}
        component={MatchingGame}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Memory"
        initialParams={{ name: name }}
        component={Memory} // Level 1 - Matching
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="CountingGame"
        component={CountingGame} // All Counting Games 1 - 3
      />
    </Stack.Navigator>
  );
}

export default GameZoneStack;
