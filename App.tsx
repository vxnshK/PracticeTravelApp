import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableWithoutFeedback, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarShowLabel: false,
              tabBarActiveTintColor: '#212528',
              tabBarInactiveTintColor: 'gray',
              tabBarInactiveBackgroundColor: '#212528',
              tabBarStyle: {
                borderRadius: 100,
                backgroundColor: '#212528',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: 30,
                width: '90%',
                height: 70,
              },
              tabBarLabelStyle: {
                fontSize: 14,
                fontWeight: '600',
                fontFamily: 'Gotham Medium',
              },
              tabBarButton: ({ onPress, children, accessibilityState }) => {
                const isSelected = accessibilityState?.selected;
              
                return (
                  <TouchableWithoutFeedback onPress={onPress}>
                    <View
                      style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: isSelected ? '#ffffff' : '#212528',
                        borderRadius: 100,
                        padding: 10,
                      }}
                    >
                      {children}
                    </View>
                  </TouchableWithoutFeedback>
                );
              },              
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <></>
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <></>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

export default App;
