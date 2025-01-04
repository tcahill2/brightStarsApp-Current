import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
/**
 *      SCREENS THAT ARE NAVIGATED TOO BY LEARNING ZONE
 */
import LearningZoneScreen from "../screens/LearningZoneScreen";

import BasicWorkSkills from "../screens/LearningZoneScreens/BasicWorkSkills";
import CommunicationIntegrationSkills from "../screens/LearningZoneScreens/CommunicationIntegrationSkills";
import DailyLivingSkills from "../screens/LearningZoneScreens/DailyLivingSkills";
import GrossFineSkills from "../screens/LearningZoneScreens/GrossFineSkills";
import SelfCareSkills from "../screens/LearningZoneScreens/SelfCareSkills";
import SocialInterpretationSkills from "../screens/LearningZoneScreens/SocialInterpretationSkills";
import GameViewer from "../components/LearningZone/GameViewer";

/**
 * @description       The following file is the Stack navigation file, this handles all stack request.
 *                    each function will handle a page that is displayed by the Drawer Menu. From here the
 *                    user will be able to navigate to different pages.
 *
 *                    the following file simply contains logic for the codebase and does not handle any styling.
 */

// The Following stack will handle the Game ONE STACK (CASHIER GAME)
// Will need to rename functions

function LearningZoneStack(props, { name }) {
  // This is to be used by all general stacks
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="LearningZoneScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="LearningZoneScreen"
        initialParams={{ name: name }}
        component={LearningZoneScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="BasicWorkSkills"
        initialParams={{ name: name }}
        component={BasicWorkSkills}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="CommunicationIntegrationSkills"
        initialParams={{ name: name }}
        component={CommunicationIntegrationSkills} // Level 1 - Matching
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="DailyLivingSkills"
        component={DailyLivingSkills} // All Counting Games 1 - 3
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="GrossFineSkills"
        component={GrossFineSkills} // All Counting Games 1 - 3
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="SelfCareSkills"
        component={SelfCareSkills} // All Counting Games 1 - 3
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="SocialInterpretationSkills"
        component={SocialInterpretationSkills} // All Counting Games 1 - 3
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name="GameViewer"
        initialParams={{ name: name }}
        component={GameViewer} // Level 1 - Matching
      />
    </Stack.Navigator>
  );
}

export default LearningZoneStack;
