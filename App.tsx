import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import {TouchableWithoutFeedback, View} from 'react-native';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
              fontSize: 14,
              fontWeight: '600',
              fontFamily: 'Gotham Medium',
              marginTop: 15,
            },
            tabBarActiveTintColor: '#007aff',
            tabBarInactiveTintColor: 'gray',
            tabBarIconStyle: {
              display: 'none',
            },
            tabBarButton: props => (
              <TouchableWithoutFeedback onPress={props.onPress}>
                <View style={{flex: 1}}>{props.children}</View>
              </TouchableWithoutFeedback>
            ),
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
