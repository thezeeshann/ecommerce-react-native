import { View, Text, Image } from "react-native";
import AppButton from "./Button";
import { router } from "expo-router";
const Welcome = () => {
  return (
    <View className="flex flex-col gap-y-8">
      <View className="flex flex-col items-center justify-center ">
        <Text className="font-semibold text-3xl">Welcome</Text>
        <Text className="text-lg">Mern Shopping House</Text>
      </View>

      <View className="">
        <Image
          source={require("../assets/shopping.jpg")}
          style={{ width: 300, height: 350 }}
        />
      </View>
      <View className="flex flex-col gap-y-5">
        <AppButton title="Sign Up" onPress={() => router.push("/signup")} />
        <AppButton
          title="Log in"
          onPress={() => router.push("/signin")}
          color="bg-indigo-100"
        />
      </View>
    </View>
  );
};

export default Welcome;
