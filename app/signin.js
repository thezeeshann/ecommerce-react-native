import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, router } from "expo-router";

const signin = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <AntDesign
          onPress={() => router.push("/")}
          name="arrowleft"
          size={20}
          color="black"
          style={{
            borderWidth: 1,
            borderColor: "#333333",
            borderRadius: 50,
            width: "10%",
            paddingHorizontal: 5,
            paddingVertical: 5,
          }}
        />
        <Text style={styles.textHeading}>Sign in Now</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <Text style={{ fontWeight: "500", marginLeft: 12 }}>Email</Text>
          <TextInput
            keyboardType="email-address"
            placeholder="Email Address"
            style={styles.input}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "500", marginLeft: 12 }}>Password</Text>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            style={styles.input}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Button title="Log in" />
      </TouchableOpacity>
      <View style={styles.messageTextContainer}>
        <Text style={{ fontSize: 16, fontWeight: "500" }}>
          Don't have any account?{" "}
        </Text>
        <Link href="/signup">
          <Text
            style={{ fontSize: 16, fontWeight: "500", color: "dodgerblue" }}
          >
            Sign Up
          </Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  textContainer: {
    flex: 1,
  },
  textHeading: {
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 50,
    flex: 1,
  },
  input: {
    borderRadius: 5,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#b0b0b0",
  },
  button: {
    marginTop: 50,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    flex: 1,
  },
  messageTextContainer: {
    marginTop: 50,
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    gap: 5,
    flex: 1,
  },
});

export default signin;
