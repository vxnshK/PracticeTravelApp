import * as React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

const renderItem = ({item}: any) => {
  return (
    <View style={[styles.card]}>
      <View style={styles.descContainer}>
        <Text style={styles.country}>{item.country}</Text>
        <Text style={styles.city}>{item.city}</Text>
        <View style={styles.reviewContainer}>
          <Text style={styles.reviews}>{item.reviews}</Text>
          <Text style={styles.reviewCount}>{item.reviewCount} reviews</Text>
        </View>
        <View style={styles.seeMore}>
          <Text>See More</Text>
        </View>
      </View>
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
  descContainer: {
    position: 'absolute',
    left: 10,
    bottom: 100,
    zIndex: 10,
    paddingHorizontal: 18,
    paddingVertical: 4.5,
    flex: 1,
    gap: 7,
  },
  city: {
    fontFamily: 'Gotham Bold',
    color: '#fff',
    fontSize: 20,
  },
  country: {
    fontFamily: 'Gotham Book',
    color: '#fff',
    fontSize: 15,
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15
  },
  reviews: {
    fontFamily: 'Gotham Book',
    color: '#fff',
    fontSize: 13,
    borderWidth: 1,
    borderColor: '#7c8891',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 3
  },
  reviewCount: {
    fontFamily: 'Gotham Book',
    color: '#fff',
    fontSize: 13,
    opacity: 0.7,
  },
  seeMore: {},
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
