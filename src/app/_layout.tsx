import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import { Text, TouchableOpacity, View } from "react-native";
import "../../global.css";

function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="product/[productId]"
        options={{
          title: "",
          headerTransparent: true,
          presentation: "modal",
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitle: () => (
            <Text className="text-xl font-bold">Product Details</Text>
          ),
          headerRight: () => (
            <TouchableOpacity className="pr-4">
              <Feather name="shopping-bag" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack>
  );
}

export default Layout;
