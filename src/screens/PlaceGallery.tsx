import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function PlaceGallery({route}: any) {
  const {item} = route.params;

  return (
    <SafeAreaView>
      <Image source={{uri: item.gallery[0]}} style={styles.image} />
      <ScrollView style={styles.dataContainer}>
        <Text style={styles.city}>{item.city}</Text>
        <View style={styles.countryFlagContainer}>
          <Text>{item.flag}</Text>
          <Text style={styles.country}>{item.country}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
    position: 'absolute',
    top: -100,
  },
  dataContainer: {
    position: 'absolute',
    top: 100,
    width: '100%',
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 100,
    gap: 10,
  },
  city: {
    fontFamily: 'Gotham Bold',
    fontSize: 20,
    marginBottom: 5,
  },
  countryFlagContainer: {
    flexDirection: 'row',
    gap: 5,
  },
  country: {
    fontFamily: 'Gotham Book',
    fontSize: 15,
  },
});
