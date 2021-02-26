import React, { useEffect, useRef, useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import Video from "react-native-video";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import TextTicker from "react-native-text-ticker";

const Post = () => {
  const spinValue = useRef(new Animated.Value(0)).current;
  const [pausedVideo, setpausedVideo] = useState(false);

  const animateDisc = useCallback(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  useEffect(() => {
    animateDisc();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          setpausedVideo(!pausedVideo);
        }}
      >
        <Video
          style={styles.video}
          resizeMode='cover'
          paused={pausedVideo}
          source={{
            uri:
              "https://res.cloudinary.com/sgarciacloud/video/upload/v1614146740/videoexample.mp4",
          }}
          repeat
        />
      </TouchableWithoutFeedback>

      <View style={styles.sideContainer}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                "https://res.cloudinary.com/sgarciacloud/image/upload/v1614154654/pexels-masha-raymers-4935657_zaxdhj.jpg",
            }}
          />

          <View style={styles.plusIcon}>
            <Entypo name='plus' size={15} color={"#fff"} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionContainer}>
          {/* Icon */}
          <MaterialCommunityIcons name='heart' size={35} color='white' />
          <Text style={styles.actionLabel}>328.7k</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionContainer}>
          {/* Icon */}
          <FontAwesome name='commenting' size={35} color='white' />
          <Text style={styles.actionLabel}>342</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionContainer}>
          {/* Icon */}
          <Fontisto name='share-a' size={35} color='white' />
          <Text style={styles.actionLabel}>Share</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <View>
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

        <Animated.View
          style={[
            styles.songCoverContainer,
            {
              transform: [{ rotate: spin }],
            },
          ]}
        >
          <Image source={require("../assets/images/disc.png")} />
          <Image
            style={styles.songCover}
            source={{
              uri:
                "https://ih1.redbubble.net/image.749166292.7611/fpp,small,lustre,wall_texture,product,750x1000.u1.jpg",
            }}
          />
        </Animated.View>
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
    paddingRight: 7,
  },
  bottomContainer: {
    width: "100%",
    paddingBottom: 10,
    paddingHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
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
  avatarContainer: {
    alignItems: "center",
    marginBottom: 22.5,
  },
  avatar: {
    width: 47,
    height: 47,
    borderRadius: 47 / 2,
    borderWidth: 1,
    borderColor: "#fff",
  },
  plusIcon: {
    backgroundColor: "#EA4359",
    width: 21,
    height: 21,
    borderRadius: 21 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -(21 / 2),
  },
  actionContainer: {
    alignItems: "center",
    marginBottom: 22.5,
  },
  actionLabel: {
    color: "white",
    fontSize: 13,
    fontWeight: "600",
    marginTop: 5.27,
  },
  songCoverContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  songCover: {
    width: 29,
    height: 29,
    borderRadius: 29 / 2,
    position: "absolute",
  },
});

export default Post;
