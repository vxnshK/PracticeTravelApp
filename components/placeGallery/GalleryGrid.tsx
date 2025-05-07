import React from "react";
import { View, Image, Dimensions, StyleSheet, ScrollView } from "react-native";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / numColumns;

const GalleryGrid = ({ gallery }: { gallery: string[] }) => {
  return (
    <ScrollView style={styles.grid}>
      {gallery.map((uri, index) => (
        <View key={index} style={styles.imageWrapper}>
          <Image source={{ uri }} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 16,
  },
  imageWrapper: {
    width: imageSize,
    height: imageSize,
    padding: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    resizeMode: "cover",
  },
});

export default GalleryGrid;
