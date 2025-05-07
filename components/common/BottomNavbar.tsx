import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

const BottomNavbar = () => {
  return (
    <View>
      <View style={styles.bottomNavbarContainer}>
        <Ionicons name="home" size={20} color={'#fff'} />
        <Ionicons name="prism-sharp" size={20} color={'#fff'} />
        <Ionicons name="paper-plane" size={20} color={'#fff'} />
        <Ionicons name="bag-check" size={20} color={'#fff'} />
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
    paddingVertical: 18,
    position: 'absolute',
    bottom: 0,
    width: '88%',
    backgroundColor: '#212528',
    borderRadius: 100,
    marginBottom: 25,
    marginHorizontal: '6%'
  },
});
