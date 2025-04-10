import { View, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";

export default function Header() {
  return (
    <View className="flex-row items-center justify-between">
      <View className="flex flex-row justify-between items-center bg-[#e7e7e7] px-4 py-2 rounded-full w-[85%]">
        <TextInput
          placeholder="Search your product"
          keyboardType="default"
          className="placeholder:text-lg w-[90%] "
        />
        <Feather name="search" size={24} color="black" />
      </View>
      <View className="bg-[#e7e7e7] p-4 rounded-full ">
        <Link href="/cart">
          <Feather name="shopping-bag" size={24} color="black" />
        </Link>
      </View>
    </View>
  );
}
