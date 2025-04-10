import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Cart() {
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

        <View className=" pt-14">
          {/* cart */}
          <View className="flex flex-row items-start justify-between p-2 bg-white shadow-md">
            <View className="p-2 rounded-t-lg ">
              <Image
                className="mx-auto"
                source={{
                  uri: "https://i.imgur.com/ZANVnHE.jpeg",
                }}
                width={150}
                height={150}
              />
            </View>
            <View className="w-[50%]">
              <Text className="text-lg ">Classic High-Waisted</Text>
              <Text className="mt-4 text-lg">$43</Text>
              <View className="flex flex-row text-center mt-4 items-center gap-x-4 justify-between w-[40%]">
                <AntDesign
                  name="plus"
                  size={24}
                  color="black"
                  className=" bg-[#e7e7e7] p-2 rounded-full"
                />
                <Text className="text-lg">2</Text>
                <AntDesign
                  name="minus"
                  size={24}
                  color="black"
                  className=" bg-[#e7e7e7] p-2 rounded-full"
                />
              </View>
            </View>
            <Entypo className="w-[10%]" name="cross" size={24} color="black" />
          </View>
        </View>

        <View className="mt-20">
          <View className="flex flex-row items-center justify-between mt-4">
            <Text className="text-2xl w-[80%] ">Sub Total</Text>
            <Text className="text-lg">$50</Text>
          </View>
          <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-6 rounded-md">
            <Text className="text-lg text-center text-white">Checkout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
