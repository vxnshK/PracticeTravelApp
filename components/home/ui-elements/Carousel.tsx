import {StyleSheet, View} from 'react-native';
import React, { useMemo } from 'react';
import Pills from './Pills';
import DB from '../../../data/db.json'

export default function Carousel() {
  const continents = useMemo(() => {
    const tempContinentArray = DB.map(place => place.continent);
    return tempContinentArray;
    const tempContinentSet = new Set(tempContinentArray);
    return Array.from(tempContinentSet);
  }, [DB]);

  console.log(continents, 'tag continents')

  return (
    <View style={styles.carouselContainer}>
      <Pills continents={continents} />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
