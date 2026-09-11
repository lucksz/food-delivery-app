import { Text, View } from 'react-native';
import { COVER_IMAGE_HEIGHT } from './RestaurantCoverImage';

interface Props {
  emoji: string;
  backgroundColor: string;
}

const BADGE_SIZE = 72;

export default function RestaurantLogoBadge({ emoji, backgroundColor }: Props) {
  return (
    <View
      style={{
        position: 'absolute',
        // Renderizado após o card branco na árvore para não ficar coberto por ele.
        top: COVER_IMAGE_HEIGHT - BADGE_SIZE / 2,
        left: 16,
        width: BADGE_SIZE,
        height: BADGE_SIZE,
        borderRadius: 16,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#fff',
      }}
    >
      <Text style={{ fontSize: 32 }}>{emoji}</Text>
    </View>
  );
}
