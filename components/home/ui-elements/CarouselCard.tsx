import * as React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

const renderItem = ({item}: any) => {
  return (
    <View style={[styles.card]}>
      <Text style={styles.city}>{item.city}</Text>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{uri: item.gallery[0], cache: 'force-cache'}}
          style={styles.image}>
          <LinearGradient
            colors={['#00000000', '#000000']}
            style={{height: '100%', width: '100%'}}
          />
        </ImageBackground>
      </View>
    </View>
  );
};

function CarouselCard({carouselCountries}: any) {
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        autoPlay={true}
        autoPlayInterval={4000}
        data={carouselCountries}
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
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
    marginTop: 10,
  },
  carousel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 10,
    position: 'relative',
  },
  city: {
    fontFamily: 'Gotham Bold',
    position: 'absolute',
    left: 10,
    bottom: 100,
    zIndex: 10,
    color: '#fff',
    fontSize: 20,
    paddingHorizontal: 18,
    paddingVertical: 4.5,
    borderRadius: 9,
  },
  imageContainer: {
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  image: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 20,
  },
});

export default CarouselCard;
