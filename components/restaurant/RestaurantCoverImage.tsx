import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { TouchableOpacity, View } from 'react-native';

export const COVER_IMAGE_HEIGHT = 280;

interface Props {
  image: string;
  isFavorite: boolean;
  onBackPress: () => void;
  onSharePress?: () => void;
  onToggleFavorite: () => void;
}

const CIRCLE_BUTTON_STYLE = {
  width: 36,
  height: 36,
  borderRadius: 18,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  backgroundColor: 'rgba(255,255,255,0.9)',
};

export default function RestaurantCoverImage({
  image,
  isFavorite,
  onBackPress,
  onSharePress,
  onToggleFavorite,
}: Props) {
  return (
    <View style={{ height: 280 }}>
      <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} contentFit="cover" />

      <View
        style={{
          position: 'absolute',
          top: 50,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
          paddingTop: 8,
        }}
      >
        <TouchableOpacity activeOpacity={0.8} onPress={onBackPress} style={CIRCLE_BUTTON_STYLE}>
          <Ionicons name="arrow-back" size={18} color="#374151" />
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', gap: 8 }}>
          <TouchableOpacity activeOpacity={0.8} onPress={onSharePress} style={CIRCLE_BUTTON_STYLE}>
            <Ionicons name="share-outline" size={17} color="#374151" />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={onToggleFavorite} style={CIRCLE_BUTTON_STYLE}>
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={17}
              color={isFavorite ? '#EF4444' : '#374151'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
