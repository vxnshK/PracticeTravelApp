import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

export default function PlaceGallery() {
  
  return (
    <View>
      {/* resize into this image */}
      <Image
        source={{ uri: 'https://picsum.photos/id/39/200' }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})