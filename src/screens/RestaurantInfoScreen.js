import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantInfoScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [restData, setRestData] = useState({})
  const [error, setError] = useState(null);

  const getRestaurantDetails = async (id) => {
    try {
      const result = await yelp.get(`/${id}`);
      setRestData(result.data)
    } catch (error) {
      setError({ type: "error", message: "Something went wrong" });
    }
  };
  console.log(restData)
  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  return (
    <>
      <Text style={styles.title}>{restData.name}</Text>
      <Text style={{textAlign: 'center'}}>Contact No - {restData.phone}</Text>
      <FlatList data={restData.photos} keyExtractor={photos=>photos} renderItem={(photo)=>{
          return (
              <Image source={{uri: photo.item}} style={styles.image}></Image>
          )
      }}>

      </FlatList>
    </>
  );
};

export default RestaurantInfoScreen;

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingTop: 10
    },
    image:{
        height: 300,
        width: 300,
        alignSelf: 'center',
        marginBottom: 5
    }
});
