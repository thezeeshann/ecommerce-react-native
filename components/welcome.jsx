import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import ButtonApp from "./Button";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Welcome</Text>
        <Text style={styles.textSubHeading}>Mern Shopping House</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/shopping.jpg")}
          style={{ width: 300, height: 350 }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonApp href="/signup" text="Sign Up" />
        <ButtonApp href="/signin" text="Log in" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    flex: 0.5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textHeading: {
    fontSize: 30,
    fontWeight: "600",
  },
  textSubHeading: {
    fontSize: 20,
  },
  imageContainer: {
    marginVertical: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    display: "flex",
    rowGap: 16,
  },
});

export default Welcome;
