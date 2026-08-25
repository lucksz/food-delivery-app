import { Ionicons } from '@expo/vector-icons';
import { TextInput, TouchableOpacity, View } from 'react-native';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  onFilterPress?: () => void;
}

export default function SearchBar({ value, onChangeText, onFilterPress }: Props) {
  return (
    <View className="flex-row items-center mx-4 mb-5 bg-white border border-gray-200 rounded-full px-4 py-3 shadow-sm">
      <Ionicons name="search-outline" size={20} color="#9CA3AF" />
      <TextInput
        className="flex-1 mx-3 text-gray-700 text-sm"
        placeholder="Buscar restaurantes"
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        returnKeyType="search"
      />
      <TouchableOpacity activeOpacity={0.7} onPress={onFilterPress}>
        <Ionicons name="options-outline" size={22} color="#374151" />
      </TouchableOpacity>
    </View>
  );
}
