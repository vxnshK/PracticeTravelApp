import React from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {createStaticNavigation, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

import Ionicons from '@react-native-vector-icons/ionicons';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import PlaceGallery from './src/screens/PlaceGallery';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    PlaceGallery: PlaceGallery,
    Settings: SettingsScreen
  }
});
const Navigation = createStaticNavigation(RootStack);

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{flex: 1, backgroundColor: '#ffffff'}}>
        {/* <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarStyle: {
                borderRadius: 100,
                backgroundColor: '#212528',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 25,
                width: '90%',
                paddingHorizontal: 9,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 0,
                height: 50,
              },
              tabBarButton: ({onPress, children, accessibilityState}) => {
                const isSelected = accessibilityState?.selected;

                return (
                  <TouchableWithoutFeedback
                    style={{justifyContent: 'center'}}
                    onPress={onPress}>
                    <View
                      style={{
                        backgroundColor: isSelected ? '#ffffff' : '#212528',
                        borderRadius: 100,
                        padding: 8,
                        alignItems: 'center',
                      }}>
                      {children}
                    </View>
                  </TouchableWithoutFeedback>
                );
              },
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <Ionicons
                    name="home-sharp"
                    size={20}
                    color={focused ? '#212528' : '#ffffff'}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({focused}) => (
                  <Ionicons
                    name="settings-sharp"
                    size={20}
                    color={focused ? '#212528' : '#ffffff'}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer> */}
        <Navigation />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
