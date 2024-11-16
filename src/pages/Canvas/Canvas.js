import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  PanResponder,
  Button,
  Image,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native"; // For navigation

export default function CanvasScreen() {
  const [paths, setPaths] = useState([]);
  const [currentPath, setCurrentPath] = useState("");
  const [showModal, setShowModal] = useState(false); // State for modal visibility
  const canvasRef = useRef(null);
  const navigation = useNavigation(); // Access navigation

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => setCurrentPath(""),
    onPanResponderMove: (e) => {
      const { locationX, locationY } = e.nativeEvent;
      setCurrentPath((prev) =>
        prev
          ? `${prev} L ${locationX},${locationY}`
          : `M ${locationX},${locationY}`
      );
    },
    onPanResponderRelease: () => {
      if (currentPath) {
        setPaths((prev) => [
          ...prev,
          {
            path: currentPath,
            color: "#000000",
          },
        ]);
      }
      setCurrentPath("");
    },
  });

  const clearCanvas = () => setPaths([]);

  const submitDrawing = () => {
    setShowModal(true); // Show the popup
    setTimeout(() => {
      setShowModal(false); // Hide popup after delay
      navigation.navigate("Levels"); // Redirect to another screen
    }, 2000); // Delay of 2 seconds
  };

  return (
    <>
      <View style={styles.topChar}>
        <Text style={styles.text}>
          Draw the character "ka" in the canvas below
        </Text>
      </View>
      <View style={styles.container}>
        <View
          style={styles.canvas}
          {...panResponder.panHandlers}
          ref={canvasRef}
        >
          <Image
            source={require("../../../assets/Characters/char-ka.png")}
            style={styles.character}
            resizeMode='contain'
          />
          <Svg style={styles.svg}>
            {paths.map((item, index) => (
              <Path
                key={index}
                d={item.path}
                stroke={item.color}
                strokeWidth={20}
                fill='none'
              />
            ))}
            {currentPath && (
              <Path
                d={currentPath}
                stroke={"#000000"}
                strokeWidth={20}
                fill='none'
              />
            )}
          </Svg>
        </View>
        <View style={styles.buttonContainer}>
          <Button color='green' title='Clear Canvas' onPress={clearCanvas} />
          <Button title='Submit' onPress={submitDrawing} />
        </View>

        {/* Modal for popup */}
        <Modal
          animationType='fade'
          transparent={true}
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>🎉 You are correct!! 🎉</Text>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  topChar: {
    alignItems: "center",

    paddingTop: 50,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,

    backgroundColor: "#fff",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#fff",
  },
  canvas: {
    flex: 1,
  },
  svg: {
    flex: 1,
  },
  character: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.3,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
