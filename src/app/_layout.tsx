import { Stack } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Text, TouchableOpacity } from "react-native";
import AppContextProvider from "../context/app-context";
import CartProvider from "../context/cart-context";
import "../../global.css";

function Layout() {
  return (
    <AppContextProvider>
      <CartProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="cart" options={{ headerShown: false }} />
          <Stack.Screen
            name="category/[categorySlug]"
            options={{
              title: "",
              headerTransparent: true,
            }}
          />
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
      </CartProvider>
    </AppContextProvider>
  );
}

export default Layout;
