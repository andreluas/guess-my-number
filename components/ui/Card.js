import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const deviceWitdh = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWitdh < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // android only
    // iOS shadow
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
