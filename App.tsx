import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/Screens/HomeScreen';
import CounterScreen from './src/Screens/CounterScreen';
// import { Ionicons } from 'react-native-vector-icons';

import { Provider } from 'react-redux';

// call store as object {} like this
import {store} from './src/Redux/store';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarIcon: ({ color, size }) => {
          //   let iconName;
          //   if (route.name === 'Home') iconName = 'home';
          //   else if (route.name === 'Count') iconName = 'calculator';

          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Count" component={CounterScreen} />

        
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
