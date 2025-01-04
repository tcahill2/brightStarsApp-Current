import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  LayoutAnimation,
} from "react-native";

const DailySkillsOptions = ({ title, description, images, sentences, id }) => {
  const nav = useNavigation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((value) => !value);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const playNow = (screenName) => {
    nav.navigate("GameViewer", {
      name: title,
      description: description,
      images: images,
      sentences: sentences,
      id: id,
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TouchableOpacity
        onPress={() => toggleOpen()}
        activeOpacity={0.6}
        style={{ backgroundColor: "blue", borderRadius: 20 }}
      >
        <Text style={styles.title}>{title}</Text>
        <View style={[{}, !isOpen ? styles.hidden : undefined]}>
          <Text
            style={{
              textAlign: "center",
              marginRight: 30,
              marginLeft: 30,
              fontSize: 15,
              flexDirection: "row",
              flexWrap: "wrap",
              color: "white",
              paddingBottom: 10,
              backgroundColor: "grey",
              borderRadius: 10,
            }}
          >
            {description}
          </Text>
          <TouchableOpacity onPress={() => playNow()} style={{ padding: 10 }}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                backgroundColor: "teal",
                marginRight: 30,
                marginLeft: 30,
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 20 }}>Play Now!</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default DailySkillsOptions;

const styles = StyleSheet.create({
  hidden: {
    height: 0,
    opacity: 0,
  },
  dropdown: {
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    padding: 10,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  customSkillText: {
    fontSize: 20,
  },
  square: {
    flex: 1,
    flexBasis: "50%",
    backgroundColor: "blue",
    borderColor: "yellow",
    borderWidth: 5,
    borderRadius: 10,
    paddingTop: "50%",
  },
  row: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
