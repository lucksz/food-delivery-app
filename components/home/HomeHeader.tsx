import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

export default function HomeHeader() {
  return (
    <View className="flex-row items-center justify-between px-4 pt-2 pb-4">
      <View className="flex-row items-center flex-1 mr-4">
        <Ionicons name="location" size={20} color="#2563EB" />
        <View className="ml-2 flex-1">
          <Text className="text-xs text-gray-500">Entregar em</Text>
          <TouchableOpacity activeOpacity={0.7} className="flex-row items-center">
            <Text
              className="text-sm font-bold text-gray-900 flex-shrink"
              numberOfLines={1}
            >
              Av. Paulista, 1000 – Bela Vista
            </Text>
            <Ionicons name="chevron-down" size={16} color="#374151" style={{ marginLeft: 2 }} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity activeOpacity={0.7} className="relative p-1">
        <Ionicons name="notifications-outline" size={26} color="#374151" />
        <View className="absolute top-0.5 right-0.5 w-2.5 h-2.5 rounded-full bg-blue-600 border-2 border-white" />
      </TouchableOpacity>
    </View>
  );
}
