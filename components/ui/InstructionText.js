import React from "react";
import { StyleSheet, Text } from "react-native";
import Colors from "../../utils/colors";

export default function InstructionText({ children, style }) {
  return <Text style={[style, styles.instructionText]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 24,
  },
});
