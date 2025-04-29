import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {useSharedValue} from 'react-native-reanimated';
import {ICarouselInstance, Pagination} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

const defaultDataWith6Colors = [
  '#1B2A49',
  '#2C3E63',
  '#3D5280',
  '#4F679E',
  '#628BBA',
  '#76AFD6',
];

const renderItem = ({item}: {item: string}) => {
  return (
    <View style={[styles.card, {backgroundColor: item}]}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

function CarouselCard() {
  const ref = React.useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <Carousel
          ref={ref}
          autoPlay={true}
          autoPlayInterval={4500}
          data={defaultDataWith6Colors}
          height={520}
          width={430 * 0.75}
          style={styles.carousel}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 95,
          }}
          renderItem={renderItem}
          onProgressChange={progress}
          onConfigurePanGesture={() => {

          }}
        />
      </GestureHandlerRootView>

      <Pagination.Basic
        progress={progress}
        data={defaultDataWith6Colors}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 248,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CarouselCard;
