import { useLocalSearchParams, Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProductType } from "../../lib/types";
import { useCartContext } from "../../lib/hooks";

export default function CategoriesProducts() {
  const { categorySlug } = useLocalSearchParams();
  const { addToCart } = useCartContext();
  const [categoryProducts, setCategoryProducts] = useState<ProductType[]>([]);

  const fetchCategoryProducts = async (categorySlug: string) => {
    try {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?categorySlug=${categorySlug}`,
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
      setCategoryProducts(result);
    } catch (error) {
      console.log(
        "something went wrong while fetching category products data",
        error
      );
    }
  };

  useEffect(() => {
    fetchCategoryProducts(categorySlug as string);
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView className="flex-1 px-4 py-2">
        <View className="mt-4">
          <Text className="text-xl font-bold text-center capitalize">
            {categorySlug}
          </Text>
        </View>

        <View className="flex flex-row flex-wrap gap-3">
          {/* card */}
          <FlatList
            key={"two-columns"}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            data={categoryProducts}
            renderItem={({ item }) => (
              <View className="flex-1 px-1 py-2 rounded-lg">
                <View className="bg-[#e7e7e7] rounded-t-lg p-4">
                  <Link href={`/product/${item.id}`} className="mx-auto">
                    <Image
                      source={{ uri: item.images[0] }}
                      width={100}
                      height={100}
                      resizeMode="contain"
                    />
                  </Link>
                </View>
                <View className="flex flex-col p-2 bg-white rounded-b-lg">
                  <Text className="text-lg text-center">{item.title}</Text>
                  <Text className="text-center">
                    Category {item.category.name}
                  </Text>
                  <Text className="text-center">Price ${item.price}</Text>
                  <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-2 rounded-md">
                    <Text
                      onPress={() => addToCart(item)}
                      className="text-lg text-center text-white"
                    >
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={
              <View className="flex items-center justify-center mt-10">
                <Text>No products found</Text>
              </View>
            }
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

// https://api.escuelajs.co/api/v1/products?categorySlug=electronics
