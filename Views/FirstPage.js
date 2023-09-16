import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-elements";

const monsters = [
  {
    name: "Pyramid Head",
    image: require("./assets/pyramid-head.jpg"),
    description:
      "A monster with a pyramid-shaped head that appears in Silent Hill 2. Pyramid Head is a manifestation of the protagonist's guilt and desire for punishment, and is often depicted as a sexual predator. Its weapon of choice is a giant knife, which it uses to brutally slay its victims. Pyramid Head is a formidable and terrifying foe that haunts the streets of Silent Hill.",
  },
  {
    name: "Dark Nurse",
    image: require("./assets/nurse.jpg"),
    description:
      "A monster that appears in various forms throughout the Silent Hill series. The Nurse monster is often depicted as a humanoid figure with a twisted, disfigured face and a nurse's uniform. It wields a variety of weapons, including syringes and scalpels, which it uses to attack its victims. The Nurse monster is thought to be a manifestation of the protagonist's feelings of guilt and helplessness, and is often associated with themes of mental illness and self-harm.",
  },
  {
    name: "Lying Figure",
    image: require("./assets/lying_figure.png"),
    description:
      "A monster that appears in Silent Hill: Homecoming. The Lying Figure is a humanoid monster with a twisted, contorted body that appears to be in constant pain. It is often depicted as dragging itself across the ground, leaving a trail of blood behind it. The Lying Figure is thought to represent the protagonist's feelings of guilt and self-loathing, and is often associated with themes of abuse and trauma.",
  },
  {
    name: "Mannequin",
    image: require("./assets/mannequin.jpg"),
    description:
      "A monster that appears in Silent Hill: Homecoming. The Mannequin is a humanoid monster with a featureless, wax-like face and a body made of mannequin parts. It is often depicted as wearing clothes or armor, and is able to move with disturbing speed and agility. The Mannequin is thought to represent the protagonist's feelings of isolation and disconnection from the world, and is often associated with themes of identity and self-perception.",
  },
  // Add more monsters here...
];

const FirstPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <ScrollView style={styles.scrollnew}>
          {monsters.map((monster) => (
            <View
              key={monster.name}
              title={monster.name}
              image={monster.image}
              style={styles.detailcard}
            >
              <TouchableOpacity
                style={styles.detailcardtouch}
                onPress={() => navigation.navigate("Details", { monster })}
              >
                <Text style={styles.name}>{monster.name}</Text>
                <Image source={monster.image} style={styles.image} />
                {/* <Button
                buttonStyle={styles.button}
                title="Learn More"
                // onPress={() => navigation.navigate("Details", { monster })}
              /> */}
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  detailcard: {
    backgroundColor: "white",
    // border: "1px solid red",
    // borderWidth: "1px",
    padding: 15,
    // margin: 15 15 0,
    margin: "5%",
    borderRadius: 10,
    elevation: 20,
    shadowColor: "#52006A",
  },
  detailcardtouch: {
    alignItems: "center",
    // backgroundColor: "white",
  },
  // scrollnew: {
  //   backgroundColor: "yellow",
  // },

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
