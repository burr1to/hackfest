import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styles from "./Levels.styles";
import Exercises from "../../components/Exercises";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import data from "../../../data/courseData.json";

import { StatusBar } from "expo-status-bar";

const Levels = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto' />

      <FlatList
        data={data.sections}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={true}
        ListHeaderComponent={
          <View style={styles.body}>
            <Text style={styles.bodyTitle}>Learn Newari</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Levels;

const renderSection = ({ item }) => {
  const { id, data } = item;

  return (
    <View style={styles.section}>
      {data.map((tier) => {
        return (
          <View style={styles.tier} key={tier.tier}>
            {tier.exercises.map((exercise) => {
              return <Exercises exercise={exercise} key={exercise.id} />;
            })}
          </View>
        );
      })}
      <View>
        <Text>Niggdsda Dssdsdigga</Text>
      </View>
    </View>
  );
};
