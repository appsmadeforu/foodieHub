import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ onTermChange, term, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" size={25} color="black" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputstyle}
        value={term}
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#E8E9EB",
    height: 40,
    margin: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#9B9796",
    textAlignVertical: "center",
    flexDirection: "row",
  },
  inputstyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 10,
  },
});

export default SearchBar;
