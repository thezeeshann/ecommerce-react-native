import { Text, View, Image, TouchableOpacity } from "react-native";

export default function Products() {
  return (
    <View className="px-2 mt-6">
      <Text className="mb-2 text-xl">All Products</Text>
      <View className="flex flex-row flex-wrap gap-3">
        {/* card */}
        <View className="w-[48%] rounded-lg">
          <View className="bg-[#e7e7e7] rounded-t-lg p-4">
            <Image
              className="mx-auto"
              source={{
                uri: "https://i.imgur.com/ZANVnHE.jpeg",
              }}
              width={100}
              height={100}
            />
          </View>
          <View className="flex flex-col p-2 bg-white rounded-b-lg">
            <Text className="text-lg text-center">
              Classic High-Waisted Athletic Shorts
            </Text>
            <Text className="text-center">$43</Text>
            <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-2 rounded-md">
              <Text className="text-lg text-center text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-[48%] rounded-lg">
          <View className="bg-[#e7e7e7] rounded-t-lg p-4">
            <Image
              className="mx-auto"
              source={{
                uri: "https://i.imgur.com/ZANVnHE.jpeg",
              }}
              width={100}
              height={100}
            />
          </View>
          <View className="flex flex-col p-2 bg-white rounded-b-lg">
            <Text className="text-lg text-center">
              Classic High-Waisted Athletic Shorts
            </Text>
            <Text className="text-center">$43</Text>
            <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-2 rounded-md">
              <Text className="text-lg text-center text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-[48%] rounded-lg">
          <View className="bg-[#e7e7e7] rounded-t-lg p-4">
            <Image
              className="mx-auto"
              source={{
                uri: "https://i.imgur.com/ZANVnHE.jpeg",
              }}
              width={100}
              height={100}
            />
          </View>
          <View className="flex flex-col p-2 bg-white rounded-b-lg">
            <Text className="text-lg text-center">
              Classic High-Waisted Athletic Shorts
            </Text>
            <Text className="text-center">$43</Text>
            <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-2 rounded-md">
              <Text className="text-lg text-center text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-[48%] rounded-lg">
          <View className="bg-[#e7e7e7] rounded-t-lg p-4">
            <Image
              className="mx-auto"
              source={{
                uri: "https://i.imgur.com/ZANVnHE.jpeg",
              }}
              width={100}
              height={100}
            />
          </View>
          <View className="flex flex-col p-2 bg-white rounded-b-lg">
            <Text className="text-lg text-center">
              Classic High-Waisted Athletic Shorts
            </Text>
            <Text className="text-center">$43</Text>
            <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-2 rounded-md">
              <Text className="text-lg text-center text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-[48%] rounded-lg">
          <View className="bg-[#e7e7e7] rounded-t-lg p-4">
            <Image
              className="mx-auto"
              source={{
                uri: "https://i.imgur.com/ZANVnHE.jpeg",
              }}
              width={100}
              height={100}
            />
          </View>
          <View className="flex flex-col p-2 bg-white rounded-b-lg">
            <Text className="text-lg text-center">
              Classic High-Waisted Athletic Shorts
            </Text>
            <Text className="text-center">$43</Text>
            <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-2 rounded-md">
              <Text className="text-lg text-center text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="w-[48%] rounded-lg">
          <View className="bg-[#e7e7e7] rounded-t-lg p-4">
            <Image
              className="mx-auto"
              source={{
                uri: "https://i.imgur.com/ZANVnHE.jpeg",
              }}
              width={100}
              height={100}
            />
          </View>
          <View className="flex flex-col p-2 bg-white rounded-b-lg">
            <Text className="text-lg text-center">
              Classic High-Waisted Athletic Shorts
            </Text>
            <Text className="text-center">$43</Text>
            <TouchableOpacity className="bg-[#444fc0] px-4 py-4 mt-2 rounded-md">
              <Text className="text-lg text-center text-white">
                Add to Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
