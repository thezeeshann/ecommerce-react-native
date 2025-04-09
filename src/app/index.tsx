import { StatusBar } from "expo-status-bar";
import Header from "../components/header";
import { SafeAreaView } from "react-native-safe-area-context";
import Categories from "../components/category";
import Products from "../components/products";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <SafeAreaView className="w-full h-full px-4 py-2 ">
      <StatusBar style="auto" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <Categories />
        <Products />
      </ScrollView>
    </SafeAreaView>
  );
}
