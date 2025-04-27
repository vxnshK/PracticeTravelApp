import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/home/ui-elements/Header'
import SearchInput from './components/home/ui-elements/SearchInput'
import { StyleSheet } from 'react-native'
import SubHeader from './components/home/ui-elements/SubHeader'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.layoutContainer}>
        <Header />
        <SearchInput />
        <SubHeader />
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    backgroundColor: '#F4F6F8',
  }
})