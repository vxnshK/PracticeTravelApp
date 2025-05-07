import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function GalleryGrid({gallery}: any) {
  return (
    <View style={styles.galleryGridContainer}>
      {gallery.map((item: string, rowIndex: number) => (
        <View key={rowIndex} style={styles.row}>
          <Image
            key={item + rowIndex}
            source={{uri: item}}
            style={styles.image}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  galleryGridContainer: {
    marginTop: 40,
  },
  row: {
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 10,
  },
});
