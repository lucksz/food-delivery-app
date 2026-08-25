import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl font-bold text-blue-600">
        Delivery App
      </Text>

      <Text className="mt-2 text-gray-500">
        Meu primeiro app React Native
      </Text>
    </View>
  );
}