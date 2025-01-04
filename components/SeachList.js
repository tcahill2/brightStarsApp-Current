// Searching using Search Bar Filter in React Native List View
// https://aboutreact.com/react-native-search-bar-filter-on-listview/

// import React in our code
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const SearchList = ({ data, navigateMethod }) => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  const nav = useNavigation();

  useEffect(() => {
    setFilteredDataSource(data);
    setMasterDataSource(data);
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter((item) => {
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.name.toUpperCase()}
      </Text>
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Name : " + item.name);
  };

  const navigateToScreen = (item) => {
    navigateMethod(item);
  };

  return (
    <SafeAreaView style={{ flex: 1, margin: 30, marginBottom: 100 }}>
      <View
        style={{
          borderWidth: 2,
          borderRadius: 30,
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <TextInput
          focusable={true}
          selectTextOnFocus={true}
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <ScrollView
          scrollEnabled={true}
          nestedScrollEnabled={true}
          style={{ height: 200 }}
        >
          {filteredDataSource.map((item, i) => {
            return (
              <TouchableOpacity key={i} onPress={() => navigateToScreen(item)}>
                <View key={i}>
                  <Text style={{ fontSize: 20, padding: 10 }}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 30,
    padding: 20,
  },
  itemStyle: {
    padding: 10,
    fontSize: 20,
    textAlign: "center",
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 25,
  },
});

export default SearchList;
