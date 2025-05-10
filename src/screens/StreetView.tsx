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
        radius: 50,
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  streetView: {
    width: '80%',
    height: '80%',
  },
});

export default YourComponent;
