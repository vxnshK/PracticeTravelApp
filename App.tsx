import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Header from './components/ui-elements/Header'
import SearchInput from './components/ui-elements/SearchInput'
import { StyleSheet } from 'react-native'

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.layoutContainer}>
        <Header />
        <SearchInput />
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