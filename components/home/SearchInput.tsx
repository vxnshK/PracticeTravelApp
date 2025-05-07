import {Image, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

export default function SearchInput() {
  return (
    <View style={styles.searchContainer}>
      <Image source={require('../../assets/icons/search.png')} style={styles.searchIcon} />
      <TextInput placeholder="Search" style={styles.searchInput} />
      <View style={styles.filterIconContainer}>
        <Image source={require('../../assets/icons/filter.png')} style={styles.filterIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 14,
    // paddingRight: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 2,
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 5,
  },
  searchInput: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
    fontFamily: 'Gotham Book',
  },
  filterIconContainer: {
    backgroundColor: '#000',
    padding: 7,
    borderRadius: 50
  },
  filterIcon: {
    width: 22,
    height: 22,
  },
});
