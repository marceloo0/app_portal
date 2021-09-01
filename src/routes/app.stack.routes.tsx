import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SignIn } from '../screens/SignIn';
import { ForgotPassword } from '../screens/ForgotPassword';

// import { theme } from '../styles/theme';

const { Navigator, Screen } = createStackNavigator();

export function AppStackRoutes(){
  return(
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#312e38' },
      }}
    >
      <Screen
        name="SignIn"
        component={SignIn}
      />
      <Screen
        name="ForgotPassword"
        component={ForgotPassword}
      />
    </Navigator>
  )
}
