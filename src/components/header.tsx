import { View, TextInput, Text } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { useDebounce } from "../lib/hooks";
import { useAppContext } from "../lib/hooks";
import { ProductType } from "../lib/types";
import { useCartContext } from "../lib/hooks";

export default function Header() {
  const [seachQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<ProductType[]>([]);
  const { cartItems } = useCartContext();
  const { products } = useAppContext();
  const debouncedValue = useDebounce(seachQuery);

  useEffect(() => {
    if (debouncedValue && products) {
      const filteredData = products.filter((item) =>
        item.title?.toLowerCase().includes(debouncedValue.toLowerCase())
      );
      setResults(filteredData);
    } else {
      setResults([]);
    }
  }, [debouncedValue, products]);

  return (
    <View className="relative flex flex-col">
      <View className="flex-row items-center justify-between">
        <View className="flex-row justify-between items-center bg-[#e7e7e7] px-4 py-2 rounded-full w-[85%]">
          <TextInput
            value={seachQuery}
            onChangeText={setSearchQuery}
            placeholder="Search your product"
            keyboardType="default"
            className="placeholder:text-lg w-[90%]"
          />
          <Feather name="search" size={24} color="black" />
        </View>
        <View className="relative">
          <View className="bg-[#e7e7e7] p-4 rounded-full">
            <Link href="/cart">
              <Feather name="shopping-bag" size={24} color="black" />
            </Link>
          </View>
          {cartItems.length > 0 && (
            <View className="absolute items-center justify-center w-5 h-5 bg-red-500 rounded-md -top-1 -right-1">
              <Text className="text-xs font-bold text-white">
                {cartItems.length}
              </Text>
            </View>
          )}
        </View>
      </View>
      {results && seachQuery && (
        <View className="absolute z-50 w-full mt-2 space-y-2 top-16 ">
          {results.map((result) => (
            <Link href={`/product/${result.id}`} key={result.id}>
              <View className="w-full h-16 px-4 py-4 bg-white border border-gray-200 shadow-sm rounded-xl">
                <Text className="text-base font-semibold text-black">
                  {result.title}
                </Text>
              </View>
            </Link>
          ))}
        </View>
      )}
    </View>
  );
}
