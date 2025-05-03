import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableWithoutFeedback, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from '@react-native-vector-icons/ionicons';

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
                paddingHorizontal: 20,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 0
              },
              tabBarButton: ({ onPress, children, accessibilityState }) => {
                const isSelected = accessibilityState?.selected;
              
                return (
                  <TouchableWithoutFeedback style={{ justifyContent: 'center', }} onPress={onPress}>
                    <View
                      style={{
                        backgroundColor: isSelected ? '#ffffff' : '#212528',
                        borderRadius: 100,
                        padding: 10,
                        alignItems: 'center',
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
                  <Ionicons name="home" size={20} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" size={20} />
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
