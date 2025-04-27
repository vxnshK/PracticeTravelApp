import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TPillsProps = {
  continents: string[]
}

export default function Pills({ continents }: TPillsProps) {
  return (
    <ScrollView
      horizontal={true}
      style={styles.pillsContainer}
      contentContainerStyle={styles.contentContainer}
    >
      {continents.map((c,i) => 
        <Text style={styles.pillItem} key={c+i}>{c}</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pillsContainer: {
    paddingBottom: 5,
  },
  contentContainer: {
    columnGap: 12
  },
  pillItem: {
    backgroundColor: '#FFF',
    paddingTop: 7,
    paddingBottom: 8,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 100,
    fontFamily: 'Gotham Book',
    elevation: 1,
    fontSize: 13.5,
  }
})