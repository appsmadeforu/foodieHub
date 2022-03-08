import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Alert = ({ type, alertMessage }) => {
  return (
    <View
      style={
        type === "warn" ? styles.warningBackground : styles.errorBackground
      }
    >
      {type === "warn" ? (
        <Ionicons name="warning-outline" size={24} color="#9F6000" />
      ) : (
        <Entypo
          name="circle-with-cross"
          size={24}
          color="#D8000C"
          style={styles.iconStyle}
        />
      )}
      <Text style={styles.errorText}>{alertMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  warningBackground: {
    backgroundColor: "#FEEFB3",
    height: 30,
    marginHorizontal: 25,
    borderRadius: 4,
    flexDirection: "row",
  },
  errorBackground: {
    backgroundColor: "#FFBABA",
    height: 30,
    marginHorizontal: 25,
    borderRadius: 4,
    flexDirection: "row",
  },
  errorText: {
    fontSize: 18,
    color: "#D8000C",
    textAlign: "center",
    paddingLeft: 10,
  },
  iconStyle: {
    padding: 2,
  },
});

export default Alert;
