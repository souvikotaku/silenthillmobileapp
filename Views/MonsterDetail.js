import { StyleSheet, Text, View, Image } from "react-native";
import { Card, Button } from "react-native-elements";

import React from "react";

const MonsterDetail = ({ route, navigation }) => {
  const { monster } = route.params;
  return (
    <View style={styles.container}>
      <Image source={monster.image} style={styles.image} />
      <Text style={styles.name}>{monster.name}</Text>
      <Text style={styles.description}>{monster.description}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default MonsterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
