import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

const Stack = createStackNavigator();

const Home = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    console.log("Continue pressed");
    navigation.navigate("More", { screen: "Firstpage" });
    // Add navigation logic or desired action
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                // Update the path to your image
                source={require("../../../assets/images/title.png")}
                style={{ width: 40, height: 40, borderRadius: 10 }}
                resizeMode='contain'
              />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        {/* Title Image */}
        <Image
          // Update the path to your image
          source={require("../../../assets/images/title.png")}
          style={styles.titleImage}
          resizeMode='contain'
        />

        <Text style={styles.subtitle}>
          Explore Heritage, Embrace Language –{"\n"}Rediscover Culture with AR.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  titleImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    marginTop: 10,
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#9B1C1C", // Button dark red
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    position: "absolute",
    bottom: 50,
    width: "65%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
});
