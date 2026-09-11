import { Text, TextInput, View } from 'react-native';

const MAX_LENGTH = 120;

interface Props {
  value: string;
  onChangeText: (value: string) => void;
}

export default function ObservationsInput({ value, onChangeText }: Props) {
  return (
    <View className="bg-white px-4 pt-4 pb-4">
      <Text className="text-base font-bold text-gray-900 mb-3">Observações</Text>

      <TextInput
        value={value}
        onChangeText={(text) => onChangeText(text.slice(0, MAX_LENGTH))}
        placeholder="Ex.: Sem cebola, molho à parte..."
        placeholderTextColor="#9CA3AF"
        multiline
        maxLength={MAX_LENGTH}
        className="rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800"
        style={{ minHeight: 90, textAlignVertical: 'top' }}
      />
      <Text className="text-xs text-gray-400 text-right mt-1">
        {value.length}/{MAX_LENGTH}
      </Text>
    </View>
  );
}
