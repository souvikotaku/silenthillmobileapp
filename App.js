import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import FirstPage from "./Views/FirstPage";
import MonsterDetail from "./Views/MonsterDetail";
import DrawerContent from "./Views/DrawerContent";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

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
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   <FirstPage />
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={StackNav}
          options={{ title: "Silent Hill" }}
        />

        {/* <Stack.Screen
          name="Details"
          component={MonsterDetail}
          options={{ title: "Monster Details" }}
        /> */}
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
