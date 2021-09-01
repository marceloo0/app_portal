import React from 'react';
import { View } from 'react-native'
import { useAuth } from '../hooks/useAuth';
import AppLoading from 'expo-app-loading';
import { AppTabRoutes } from './app.tab.routes';
import { AppStackRoutes } from './app.stack.routes';

export function Routes(){
  const { username, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <AppLoading />
      </View>
    );
  }
  return !username ? <AppStackRoutes/> : <AppTabRoutes />
}
