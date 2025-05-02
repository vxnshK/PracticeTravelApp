import {StyleSheet, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import Pills from './Pills';
import DB from '../../../data/db.json';
import CarouselCard from './CarouselCard';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

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
      <GestureHandlerRootView style={styles.container}>
        <CarouselCard />
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 30,
    marginTop: 10
  },
});
