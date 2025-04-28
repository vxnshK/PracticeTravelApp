import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ICarouselInstance } from "react-native-reanimated-carousel";
import Carousel from "react-native-reanimated-carousel";

const defaultDataWith6Colors = [
  "#B0604D",
  "#899F9C",
  "#B3C680",
  "#5C6265",
  "#F5D399",
  "#F1F1F1",
];

const renderItem = ({ item }: { item: string }) => {
  return (
    <View style={[styles.card, { backgroundColor: item }]}>
      <Text style={styles.text}>{item}</Text>
    </View>
  );
};

function CarouselCard() {
  const ref = React.useRef<ICarouselInstance>(null);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        autoPlayInterval={2000}
        data={defaultDataWith6Colors}
        height={220}
        loop={true}
        pagingEnabled={true}
        snapEnabled={true}
        width={430 * 0.75}
        style={styles.carousel}
        mode={"horizontal-stack"}
        modeConfig={{
          snapDirection: "left",
          stackInterval: 18,
        }}
        customConfig={{ type: "positive", viewCount: 5 }} // Removed the function call
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  carousel: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CarouselCard;
