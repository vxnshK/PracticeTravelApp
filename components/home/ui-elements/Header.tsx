import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.greetingText}>Hello, Vansh</Text>
        <Text style={styles.welcomeText}>Welcome to WayzGo</Text>
      </View>

      <View>
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={{width: 55, height: 55, borderRadius: 50}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  greetingText: {
    fontFamily: 'Gotham Medium',
    fontSize: 30,
    letterSpacing: -1.5,
  },
  welcomeText: {
    fontFamily: 'Gotham Book',
    marginTop: 8,
  },
});
