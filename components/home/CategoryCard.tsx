import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  emoji?: string;
  name: string;
  isMore?: boolean;
  isSelected?: boolean;
  onPress?: () => void;
}

export default function CategoryCard({ emoji, name, isMore, isSelected, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={onPress}
      style={{
        width: 76,
        shadowColor: '#000',
        shadowOpacity: 0.07,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
      }}
      className={`items-center justify-center h-20 rounded-2xl mx-1.5 ${
        isSelected ? 'bg-blue-50 border-2 border-blue-600' : 'bg-white border border-gray-100'
      }`}
    >
      {isMore ? (
        <View className="w-9 h-9 rounded-full bg-gray-100 items-center justify-center mb-1">
          <Ionicons name="ellipsis-horizontal" size={18} color="#6B7280" />
        </View>
      ) : (
        <Text className="text-2xl mb-1">{emoji}</Text>
      )}
      <Text
        className={`text-xs font-medium text-center leading-tight ${
          isSelected ? 'text-blue-600' : 'text-gray-700'
        }`}
        numberOfLines={1}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
