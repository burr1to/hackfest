import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LearnChar = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.bodyTitle}>Let's Learn Newari !!</Text>
      <Text style={styles.bodyText}>Start Learning Newari Characters</Text>
      <Button
        style={styles.buttonChar}
        title='Learn The Characters'
        onPress={() => {
          navigate.navigate("Canvas");
        }}
      />
    </View>
  );
};

export default LearnChar;
