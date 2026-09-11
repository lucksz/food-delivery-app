import { Ionicons } from '@expo/vector-icons';
import { Text, TouchableOpacity, View } from 'react-native';

interface Props {
  quantity: number;
  totalPrice: string;
  onDecrease: () => void;
  onIncrease: () => void;
  onAddToCart: () => void;
}

export default function ProductFooterBar({
  quantity,
  totalPrice,
  onDecrease,
  onIncrease,
  onAddToCart,
}: Props) {
  return (
    <View className="flex-row items-center gap-3 bg-white px-4 py-3 border-t border-gray-100">
      <View className="flex-row items-center bg-gray-100 rounded-xl px-1">
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onDecrease}
          disabled={quantity <= 1}
          className="w-9 h-9 items-center justify-center"
        >
          <Ionicons name="remove" size={18} color={quantity <= 1 ? '#D1D5DB' : '#374151'} />
        </TouchableOpacity>
        <Text className="text-base font-bold text-gray-900 w-6 text-center">{quantity}</Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onIncrease}
          className="w-9 h-9 items-center justify-center"
        >
          <Ionicons name="add" size={18} color="#374151" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={0.85}
        onPress={onAddToCart}
        className="flex-1 flex-row items-center justify-between bg-blue-600 rounded-xl px-5 py-4"
      >
        <Text className="text-white font-semibold text-base">Adicionar ao carrinho</Text>
        <Text className="text-white font-bold text-base">{totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
}
