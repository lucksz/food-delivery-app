import { Text, View } from 'react-native';

interface Props {
  label: string;
  backgroundColor: string;
  textColor: string;
}

export default function Badge({ label, backgroundColor, textColor }: Props) {
  return (
    <View
      style={{ backgroundColor }}
      className="self-start rounded-full px-3 py-1"
    >
      <Text style={{ color: textColor }} className="text-xs font-medium">
        {label}
      </Text>
    </View>
  );
}
