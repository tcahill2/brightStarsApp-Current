import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DrawerNav from "./navigation/DrawerNav";

/**
 * @author          Tristan Dillon Cahill
 * @date            5/24/2022
 *
 * @description     The following file is the main file in which launches the application.
 *                  in this file we reference the Navigation Conatiner which contains our
 *                  Drawer Navigation, this is how users will mainly get around the program.
 *
 *                  Drawer Navigation is a component in which contains styling and routes too
 *                  pages in our program.
 */

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <DrawerNav loggedIn={loggedIn} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
