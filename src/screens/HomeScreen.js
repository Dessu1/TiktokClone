import React from "react";
import { View, Text } from "react-native";
import { Post } from "../components";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Post />
    </View>
  );
};

export default HomeScreen;
