import React, {useState} from 'react';
import {Image, StyleSheet, View, ActivityIndicator} from 'react-native';

export default function GalleryGrid({gallery}: {gallery: string[]}) {
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    Array(gallery.length).fill(true),
  );

  const handleLoadStart = (index: number) => {
    const newLoading = [...loadingStates];
    newLoading[index] = true;
    setLoadingStates(newLoading);
  };

  const handleLoadEnd = (index: number) => {
    const newLoading = [...loadingStates];
    newLoading[index] = false;
    setLoadingStates(newLoading);
  };

  return (
    <View style={styles.galleryGridContainer}>
      {gallery.map((item: string, index: number) => (
        <View key={item + index} style={styles.row}>
          {loadingStates[index] && (
            <View style={styles.loader}>
              <ActivityIndicator size="small" color="#000" />
            </View>
          )}
          <Image
            source={{uri: item, cache: 'force-cache'}}
            style={styles.image}
            onLoadStart={() => handleLoadStart(index)}
            onLoadEnd={() => handleLoadEnd(index)}
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
    paddingBottom: 120,
  },
  row: {
    margin: 5,
    position: 'relative',
  },
  image: {
    width: 165,
    height: 165,
    borderRadius: 10,
  },
  loader: {
    position: 'absolute',
    width: 165,
    height: 165,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});
