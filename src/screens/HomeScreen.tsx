import React from 'react'
import { View, StyleSheet } from 'react-native'
import Header from '../../components/home/ui-elements/Header'
import SearchInput from '../../components/home/ui-elements/SearchInput'
import SubHeader from '../../components/home/ui-elements/SubHeader'
import Carousel from '../../components/home/ui-elements/Carousel'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchInput />
      <SubHeader />
      <Carousel />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
})
