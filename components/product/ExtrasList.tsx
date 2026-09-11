import type { MenuItemExtra } from '@/types/menu';
import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  extras: MenuItemExtra[];
  selectedIds: string[];
  onToggle: (id: string) => void;
}

export default function ExtrasList({ extras, selectedIds, onToggle }: Props) {
  return (
    <View className="bg-white px-4 pt-4 pb-2">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-base font-bold text-gray-900">Adicionais</Text>
        <Text className="text-xs text-gray-400">Opcional</Text>
      </View>

      {extras.map((extra) => {
        const isSelected = selectedIds.includes(extra.id);
        return (
          <TouchableOpacity
            key={extra.id}
            activeOpacity={0.7}
            onPress={() => onToggle(extra.id)}
            className="flex-row items-center justify-between py-2.5 border-b border-gray-50"
          >
            <View className="flex-row items-center flex-1 pr-3">
              <View
                className={`w-5 h-5 rounded-md border-2 items-center justify-center mr-3 ${
                  isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-300'
                }`}
              >
                {isSelected && <Ionicons name="checkmark" size={14} color="#fff" />}
              </View>
              <Text className="text-sm text-gray-800 flex-1">{extra.label}</Text>
            </View>
            <Text className="text-sm text-gray-600">{extra.price}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
