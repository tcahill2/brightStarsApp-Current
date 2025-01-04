import React, { useState } from "react";
import {GlobalStyles} from '../../Styles/GlobalStyles';

function StopWatch(flag) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;
    if (flag) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      return () => clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={GlobalStyles.timerCounter}>
      <Text style={{ fontSize: 25 }}>
        {("0" + Math.floor((time / 60000) % 60)).slice(-2) + ":"}
      </Text>
      <Text style={{ fontSize: 25 }}>
        {("0" + Math.floor((time / 1000) % 60)).slice(-2) + ":"}
      </Text>
      <Text style={{ fontSize: 25 }}>
        {("0" + ((time / 10) % 100)).slice(-2)}
      </Text>
    </View>
  );
}
