import { useContext } from "react";
import { Text, View, Image, ScrollView, FlatList } from "react-native";
import { AppContext } from "../context/app-context";

export default function Categories() {
  const { categories } = useContext(AppContext);

  return (
    <View className="mt-6">
      <View className="flex-row items-center justify-between ">
        <Text className="text-xl">Categories</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View className="flex-row items-center mt-2 justify-evenly gap-x-4">
          {/* card */}
          <FlatList
            data={categories}
            horizontal={true}
            renderItem={({ item }) => (
              <View className="flex flex-col items-center justify-center p-2">
                <View className="bg-[#e7e7e7] p-4 rounded-full mt-4">
                  <Image
                    source={{
                      uri: item.image,
                    }}
                    width={40}
                    height={40}
                  />
                </View>
                <Text className="text-sm">{item.name}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}
