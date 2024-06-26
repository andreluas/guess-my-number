import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../utils/colors";

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWitdh = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWitdh < 380 ? 12 : 24,
    margin: deviceWitdh < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWitdh < 380 ? 28 : 36,
    // fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
