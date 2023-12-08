import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
import axios from "axios";

// const monsters = [
//   {
//     name: "Pyramid Head",
//     image: require("./assets/pyramid_head.png"),
//     description:
//       "A monster with a pyramid-shaped head that appears in Silent Hill 2. Pyramid Head is a manifestation of the protagonist's guilt and desire for punishment, and is often depicted as a sexual predator. Its weapon of choice is a giant knife, which it uses to brutally slay its victims. Pyramid Head is a formidable and terrifying foe that haunts the streets of Silent Hill.",
//   },
//   {
//     name: "Dark Nurse",
//     image: require("./assets/nurse.png"),
//     description:
//       "A monster that appears in various forms throughout the Silent Hill series. The Nurse monster is often depicted as a humanoid figure with a twisted, disfigured face and a nurse's uniform. It wields a variety of weapons, including syringes and scalpels, which it uses to attack its victims. The Nurse monster is thought to be a manifestation of the protagonist's feelings of guilt and helplessness, and is often associated with themes of mental illness and self-harm.",
//   },
//   {
//     name: "Lying Figure",
//     image: require("./assets/lying_figure.png"),
//     description:
//       "A monster that appears in Silent Hill: Homecoming. The Lying Figure is a humanoid monster with a twisted, contorted body that appears to be in constant pain. It is often depicted as dragging itself across the ground, leaving a trail of blood behind it. The Lying Figure is thought to represent the protagonist's feelings of guilt and self-loathing, and is often associated with themes of abuse and trauma.",
//   },
//   {
//     name: "Mannequin",
//     image: require("./assets/mannequin.png"),
//     description:
//       "A monster that appears in Silent Hill: Homecoming. The Mannequin is a humanoid monster with a featureless, wax-like face and a body made of mannequin parts. It is often depicted as wearing clothes or armor, and is able to move with disturbing speed and agility. The Mannequin is thought to represent the protagonist's feelings of isolation and disconnection from the world, and is often associated with themes of identity and self-perception.",
//   },
//   {
//     name: "Grey Child",
//     image: require("./assets/GreyChild.png"),
//     description:
//       "Grey Children, also known as Demon Children, are child-like, knife-wielding monsters in Silent Hill. These creatures walk quickly and generally attack in pairs or groups of three. They are slender with long arms, and each wields a long knife. Grey Children are the distorted, disturbed perception of Alessa Gillespie's classmates as seen through her eyes, reminders of the torment and ridicule they abused her with, such as scribbling 'GO HOME' and 'DROP DEAD' on her desk.",
//   },
//   {
//     name: "Incubus",
//     image: require("./assets/Incubus.png"),
//     description:
//       "Incubus is the final boss in Silent Hill encountered during the Good and Good+ endings. The Incubus seems to be based on Baphomet. Incubus is a manifestation of the deity worshipped by the Order. The Otherworld from Alessa's dreams is caused by the presence of this god, which explains why when it dies, the Incubator in the Otherworld collapses.",
//   },
//   {
//     name: "Creeper",
//     image: require("./assets/SH2Creeper.png"),
//     description:
//       "The Creeper is an insectoid monster appearing in Silent Hill and Silent Hill 2. A manifestation of Alessa Gillespie's dislike of insects, they were encountered by Harry Mason when Silent Hill, Maine was transfigured by her psychic powers. They are hostile to humans, moving with great speed and reacting strongly to light.",
//   },
//   {
//     name: "Split Head",
//     image: require("./assets/Splithead.png"),
//     description:
//       "The Split Head faintly resembles a lizard, although its head has only extremely obscure facial features, almost making it impossible to discern parts of its face. However, black regions suggest the existence of eyes. The Split Head is the hellish incarnation and transfiguration of a great lizard that appears in a fairy tale from the elementary school.",
//   },
//   {
//     name: "Mumbler",
//     image: require("./assets/MumblerSH.png"),
//     description:
//       "Mumblers are small, grotesque monsters seen in Silent Hill. They react strongly to light and make strange growling noises when they notice Harry Mason. Their claws serve as fingers, which can be used to deliver incredibly strong attacks. The Mumblers take on a dark image of the small menacing animals and demons from fairy tales that Alessa Gillespie used to read frequently as a child.",
//   },
//   {
//     name: "Air Screamer",
//     image: require("./assets/Airscreamer.png"),
//     description:
//       "The Air Screamer (also known as Avian Monster (Type A)) is a flying enemy appearing in Silent Hill. Its appearance is similar to that of a pteranodon but with the usual characteristics of the series' manifestations: its legs and torso are entirely covered by pale leathery skin and are vaguely humanoid but its elonged head shows two glassy eyes like those of a fish. The creature stands roughly half the height of a human giving it a quite impressive wingspan. The Air Screamer is a manifestation of an illustration in one of Alessa Gillespie's favorite books, The Lost World by Sir Arthur Conan Doyle, which presumably depicted a Pteranodon; but the creature also has the torso and legs of a human.",
//   },
//   {
//     name: "Bloodsucker",
//     image: require("./assets/Bloodsucker.png"),
//     description:
//       "The Bloodsucker resembles three leeches fused together at the base, which writhes like octopus tentacles. The Bloodsucker serves as the embodiment of Alessa Gillespie's strong aversion to leeches, worms, snakes and other similar entities. The beast also very likely symbolizes gluttony, as seen with its ravenous appetite for blood. This selfishness could be a hint towards Dahlia, seeing as she was blinded with yearning for her daughter to birth the Order's god.",
//   },
//   {
//     name: "Valtiel",
//     image: require("./assets/valtiel.png"),
//     description:
//       "Valtiel is humanoid in appearance, but his head vibrates and twitches rapidly, obscuring his facial features. Valtiel has the Seal of Metatron on both of his shoulders. Metatron and Valtiel are both considered the Agents of God. Unlike most monsters in the series, Valtiel doesn't appear to be a manifestation of any person's emotions or subconscious. It is possible he is a unique being that exists in the Otherworld whose existence is independent of humans, directly serving God.",
//   },
//   {
//     name: "Abstract Daddy",
//     image: require("./assets/abstract_daddy.png"),
//     description:
//       "Abstract Daddy, also known as the Ideal father, is a monster found in claustrophobic areas of Silent Hill. Abstract Daddy is a creature resembling two figures intertwined in a reclining sexual position over a bed frame, trapped in this position by the flesh covering its body. It is a manifestation of the trauma Angela sustained from the sexual abuse by her father and brother, seen abstractly through the psyche of James Sunderland.",
//   },
//   {
//     name: "Numb Body",
//     image: require("./assets/numb_body.png"),
//     description:
//       "Numb Bodies are relatively featureless, bipedal creatures that appear in various sizes. They waddle and hop side-to-side. The name 'Numb Body' is derived from the creature's slow and clumsy movements and the pale frozen texture of its body.",
//   },
//   {
//     name: "Amnion",
//     image: require("./assets/amnion.png"),
//     description:
//       "Amnion appears when Alex discovers the ritual chamber in the Otherworld lair. Amnion appears as a female humanoid figure attached to a large mechanical apparatus with four legs, resembling a spider. The human body is pale and bloated, like a waterlogged corpse, or a heavily pregnant woman due to give birth. The fact that the monster resembles a pregnant mother, the name 'Amnion' referencing the amniotic sac that surrounds a fetus. The tube of water protruding from her mouth referring to the act of drowning as well as the imagery of an umbilical cord.",
//   },
//   {
//     name: "Armless Man",
//     image: require("./assets/armless_man.png"),
//     description:
//       "The Armless Man appears in both the first Silent Hill film and the sequel. The creature is a distorted, but discernibly human-looking creature, albeit heavily disfigured. The monster may serve to represent Alessa Gillespie's hospitalization. He is disoriented, and its should-be arms are entirely adhered into its torso. This represents being trapped in oneself, as Alessa was during her many years of hospitalization: her disfigured body a shell for her tortured mind.",
//   },
//   {
//     name: "Asphyxia",
//     image: require("./assets/asphyxia.png"),
//     description:
//       "Asphyxia is the third boss monster encountered in Silent Hill: Homecoming. She is the manifestation of Margaret Holloway's memories of her daughter Nora, whom she suffocated as a sacrifice to maintain the pact with the Order and their god. Asphyxia's name and appearance are symbolic of how Nora Holloway died: suffocation. Asphyxia attacks with her numerous limbs, but she primarily strikes with her four main arms, often in a series of three swings. Asphyxia emerges from a vagina-resembling aperture on the walls, a nod to the theme of labor and childbirth in the game.",
//   },

