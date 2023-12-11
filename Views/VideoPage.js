import { Text, View, StyleSheet, ScrollView, Button } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";

const VideoPage = () => {
  const videoidArray = [
    "I4J2gBFiM0A",
    "QFvt2cNSOaM",
    "yfJAooq3mTg",
    "4R5ftu5oYuM",
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {videoidArray &&
          videoidArray?.map((item, index) => (
            <YoutubePlayer height={230} videoId={item} />
          ))}
      </ScrollView>
    </View>
  );
};

export default VideoPage;

const styles = StyleSheet.create({
  container: {
    padding: "5%",
  },
});
