import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { router } from "expo-router";
import { useCartContext } from "../lib/hooks";

export default function Cart() {
  const {
    cartItems,
    removeFromCart,
    totalPrice,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCartContext();

  return (
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
      </View>

      {cartItems.length === 0 ? (
        <View className="items-center justify-center flex-1">
          <Text className="text-lg font-bold">Your cart is empty</Text>
        </View>
      ) : (
        <View className="flex-1">
          <FlatList
            className="pt-4"
            data={cartItems}
            keyExtractor={(item) =>
              item?.id?.toString() || Math.random().toString()
            }
            renderItem={({ item }) => {
              if (!item) return null;
              return (
                <View className="flex flex-row items-start justify-between p-2 mb-4 bg-white shadow-md rounded-xl">
                  <View className="p-2">
                    <Image
                      className="rounded-lg"
                      source={{
                        uri:
                          item?.images?.[0] ||
                          "https://via.placeholder.com/100",
                      }}
                      width={100}
                      height={100}
                    />
                  </View>

                  <View className="w-[55%]">
                    <Text className="text-lg font-semibold">{item?.title}</Text>
                    <Text className="mt-2 text-base font-medium text-gray-700">
                      ${item?.price}
                    </Text>

                    <View className="flex flex-row items-center mt-4 gap-x-4">
                      <AntDesign
                        onPress={() => decrementQuantity(item.id)}
                        name="minus"
                        size={20}
                        color="black"
                        className="bg-[#e7e7e7] p-1 rounded-full "
                      />
                      <Text className="text-lg font-medium">
                        {item?.quantity}
                      </Text>
                      <AntDesign
                        onPress={() => incrementQuantity(item.id)}
                        name="plus"
                        size={20}
                        color="black"
                        className="bg-[#e7e7e7] p-1 rounded-full "
                      />
                    </View>
                  </View>

                  <TouchableOpacity onPress={() => removeFromCart(item)}>
                    <Entypo name="cross" size={24} color="black" />
                  </TouchableOpacity>
                </View>
              );
            }}
          />

          {/* Checkout Section - Only shown when cart has items */}
          <View className="mt-4 mb-8">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-2xl w-[80%]">Sub Total</Text>
              <Text className="text-lg w-[20%]">${totalPrice}</Text>
            </View>
            <TouchableOpacity
              onPress={clearCart}
              className="bg-[#444fc0] px-4 py-4 mt-6 rounded-md"
            >
              <Text className="text-lg text-center text-white">Checkout</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
