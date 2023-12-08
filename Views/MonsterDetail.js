import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";
import silenthillback2 from "./assets/greytex.jpg";

import React from "react";

const MonsterDetail = ({ route, navigation }) => {
  const { monster } = route.params;
  return (
    <ImageBackground
      source={silenthillback2}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Image source={{ uri: monster.image }} style={styles.image} />
        <Text style={styles.name}>{monster.name}</Text>
        <Text style={styles.description}>{monster.description}</Text>
        {/* <Button
          color="#b7410e"
          title="Go Back"
          onPress={() => navigation.navigate("Silent Hill")}
        /> */}
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => navigation.navigate("Home")}
          underlayColor="#fff"
        >
          <Text style={styles.loginText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default MonsterDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
  },
  description: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  loginScreenButton: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#b7410e",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#b7410e",
    marginBottom: 10,
  },
});
