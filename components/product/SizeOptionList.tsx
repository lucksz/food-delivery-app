import type { MenuItemSizeOption } from '@/types/menu';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  sizes: MenuItemSizeOption[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function SizeOptionList({ sizes, selectedId, onSelect }: Props) {
  return (
    <View className="bg-white px-4 pt-4 pb-2">
      <Text className="text-base font-bold text-gray-900 mb-3">Escolha o tamanho</Text>

      {sizes.map((size) => {
        const isSelected = size.id === selectedId;
        return (
          <TouchableOpacity
            key={size.id}
            activeOpacity={0.8}
            onPress={() => onSelect(size.id)}
            className={`flex-row items-center justify-between rounded-xl border px-4 py-3 mb-2 ${
              isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'
            }`}
          >
            <View className="flex-row items-center flex-1 pr-3">
              <View
                className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-3 ${
                  isSelected ? 'border-blue-600' : 'border-gray-300'
                }`}
              >
                {isSelected && <View className="w-2.5 h-2.5 rounded-full bg-blue-600" />}
              </View>
              <View className="flex-1">
                <Text className="text-sm font-semibold text-gray-900">{size.label}</Text>
                {size.description && (
                  <Text className="text-xs text-gray-500 mt-0.5">{size.description}</Text>
                )}
              </View>
            </View>
            <Text className="text-sm font-bold text-gray-900">{size.price}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
