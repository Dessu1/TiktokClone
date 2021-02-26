import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Video from "react-native-video";
import Foundation from "react-native-vector-icons/Foundation";
import TextTicker from "react-native-text-ticker";

const Post = () => {
  return (
    <View style={styles.container}>
      <Video
        style={styles.video}
        resizeMode='cover'
        source={{
          uri:
            "https://res.cloudinary.com/sgarciacloud/video/upload/v1614146740/videoexample.mp4",
        }}
        repeat
      />

      <View style={styles.sideContainer}>
        <Image
          source={{
            uri:
              "https://res.cloudinary.com/sgarciacloud/image/upload/v1614154654/pexels-masha-raymers-4935657_zaxdhj.jpg",
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.username}>@Dexu Dev</Text>
        <Text style={styles.description}>Hello there</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {/* icon */}
          <Foundation name='music' size={15} color={"#fff"} />
          <TextTicker
            style={styles.songName}
            loop
            bounce={false}
            shouldAnimateTreshold={40}
          >
            Miki Matsubara - Stay whit me
          </TextTicker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  video: {
    ...StyleSheet.absoluteFillObject,
  },
  sideContainer: {
    alignSelf: "flex-end",
  },
  bottomContainer: {
    width: "100%",
    paddingBottom: 10,
    paddingHorizontal: 12,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  description: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    marginBottom: 7,
  },
  songName: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 9,
  },
});

export default Post;
