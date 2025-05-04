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
                // marginBottom: 30,
                width: '90%',
                paddingHorizontal: 9,
                flexDirection: 'row',
                alignItems: 'center',
                paddingBottom: 4,
                height: 60
              },
              tabBarButton: ({ onPress, children, accessibilityState }) => {
                const isSelected = accessibilityState?.selected;
              
                return (
                  <TouchableWithoutFeedback style={{ justifyContent: 'center', }} onPress={onPress}>
                    <View
                      style={{
                        backgroundColor: isSelected ? '#ffffff' : '#212528',
                        borderRadius: 100,
                        padding: 8,
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
                tabBarIcon: ({ focused }) => (
                  <Ionicons name="home-sharp" size={20} color={focused ? '#212528' : '#ffffff'} />
                ),
              }}
            />
            <Tab.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Ionicons name="settings-sharp" size={20} color={focused ? '#212528' : '#ffffff'} />
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
