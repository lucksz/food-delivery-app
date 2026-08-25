import { Ionicons } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OrdersScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50" edges={['top']}>
      <View className="flex-1 items-center justify-center gap-3">
        <Ionicons name="bag" size={48} color="#D1D5DB" />
        <Text className="text-lg font-semibold text-gray-400">Pedidos</Text>
        <Text className="text-sm text-gray-400">Em breve</Text>
      </View>
    </SafeAreaView>
  );
}
