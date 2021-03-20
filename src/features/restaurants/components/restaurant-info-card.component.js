import React from "react";
import { StyleSheet } from "react-native";

import { Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <Card elevation={5} >
      <Card.Cover source={{ uri: photos[0] }}/>
      <Card.Content>
        <Title>{name}</Title>
        <Paragraph>{address}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  
});