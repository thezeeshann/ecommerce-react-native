import { Text, View, Image, ScrollView } from "react-native";

export default function Categories() {
  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between ">
        <Text className="text-xl">Categories</Text>
        <Text className="text-[#444fc0] text-lg">See all</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View className="flex-row items-center mt-2 justify-evenly gap-x-4">
          {/* card */}
          <View className="flex flex-col items-center justify-center">
            <View className="bg-[#e7e7e7] p-4 rounded-full mt-4">
              <Image
                source={{
                  uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                }}
                width={40}
                height={40}
              />
            </View>
            <Text className="text-lg ">T-shirt</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-[#e7e7e7] p-4 rounded-full mt-4">
              <Image
                source={{
                  uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                }}
                width={40}
                height={40}
              />
            </View>
            <Text className="text-lg ">T-shirt</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-[#e7e7e7] p-4 rounded-full mt-4">
              <Image
                source={{
                  uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                }}
                width={40}
                height={40}
              />
            </View>
            <Text className="text-lg ">T-shirt</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-[#e7e7e7] p-4 rounded-full mt-4">
              <Image
                source={{
                  uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                }}
                width={40}
                height={40}
              />
            </View>
            <Text className="text-lg ">T-shirt</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-[#e7e7e7] p-4 rounded-full mt-4">
              <Image
                source={{
                  uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                }}
                width={40}
                height={40}
              />
            </View>
            <Text className="text-lg ">T-shirt</Text>
          </View>
          <View className="flex flex-col items-center justify-center">
            <View className="bg-[#e7e7e7] p-4 rounded-full mt-4">
              <Image
                source={{
                  uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                }}
                width={40}
                height={40}
              />
            </View>
            <Text className="text-lg ">T-shirt</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
