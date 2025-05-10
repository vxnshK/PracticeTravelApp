import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';

import Ionicons from '@react-native-vector-icons/ionicons';
import GalleryGrid from '../../components/placeGallery/GalleryGrid';
import {ScrollView} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function PlaceGallery({route}: any) {
  const {item} = route.params;
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.placeGalleryContainer}>
      <Ionicons
        style={styles.seeMoreChevronBackIcon}
        name="chevron-back-circle"
        size={40}
        color={'#ffffff'}
        onPress={() => {
          navigation.goBack()
        }}
      />

      <Ionicons
        style={styles.navigateIcon}
        name="navigate"
        size={13}
        color={'#ffffff'}
        onPress={() => {
          // @ts-ignore
          navigation.navigate('StreetView')
        }}
      />

      <Image source={{uri: item.gallery[0]}} style={styles.image} />
      <ScrollView style={styles.dataContainer}>
        <View style={styles.ratingCityContainer}>
          <Text style={styles.city}>{item.city}</Text>
          <View style={styles.ratingsContainer}>
            <Ionicons name="star-sharp" size={16} color={'#f29d0a'} />
            <Text style={styles.ratings}>{item.ratings}</Text>
          </View>
        </View>

        <View style={styles.countryFlagReviewsCountContainer}>
          <View style={styles.countryFlagContainer}>
            <Text>{item.flag}</Text>
            <Text style={styles.country}>{item.country}</Text>
          </View>
          <Text style={styles.reviewCount}>{item.reviewCount} reviews</Text>
        </View>

        <Text style={styles.description}>{item.description}</Text>

        <GalleryGrid gallery={item.gallery} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  placeGalleryContainer: {
    backgroundColor: '#fff',
  },
  seeMoreChevronBackIcon: {
    position: 'absolute',
    left: 15,
    top: 30,
    zIndex: 10,
  },
  navigateIcon: {
    position: 'absolute',
    right: 15,
    top: 30,
    zIndex: 10,
    backgroundColor: '#212529',
    padding: 10,
    borderRadius: 100
  },
  image: {
    height: 450,
    width: '100%',
    position: 'absolute',
    top: -100,
  },
  dataContainer: {
    marginTop: 250,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 28,
    paddingTop: 40,
    paddingBottom: 500,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  ratingCityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  city: {
    fontFamily: 'Gotham Bold',
    fontSize: 20,
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
    fontSize: 12,
  },
  countryFlagReviewsCountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 26,
  },
  countryFlagContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  country: {
    fontFamily: 'Gotham Medium',
    fontSize: 16,
  },
  reviewCount: {
    fontFamily: 'Gotham Medium',
    fontSize: 13,
    borderBottomWidth: 0.8,
    borderBottomColor: '#212528',
    paddingBottom: 2.4,
    paddingHorizontal: 1,
  },
  description: {
    fontFamily: 'Gotham Book',
    fontSize: 14.5,
    lineHeight: 20,
  },
});
