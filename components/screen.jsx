import { SafeAreaView } from "react-native-safe-area-context";

const AppScreen = ({ children }) => {
  return <SafeAreaView className="w-full h-full px-8">{children}</SafeAreaView>;
};

export default AppScreen;
