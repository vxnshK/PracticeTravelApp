import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';

export default function GalleryGrid({gallery}: any) {
  return (
    <FlatList
      data={gallery}
      numColumns={2}
      style={{width: '100%'}}
      renderItem={({item}) => (
        <Image
          source={{uri: item}}
          style={{width: 150, height: 150, margin: 5, borderRadius: 10}}
        />
      )}
      keyExtractor={(item, index) => item + index}
    />
  );
}

const styles = StyleSheet.create({});
