import React, { useRef } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  type ListRenderItem,
  type FlatList as RNFlatList,
} from 'react-native';

type TPillsProps = {
  continents: string[];
  selectedContinent: string;
  setSelectedContinent: React.Dispatch<React.SetStateAction<string>>;
};

export default function Pills({
  continents,
  selectedContinent,
  setSelectedContinent,
}: TPillsProps) {
  const flatListRef = useRef<RNFlatList<string>>(null);

  const changeContinentHandler = (continent: string, index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: true, viewPosition: 0.5 });
    setSelectedContinent(continent);
  };

  const renderItem: ListRenderItem<string> = ({ item, index }) => (
    <View key={item + index}>
      <Text
        onPress={() => changeContinentHandler(item, index)}
        style={[
          styles.pillItemBase,
          item === selectedContinent && styles.pillItemSelected,
        ]}>
        {item}
      </Text>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={continents}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.contentContainer}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + index}
    />
  );
}

const styles = StyleSheet.create({
  pillsContainer: {
    paddingBottom: 5,
  },
  contentContainer: {
    columnGap: 13.5,
    paddingBottom: 5,
  },
  pillItemBase: {
    backgroundColor: '#FFF',
    paddingTop: 7,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 100,
    fontFamily: 'Gotham Book',
    elevation: 1,
    fontSize: 13.5,
  },
  pillItemSelected: {
    backgroundColor: '#212529',
    color: '#FFF',
    fontFamily: 'Gotham Medium',
  },
});
