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
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    paddingBottom: 120
  },
  row: {
    margin: 5
  },
  image: {
    width: 165,
    height: 165,
    borderRadius: 10,
  },
});
