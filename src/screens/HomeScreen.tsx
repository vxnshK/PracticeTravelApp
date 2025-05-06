import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/home/ui-elements/Header';
import SearchInput from '../../components/home/ui-elements/SearchInput';
import SubHeader from '../../components/home/ui-elements/SubHeader';
import Carousel from '../../components/home/ui-elements/Carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import FadeWrapper from '../Wrappers/FadeWrapper';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function HomeScreen() {
  return (
    <FadeWrapper>
      <SafeAreaView style={styles.container}>
        <Header />
        <SearchInput />
        <SubHeader />
        <Carousel />
        <View
          style={{
            elevation: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 40,
            paddingTop: 16,
            paddingBottom: 30,
            position: 'absolute',
            bottom: 0,
            width: '80%',
          }}>
          <Ionicons name="home" size={20} color={'#212528'} />
          <Ionicons name="prism-sharp" size={20} color={'#212528'} />
          <Ionicons name="paper-plane-outline" size={20} color={'#212528'} />
          <Ionicons name="bag-check" size={20} color={'#212528'} />
        </View>
      </SafeAreaView>
    </FadeWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
});
