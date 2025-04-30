import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FadeWrapper from '../Wrappers/FadeWrapper';

export default function SettingsScreen() {
  return (
    <FadeWrapper>
      <View style={styles.container}>
        <Text>Settings Screen</Text>
      </View>
    </FadeWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
