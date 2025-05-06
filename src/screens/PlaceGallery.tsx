import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated from 'react-native-reanimated'

export default function PlaceGallery() {
  return (
    <View>
      <Animated.Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 100, height: 100 }}
        sharedTransitionTag="tag"
      />
    </View>
  )
}

const styles = StyleSheet.create({})