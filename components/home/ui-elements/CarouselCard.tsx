import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import Carousel from 'react-native-reanimated-carousel';

const defaultDataWith6Colors = [
  '#1B2A49',
  // '#2C3E63',
  // '#3D5280',
  // '#4F679E',
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

  return (
    <>
      <GestureHandlerRootView style={styles.container}>
        <Carousel
          ref={ref}
          style={styles.carousel}
          autoPlay={true}
          autoPlayInterval={4000}
          data={defaultDataWith6Colors}
          height={520}
          width={430 * 0.75}
          pagingEnabled={true}
          snapEnabled={true}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 95,
          }}
          renderItem={renderItem}
          onConfigurePanGesture={gestureChain => (
            gestureChain.activeOffsetX([-10, 10]).activeOffsetY([-10, 10])
          )}
        />
      </GestureHandlerRootView>
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
