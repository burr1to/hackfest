import { Text } from "react-native";

import styles from "./styles";

const Instruction = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

export default Instruction;
