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
// import { Audio } from "expo-av";
import silenthillback from "./assets/newtex.jpg";
import axios from "axios";
import { clickedMonster, monsterName } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import { LinearGradient } from "expo-linear-gradient";

const FirstPage = ({ navigation }) => {
  const dispatch = useDispatch();
  const [monsterdata, setmonsterdata] = useState([]);

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
      .catch((err) => {
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

        retrieveDataFromStorage();
      });
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
                  key={monster?.name}
                  title={monster?.name}
                  image={monster?.image}
                  style={styles.detailcard}
                >
                  <LinearGradient
                    colors={["#D65D42", "#C34632", "#B12E21"]}
                    style={{ flex: 1, padding: 15, borderRadius: 10 }}
                  >
                    <TouchableOpacity
                      style={styles.detailcardtouch}
                      onPress={() => {
                        dispatch(monsterName(monster?.name));
                        navigation.navigate("Details", { monster });
                      }}
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
                  </LinearGradient>
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

    alignItems: "center",
    justifyContent: "center",
  },
  detailcard: {
    backgroundColor: "white",

    margin: "5%",
    borderRadius: 10,
    elevation: 20,
    shadowColor: "#52006A",
  },
  detailcardtouch: {
    alignItems: "center",
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
