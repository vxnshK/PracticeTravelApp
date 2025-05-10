// @ts-ignore
import StreetView from 'react-native-streetview';
import { View, StyleSheet } from 'react-native';

const YourComponent = () => (
  <View style={styles.container}>
    <StreetView
      style={styles.streetView}
      allGesturesEnabled={true}
      coordinate={{
        latitude: 37.7749,
        longitude: -122.4194,
        radius: 50, // Search radius in meters
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Optional, to prevent white flash behind map
    justifyContent: 'center',
    alignItems: 'center',
  },
  streetView: {
    width: '100%',
    height: '100%',
  },
});

export default YourComponent;
