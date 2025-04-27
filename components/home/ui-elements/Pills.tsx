import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TPillsProps = {
  continents: string[]
}

export default function Pills({ continents }: TPillsProps) {
  return (
    <ScrollView horizontal={false} style={styles.pillsContainer}>
      {continents.map((c,i) => 
        <Text style={styles.pillItem} key={c+i}>{c}</Text>
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  pillsContainer: {
    height: 500
  },
  pillItem: {
    marginLeft: 10,
    marginRight: 10
  }
})