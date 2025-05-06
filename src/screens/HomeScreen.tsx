import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/home/ui-elements/Header';
import SearchInput from '../../components/home/ui-elements/SearchInput';
import SubHeader from '../../components/home/ui-elements/SubHeader';
import Carousel from '../../components/home/ui-elements/Carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import FadeWrapper from '../Wrappers/FadeWrapper';

export default function HomeScreen() {
  return (
    <FadeWrapper>
      <SafeAreaView style={styles.container}>
        <Header />
        <SearchInput />
        <SubHeader />
        <Carousel />
      </SafeAreaView>
    </FadeWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
    position: 'absolute'
  },
});
