import React from "react";
import { Text, TouchableOpacity } from "react-native";

function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      className={`${
        color ? color : "bg-blue-500"
      } rounded-md flex justify-center items-center py-3 my-2`}
      onPress={onPress}
    >
      <Text
        className={`${
          color ? "text-black" : "text-white"
        } text-lg font-semibold`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default AppButton;
