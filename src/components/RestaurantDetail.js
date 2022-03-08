import React from 'react'
import {Image, StyleSheet, Text, View } from 'react-native'

const RestaurantDetail = ({restaurantData}) => {
    return (
        <View style={styles.restBackg}>
            <Image style={styles.image} source={{uri: restaurantData.image_url}}></Image>
            <Text style={styles.restName}>{restaurantData.name}</Text>
            <Text>{restaurantData.rating} stars, {restaurantData.review_count} Reviews</Text>
        </View>
    )
}

export default RestaurantDetail

const styles = StyleSheet.create({
    restBackg: {
        padding: 10,
    },
    restName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4
    }
})
