import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GlobalStyles } from "../Styles/GlobalStyles";

function Timer({ isActive, timer}) {
  /**
   *               ---- TIMER COMPONENT ----
   *
   * @description This component returns a 3 columns of 2 digits for a stopwatch.
   *              This can be activated by passing a boolean prop called isActive.
   *              If isActive is positive it begins the alarm. If False it pauses it.
   */

  // Keep track of time
  const [minutes, setMinutes] = useState(0);

  // This updates the clock rendering the actual time counting
  useEffect(() => {
    let interval;
    if (isActive) {
      console.log("Timer is started!");
      interval = setInterval(() => {
        setMinutes((prevTime) => prevTime + 10);
      }, 10);
    } else if (!isActive) {
      timer(minutes);
      clearInterval(interval);
      setMinutes(0);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  // This returns the formatted time
  return (
    <View>
      <View style={GlobalStyles.timerCounter}>
        <Text style={{ fontSize: 25 }}>
          {("0" + Math.floor((minutes / 60000) % 60)).slice(-2)}:
        </Text>
        <Text style={{ fontSize: 25 }}>
          {("0" + Math.floor((minutes / 1000) % 60)).slice(-2)}:
        </Text>
        <Text style={{ fontSize: 25 }}>
          {("0" + Math.floor((minutes / 10) % 100)).slice(-2)}
        </Text>
      </View>
    </View>
  );
}

export default Timer;
