import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Card, Button } from "react-native-elements";
import { Audio } from "expo-av";
import silenthillback from "./assets/newtex.jpg";

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
  {
    name: "Grey Child",
    image: require("./assets/GreyChild.jpg"),
    description:
      "Grey Children, also known as Demon Children, are child-like, knife-wielding monsters in Silent Hill. These creatures walk quickly and generally attack in pairs or groups of three. They are slender with long arms, and each wields a long knife. Grey Children are the distorted, disturbed perception of Alessa Gillespie's classmates as seen through her eyes, reminders of the torment and ridicule they abused her with, such as scribbling 'GO HOME' and 'DROP DEAD' on her desk.",
  },
  {
    name: "Incubus",
    image: require("./assets/Incubus.jpg"),
    description:
      "Incubus is the final boss in Silent Hill encountered during the Good and Good+ endings. The Incubus seems to be based on Baphomet. Incubus is a manifestation of the deity worshipped by the Order. The Otherworld from Alessa's dreams is caused by the presence of this god, which explains why when it dies, the Incubator in the Otherworld collapses.",
  },
  {
    name: "Creeper",
    image: require("./assets/SH2Creeper.jpg"),
    description:
      "The Creeper is an insectoid monster appearing in Silent Hill and Silent Hill 2. A manifestation of Alessa Gillespie's dislike of insects, they were encountered by Harry Mason when Silent Hill, Maine was transfigured by her psychic powers. They are hostile to humans, moving with great speed and reacting strongly to light.",
  },
  {
    name: "Split Head",
    image: require("./assets/Splithead.jpg"),
    description:
      "The Split Head faintly resembles a lizard, although its head has only extremely obscure facial features, almost making it impossible to discern parts of its face. However, black regions suggest the existence of eyes. The Split Head is the hellish incarnation and transfiguration of a great lizard that appears in a fairy tale from the elementary school.",
  },
  {
    name: "Mumbler",
    image: require("./assets/MumblerSH1.jpg"),
    description:
      "Mumblers are small, grotesque monsters seen in Silent Hill. They react strongly to light and make strange growling noises when they notice Harry Mason. Their claws serve as fingers, which can be used to deliver incredibly strong attacks. The Mumblers take on a dark image of the small menacing animals and demons from fairy tales that Alessa Gillespie used to read frequently as a child.",
  },
  {
    name: "Air Screamer",
    image: require("./assets/Airscreamer.jpg"),
    description:
      "The Air Screamer (also known as Avian Monster (Type A)) is a flying enemy appearing in Silent Hill. Its appearance is similar to that of a pteranodon but with the usual characteristics of the series' manifestations: its legs and torso are entirely covered by pale leathery skin and are vaguely humanoid but its elonged head shows two glassy eyes like those of a fish. The creature stands roughly half the height of a human giving it a quite impressive wingspan. The Air Screamer is a manifestation of an illustration in one of Alessa Gillespie's favorite books, The Lost World by Sir Arthur Conan Doyle, which presumably depicted a Pteranodon; but the creature also has the torso and legs of a human.",
  },
  {
    name: "Bloodsucker",
    image: require("./assets/Bloodsucker.jpg"),
    description:
      "The Bloodsucker resembles three leeches fused together at the base, which writhes like octopus tentacles. The Bloodsucker serves as the embodiment of Alessa Gillespie's strong aversion to leeches, worms, snakes and other similar entities. The beast also very likely symbolizes gluttony, as seen with its ravenous appetite for blood. This selfishness could be a hint towards Dahlia, seeing as she was blinded with yearning for her daughter to birth the Order's god.",
  },
  // Add more monsters here...
];

const FirstPage = ({ navigation }) => {
  async function newloadmusic() {
    const playbackObject = await Audio.Sound.createAsync(
      require("./assets/nullmoon.mp3"),
      { shouldPlay: true }
    );
    playbackObject.playAsync();
  }
  useEffect(() => {
    newloadmusic();
  }, []);
  // const image = { uri: silenthillback };

  return (
    <ImageBackground
      source={silenthillback}
      style={{ width: "100%", height: "100%" }}
    >
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
    </ImageBackground>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // backgroundImage: "url(./assets/newtex.jpg)",
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
