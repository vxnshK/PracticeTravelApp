import React from 'react'
import { StyleSheet } from 'react-native'
import Header from '../../components/home/ui-elements/Header'
import SearchInput from '../../components/home/ui-elements/SearchInput'
import SubHeader from '../../components/home/ui-elements/SubHeader'
import Carousel from '../../components/home/ui-elements/Carousel'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchInput />
      <SubHeader />
      <Carousel />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  },
})
