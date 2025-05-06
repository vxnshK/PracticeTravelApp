import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const BottomNavbar = () => {
  return (
    <View>
      <View style={styles.bottomNavbarContainer}>
        <Ionicons name="home" size={20} color={'#212528'} />
        <Ionicons name="prism-sharp" size={20} color={'#212528'} />
        <Ionicons name="paper-plane-outline" size={20} color={'#212528'} />
        <Ionicons name="bag-check" size={20} color={'#212528'} />
      </View>
    </View>
  );
};

export default BottomNavbar;

const styles = StyleSheet.create({
  bottomNavbarContainer: {
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
    paddingTop: 16,
    paddingBottom: 30,
    position: 'absolute',
    bottom: 0,
    width: '80%',
  },
});
