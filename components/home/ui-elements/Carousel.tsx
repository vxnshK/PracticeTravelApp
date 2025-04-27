import {StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import Pills from './Pills';
import DB from '../../../data/db.json';

export default function Carousel() {
  const [selectedContinent, setSelectedContinent] = useState('Europe');

  const continents = useMemo(() => {
    const tempContinentArray = DB.map(place => place.continent);
    const tempContinentSet = new Set(tempContinentArray);
    return Array.from(tempContinentSet);
  }, [DB]);

  return (
    <View style={styles.carouselContainer}>
      <Pills
        continents={continents}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />
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
