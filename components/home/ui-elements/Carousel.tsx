import {StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import Pills from './Pills';
import DB from '../../../data/db.json';
import CarouselCard from './CarouselCard';

export default function Carousel() {
  const [selectedContinent, setSelectedContinent] = useState('Europe');

  const continents = useMemo(() => {
    const tempContinentArray = DB.map(place => place.continent);
    const tempContinentSet = new Set(tempContinentArray);
    return Array.from(tempContinentSet);
  }, [DB]);

  const carouselCountries = useMemo(() => {
    if (!selectedContinent) return [];
    const tempcarouselCountries = DB.filter(place => place.continent === selectedContinent);
    return tempcarouselCountries;
  }, [selectedContinent]);


  return (
    <View style={styles.carouselContainer}>
      <Pills
        continents={continents}
        selectedContinent={selectedContinent}
        setSelectedContinent={setSelectedContinent}
      />
      <CarouselCard carouselCountries={carouselCountries} />
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
  }
});
