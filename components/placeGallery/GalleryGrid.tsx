import React from "react";
import { View, FlatList, Dimensions, StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  useAnimatedStyle,
  withSpring,
  useSharedValue,
} from "react-native-reanimated";
import { Image } from "react-native";

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const imageSize = screenWidth / numColumns;

const GalleryGrid = ({ gallery }: any) => {
  const renderItem = ({ item }: { item: string }) => {
    const scale = useSharedValue(0.8);

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: withSpring(scale.value) }],
    }));

    React.useEffect(() => {
      scale.value = 1;
    }, []);

    return (
      <Animated.View entering={FadeIn.duration(400)} style={[styles.imageWrapper, animatedStyle]}>
        <Image source={{ uri: item }} style={styles.image} />
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={gallery}
      keyExtractor={(item, index) => item + index}
      numColumns={numColumns}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  imageWrapper: {
    width: imageSize,
    height: imageSize,
    padding: 4,
  },
  image: {
    flex: 1,
    borderRadius: 8,
  },
});

export default GalleryGrid;
