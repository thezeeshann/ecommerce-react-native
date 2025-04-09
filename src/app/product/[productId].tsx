import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";

export default function SingleProduct() {
  const { productId } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();
  console.log(headerHeight);

  return (
    <SafeAreaView className="flex-1 px-4 py-2">
      <View style={{ marginTop: headerHeight - 20 }} className="p-4 rounded-lg">
        <View className="bg-[#e7e7e7] rounded-t-lg p-4">
          <Image
            className="mx-auto"
            source={{
              uri: "https://i.imgur.com/ZANVnHE.jpeg",
            }}
            width={350}
            height={300}
          />
        </View>
        <Text className="mt-4 text-2xl font-semibold">
          Classic High-Waisted Athletic Shorts
        </Text>
        <Text className="mt-4 text-xl text-gray-600">$43</Text>
        <Text className="mt-4 text-lg leading-loose text-gray-700">
          Stay comfortable and stylish with our Classic High-Waisted Athletic
          Shorts. Designed for optimal movement and versatility, these shorts
          are a must-have for your workout wardrobe. Featuring a
          figure-flattering high waist, breathable fabric, and a secure fit that
          ensures they stay in place during any activity, these shorts are
          perfect for the gym, running, or even just casual wear.
        </Text>
        <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-6 rounded-md">
          <Text className="text-lg text-center text-white">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
