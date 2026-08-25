import AppButton from '@/components/common/AppButton';
import type { Banner } from '@/types/banner';
import { Image } from 'expo-image';
import { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Text,
    View,
} from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH - 32;
const CARD_HEIGHT = 160;

interface Props {
  banners: Banner[];
}

function BannerItem({ banner }: { banner: Banner }) {
  return (
    <View
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        backgroundColor: banner.backgroundColor,
        borderRadius: 16,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
      }}
    >
      <View style={{ flex: 1, paddingRight: 8 }}>
        <Text className="text-white text-xs font-medium mb-1 opacity-90">
          {banner.badge}
        </Text>
        <Text className="text-white text-2xl font-bold leading-tight">
          {banner.title}
        </Text>
        <Text className="text-white text-xs mt-1 mb-3 opacity-90 leading-relaxed">
          {banner.description}
        </Text>
        <AppButton
          label={banner.ctaText}
          variant="secondary"
          size="sm"
          style={{ alignSelf: 'flex-start' }}
        />
      </View>

      <Image
        source={{ uri: banner.image }}
        style={{ width: 140, height: CARD_HEIGHT }}
        contentFit="cover"
      />
    </View>
  );
}

const AUTO_SCROLL_INTERVAL = 4000;

export default function BannerCarousel({ banners }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const isUserScrolling = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isUserScrolling.current) return;
      setActiveIndex((prev) => {
        const next = (prev + 1) % banners.length;
        // scrollToOffset usa o mesmo cálculo do snapToInterval para alinhar corretamente
        flatListRef.current?.scrollToOffset({ offset: next * (CARD_WIDTH + 12), animated: true });
        return next;
      });
    }, AUTO_SCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [banners.length]);

  const handleScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / (CARD_WIDTH + 12));
    setActiveIndex(index);
    isUserScrolling.current = false;
  };

  return (
    <View className="mb-6">
      <FlatList
        ref={flatListRef}
        data={banners}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 12}
        decelerationRate="fast"
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
        onScrollBeginDrag={() => { isUserScrolling.current = true; }}
        onMomentumScrollEnd={handleScrollEnd}
        renderItem={({ item }) => <BannerItem banner={item} />}
      />

      <View className="flex-row justify-center items-center mt-3" style={{ gap: 6 }}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={{
              height: 8,
              borderRadius: 4,
              backgroundColor: index === activeIndex ? '#2563EB' : '#D1D5DB',
              width: index === activeIndex ? 20 : 8,
            }}
          />
        ))}
      </View>
    </View>
  );
}
