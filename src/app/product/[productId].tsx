import { View, Text, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useHeaderHeight } from "@react-navigation/elements";
import { useEffect, useState } from "react";
import { ProductType } from "../../lib/types";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState<ProductType | null>(null);
  const { productId } = useLocalSearchParams();
  const headerHeight = useHeaderHeight();

  const fetchSingleProduct = async (productId: number) => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${productId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setSingleProduct(result);
      console.log("single product data", result);
    } catch (error) {
      console.log(
        "something went wrong while fetching single product data",
        error
      );
    }
  };

  useEffect(() => {
    fetchSingleProduct(Number(productId));
  }, []);

  return (
    <SafeAreaView className="flex-1 px-4 py-2">
      <View style={{ marginTop: headerHeight - 20 }} className="p-4 rounded-lg">
        <View className="bg-[#e7e7e7] rounded-t-lg p-4">
          <Image
            className="mx-auto"
            source={{
              uri: singleProduct?.images[0],
            }}
            width={350}
            height={300}
          />
        </View>
        <Text className="mt-4 text-2xl font-semibold">
          {singleProduct?.title}
        </Text>
        <Text className="mt-4 text-xl text-gray-600">
          ${singleProduct?.price}
        </Text>
        <Text className="mt-4 text-lg leading-loose text-gray-700">
          {singleProduct?.description}
        </Text>
        <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-6 rounded-md">
          <Text className="text-lg text-center text-white">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
