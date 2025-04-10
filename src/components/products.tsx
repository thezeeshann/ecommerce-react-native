import { Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { Link } from "expo-router";
import { useContext } from "react";
import { AppContext } from "../context/app-context";
import { CartContext } from "../context/cart-context";

export default function Products() {
  const { products } = useContext(AppContext);
  const { addToCart } = useContext(CartContext);

  return (
    <View className="px-2 mt-6">
      <Text className="mb-2 text-xl">All Products</Text>
      <View className="flex flex-row flex-wrap gap-3">
        {/* card */}
        <FlatList
          key={"two-columns"}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          data={products}
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
    </View>
  );
}
