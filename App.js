import { Image } from "react-native";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import WordControlProvider from "./src/context";

import ExercisePage from "./src/pages/ExercisePage";

const Stack = createStackNavigator();

import Home from "./src/pages/Home";
import Canvas from "./src/pages/Canvas";
import Levels from "./src/pages/Levels";
import LearnChar from "./src/pages/LearnChar";
import Wordmatch from "./src/pages/Wordmatch";
import Welcome from "./src/pages/Welcome";
import VoiceLearn from "./src/pages/Voicelearn";
import Letter from "./src/pages/Letter";
import Mala from "./src/pages/Mala";
import Firstpage from "./src/pages/Firstpage";

const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    Nithya: require("./assets/Fonts/NithyaRanjanaDU-Regular.otf"),
    Nunito_Black: require("./assets/Fonts/Nunito-Black.ttf"),
    Nunito_Bold: require("./assets/Fonts/Nunito-Bold.ttf"),
    Nunito_ExtraBold: require("./assets/Fonts/Nunito-ExtraBold.ttf"),
    Nunito_Regular: require("./assets/Fonts/Nunito-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <WordControlProvider>
      <NavigationContainer independent={true}>
        <HomePage />
      </NavigationContainer>
    </WordControlProvider>
  );
}

function HomePage() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name='More'
        component={NewariNavigator}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name='Bottom'
        component={BottomNavigator}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen name='BottomNavigator' component={BottomNavigator} />
      <Stack.Screen
        name='ExercisePage'
        component={ExercisePage}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name='LearnChar'
        component={LearnChar}
        options={{
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name='Canvas'
        component={Canvas}
        options={{
          presentation: "modal",
        }}
      />
    </Stack.Navigator>
  );
}

function NewariNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarShowLabel: false, headerShown: false }}
    >
      <Tab.Screen
        name='Firstpage'
        component={Firstpage}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name='VoiceLearn'
        component={VoiceLearn}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name='Welcome'
        component={Welcome}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name='Mala'
        component={Mala}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />
      <Tab.Screen
        name='Letter'
        component={Letter}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name='Wordmatch'
        component={Wordmatch}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name='Levels'
        component={Levels}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/home-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/home-unactive.png")}
                />
              );
            }
          },
        }}
      />

      <Tab.Screen
        name='LearnChar'
        component={LearnChar}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-active.png")}
                />
              );
            } else {
              return (
                <Image
                  style={{ width: 30, height: 25 }}
                  source={require("./assets/Icons/book-unactive.png")}
                />
              );
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}
