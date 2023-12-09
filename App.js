import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import FirstPage from "./Views/FirstPage";
import MonsterDetail from "./Views/MonsterDetail";
import DrawerContent from "./Views/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={FirstPage}
        // options={{ title: "Silent Hill" }}
      />

      <Stack.Screen
        name="Details"
        component={MonsterDetail}
        // options={{ title: "Monster Details" }}
      />
    </Stack.Navigator>
  );
};

const Drawer = createDrawerNavigator();

export default function App() {
  const [isMuted, setIsMuted] = useState(false);
  const [sound, setSound] = useState();
  async function newloadmusic() {
    // const playbackObject = await Audio.Sound.createAsync(
    const { sound } = await Audio.Sound.createAsync(
      require("./Views/assets/nullmoon.mp3"),
      { shouldPlay: true, isLooping: true }
    );
    // playbackObject.playAsync();
    setSound(sound);
  }
  useEffect(() => {
    newloadmusic();
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);
  // const image = { uri: silenthillback };

  const toggleMute = () => {
    if (sound) {
      sound.setIsMutedAsync(!isMuted);
      setIsMuted(!isMuted);
    }
  };
  const drawerHeader = useSelector((state) => state.data.monstername);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}
        drawerStyle={{
          backgroundColor: "",
        }}
        screenOptions={{
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: "#B12E21",
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={StackNav}
          // options={{ title: "Silent Hill" }}
          options={{
            title: drawerHeader,
            headerRight: () =>
              // <Ionicons
              //   name="ios-settings"
              //   size={30}
              //   color="black"
              //   style={{ marginRight: 15 }}
              // />
              isMuted === false ? (
                <TouchableOpacity onPress={toggleMute}>
                  <Image
                    source={require("./Views/assets/muteoff.png")}
                    style={{ width: 50, height: 50, marginRight: 10 }}
                    // onPress={toggleMute}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={toggleMute}>
                  <Image
                    source={require("./Views/assets/muteon.png")}
                    style={{ width: 50, height: 50, marginRight: 10 }}
                  />
                </TouchableOpacity>
              ),
            // <View>
            //   <TouchableOpacity
            //     onPress={toggleMute}
            //     style={{
            //       backgroundColor: "black",
            //     }}
            //   >
            //     <Text>{isMuted ? "Unmute" : "Mute"}</Text>
            //   </TouchableOpacity>
            // </View>
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
