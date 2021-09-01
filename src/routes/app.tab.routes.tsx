import React from 'react';
import { Platform } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';

// import HomeSvg from '../assets/home.svg';
// import CarSvg from '../assets/car.svg';
// import PeopleSvg from '../assets/people.svg';

import { AppStackRoutes } from './app.stack.routes';
import { Dashboard } from '../screens/Dashboard';
import { Profile } from '../screens/Profile';
import { VacationsAllowences } from '../screens/VacationsAllowences';
import { Production } from '../screens/Production';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes(){
  const theme = useTheme();

  return(
    <Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.text_detail,
        showLabel: false,
        style: {
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
          height: 75,
          backgroundColor: theme.colors.background_primary,
          borderTopColor: 'transparent'
        }
      }}
    >
      <Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: (({ color }) => (
            <FontAwesome5 name="user-clock" size={24} color={color} />
          ))
        }}
      />
      <Screen
        name="VacationsAllowences"
        component={VacationsAllowences}
        options={{
          tabBarIcon: (({ color }) => (
            <FontAwesome5 name="suitcase-rolling" size={24} color={color} />
          ))
        }}
      />
      <Screen
        name="Production"
        component={Production}
        options={{
          tabBarIcon: (({ color }) => (
            <FontAwesome5 name="calendar-alt" size={24} color={color} />
          ))
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (({ color }) => (
            <FontAwesome5 name="user-cog" size={24}  color={color} />
          ))
        }}
      />
    </Navigator>
  )
}
