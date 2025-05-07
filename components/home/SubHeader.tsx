import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SubHeader() {
  return (
    <View>
      <Text style={styles.subheading}>Select your next trip</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  subheading: {
    fontSize: 24,
    fontFamily: 'Gotham Medium',
    paddingTop: 30,
    paddingLeft: 20,
    paddingRight: 20,
    letterSpacing: -0.6,
  }
})