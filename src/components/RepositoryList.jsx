import React from "react";
import { View, Text } from "react-native";

const RepositoryList = (props) => {
  <View key={props.id}>
    <Text>Id: {props.id}</Text>
    <Text>FullName: {props.fullName}</Text>
    <Text>Description: {props.description}</Text>
    <Text>Lenguage: {props.lenguage}</Text>
    <Text>Stars: {props.stargazersCount}</Text>
    <Text>Forks: {props.forksCount}</Text>
    <Text>Review: {props.reviewCount}</Text>
    <Text>Rating: {props.ratingAvarage}</Text>
  </View>;
};

export default RepositoryList;