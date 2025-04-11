import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { useCartContext } from "../lib/hooks";

export default function Cart() {
  const { cartItems, removeFromCart, totalPrice, clearCart } = useCartContext();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView className="w-full h-full px-4 py-2 ">
        <StatusBar style="auto" />
        <View className="flex flex-row items-center ">
          <AntDesign
            onPress={() => router.back()}
            className="w-[20%] "
            name="arrowleft"
            size={24}
            color="black"
          />
          <Text className="w-[60%] text-center text-xl font-bold">My Cart</Text>
          <Feather
            className="w-[20%] ml-6  "
            name="shopping-bag"
            size={24}
            color="black"
          />
        </View>

        <View className="px-4 pt-14">
          {cartItems.length === 0 ? (
            <View className="flex-1 items-center justify-center h-[80%]">
              <Text className="text-lg font-bold">Your cart is empty</Text>
            </View>
          ) : (
            <FlatList
              data={cartItems}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <View className="flex flex-row items-start justify-between p-2 mb-4 bg-white shadow-md rounded-xl">
                  {/* Product Image */}
                  <View className="p-2">
                    <Image
                      className="rounded-lg"
                      source={{ uri: item?.images[0] }}
                      width={100}
                      height={100}
                    />
                  </View>

                  {/* Title, Price, Quantity */}
                  <View className="w-[55%]">
                    <Text className="text-lg font-semibold">{item?.title}</Text>
                    <Text className="mt-2 text-base font-medium text-gray-700">
                      ${item?.price}
                    </Text>

                    <View className="flex flex-row items-center mt-4 space-x-4">
                      <AntDesign
                        name="minus"
                        size={20}
                        color="black"
                        className="bg-[#e7e7e7] p-1 rounded-full"
                      />
                      <Text className="text-lg font-medium">
                        {item?.quantity}
                      </Text>
                      <AntDesign
                        name="plus"
                        size={20}
                        color="black"
                        className="bg-[#e7e7e7] p-1 rounded-full"
                      />
                    </View>
                  </View>

                  {/* Remove Button */}
                  <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Entypo name="cross" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>

        <View className="mt-20">
          <View className="flex flex-row items-center justify-between mt-4">
            <Text className="text-2xl w-[80%] ">Sub Total</Text>
            <Text className="text-lg">${totalPrice}</Text>
          </View>
          <TouchableOpacity
            onPress={() => clearCart()}
            className="bg-[#444fc0] px-4 py-4 mt-6 rounded-md"
          >
            <Text className="text-lg text-center text-white">Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
