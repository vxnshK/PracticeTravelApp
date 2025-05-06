import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PlaceGallery from './src/screens/PlaceGallery';
import BottomNavbar from './components/home/ui-elements/BottomNavbar';

const RootStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: HomeScreen,
      options: {
        headerShown: false,
      },
    },
    PlaceGallery: PlaceGallery,
    Settings: SettingsScreen,
  },
});
const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1, backgroundColor: '#ffffff'}}>
        <Navigation />
        <BottomNavbar />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
