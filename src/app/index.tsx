import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="border-2 border-red-500 flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <Text className="text-red-500">
        Open up App.tsx to start working on your app!
      </Text>
    </View>
  );
}
