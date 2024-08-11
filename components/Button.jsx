import { StyleSheet, Text } from "react-native";
import { Link } from "expo-router";

const ButtonApp = ({ text, href }) => {
  const ButtonColor = text === "Sign Up" ? "dodgerblue" : "#e2e6f7";
  const ButtonTextColor = text === "Sign Up" ? "#ffffff" : "";

  return (
    <Link
      href={href}
      style={[style.buttonContainer, { backgroundColor: ButtonColor }]}
    >
      <Text style={[style.text, { color: ButtonTextColor }]}>{text}</Text>
    </Link>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    textAlign: "center",
    borderRadius: 3,
    padding: 12,
  },
  text: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default ButtonApp;
