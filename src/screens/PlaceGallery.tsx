import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

export default function PlaceGallery({route}: any) {
  const {item} = route.params;

  return (
    <View>
      <Image source={{ uri: item.gallery[0] }} style={styles.image} />
      <Text>{item.country}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%',
  }
});