//   // Add more monsters here...
// ];

const FirstPage = ({ navigation }) => {
  const [monsterdata, setmonsterdata] = useState([]);
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

  useEffect(() => {
    axios
      .get(
        "https://crud-todo-48576-default-rtdb.asia-southeast1.firebasedatabase.app/post.json"
      )
      .then((response) => {
        var myData = Object.keys(response?.data).map((key) => {
          return response?.data[key];
        });

        // Add data to AsyncStorage
        const addDataToStorage = async () => {
          try {
            await AsyncStorage.setItem("myData", JSON.stringify(myData));
          } catch (error) {
            console.error("Error storing data:", error);
          }
        };

        // Retrieve data from AsyncStorage
        const retrieveDataFromStorage = async () => {
          try {
            const storedData = await AsyncStorage.getItem("myData");
            if (storedData !== null) {
              const parsedData = JSON.parse(storedData);
              setmonsterdata(parsedData);
            }
          } catch (error) {
            console.error("Error retrieving data:", error);
          }
        };

        // Call the functions
        addDataToStorage();
        retrieveDataFromStorage();
      })
      .catch((err) => console.log(err));
  }, []);

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
            {monsterdata &&
              monsterdata.map((monster) => (
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
                    <Image
                      source={{ uri: monster.image }}
                      style={styles.image}
                    />
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
