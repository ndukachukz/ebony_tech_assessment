import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProtectedStackParamList} from '../types';
import Home from '../screens/protected/Home';

const Stack = createNativeStackNavigator<ProtectedStackParamList>();

export const ProtectedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
