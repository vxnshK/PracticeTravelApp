import * as React from 'react';
import {View, Text, StyleSheet, ImageBackground, Pressable} from 'react-native';
import {ICarouselInstance} from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

const renderItem = ({item}: any) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.card]}>
      <Ionicons style={styles.isFav} name="heart-sharp" size={25} color={'#ffffff'} />

      <View style={styles.descContainer}>
        <Text style={styles.country}>{item.country}</Text>

        <Text style={styles.city}>{item.city}</Text>

        <View style={styles.ratingReviewContainer}>
          <View style={styles.ratingsContainer}>
            <Ionicons name="star-sharp" size={16} color={'#f29d0a'} />
            <Text style={styles.ratings}>{item.ratings}</Text>
          </View>
          <Text style={styles.reviewCount}>{item.reviewCount} reviews</Text>
        </View>

        <Pressable style={{ width: '100%' }} onPress={() => navigation.navigate('Settings')}>
          <View style={styles.seeMoreContainer}>
            <Text style={styles.seeMoreText}>See More</Text>
            <Ionicons
              style={styles.seeMoreChevronForwardIcon}
              name="chevron-forward-circle"
              size={45}
              color={'#ffffff'}
            />
          </View>
        </Pressable>
      </View>

      <View style={styles.imageContainer}>
        <ImageBackground
          source={{uri: item.gallery[1], cache: 'force-cache'}}
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
        width={420 * 0.75}
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
  isFav: {
    position: 'absolute',
    right: 20,
    top: 20,
    zIndex: 10,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 100,
    padding: 5,
  },
  descContainer: {
    position: 'absolute',
    left: 10,
    bottom: 20,
    zIndex: 10,
    paddingHorizontal: 18,
    flex: 1,
    gap: 8,
    width: '95%',
  },
  city: {
    fontFamily: 'Gotham Bold',
    color: '#fff',
    fontSize: 20,
    marginBottom: 5,
  },
  country: {
    fontFamily: 'Gotham Book',
    color: '#fff',
    fontSize: 15,
  },
  ratingReviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  ratingsContainer: {
    borderWidth: 1,
    borderColor: '#7c8891',
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingTop: 4,
    paddingBottom: 4.4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratings: {
    fontFamily: 'Gotham Book',
    color: '#fff',
    fontSize: 12,
  },
  reviewCount: {
    fontFamily: 'Gotham Book',
    color: '#fff',
    fontSize: 13,
    opacity: 0.7,
    borderBottomWidth: 0.58,
    borderBottomColor: '#fff',
    paddingBottom: 2.4,
    paddingHorizontal: 4,
  },
  seeMoreContainer: {
    paddingTop: 15,
    paddingBottom: 15.4,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#ffffff20',
    borderRadius: 100,
    marginTop: 10,
    position: 'relative',
  },
  seeMoreText: {
    fontFamily: 'Gotham Medium',
    color: '#fff',
    fontSize: 13.5,
    opacity: 0.7,
    letterSpacing: -0.4,
  },
  seeMoreChevronForwardIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
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
