import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function GalleryGrid({gallery}: any) {
  const rows = [];
  for (let i = 0; i < gallery.length; i += 2) {
    rows.push(gallery.slice(i, i + 2));
  }

  return (
    <View style={styles.galleryGridContainer}>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, colIndex) => (
            <Image
              key={item + colIndex}
              source={{uri: item}}
              style={styles.image}
            />
          ))}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
