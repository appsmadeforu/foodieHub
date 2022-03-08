import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantDetail from "./RestaurantDetail";

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) return null;
  return (
    <View style={styles.listStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantInfo", { id: item.id })
              }
            >
              <RestaurantDetail restaurantData={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(result) => result.id}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    marginBottom: 20,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 10,
  },
});

export default withNavigation(ResultsList);
