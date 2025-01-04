import React from "react";
import { useEffect, useRef, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";

const AudioController = ({ musicURL }) => {
  const nav = useNavigation();

  const [sound, setSound] = useState();
  const [status, setStatus] = useState(false);

  console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(musicURL);
    sound.setIsLoopingAsync(true);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  nav.addListener("blur", () => {
    console.log("Component Counting Game Blurred!!!");
    setStatus(false);
  });

  nav.addListener("focus", () => {
    console.log("Component Counting Game Focused!!!");
    setStatus(true);
    playSound();
  });

  return null;
};

export default AudioController;
