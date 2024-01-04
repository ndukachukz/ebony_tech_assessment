import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ProtectedStackParamList} from '../types';
import Home from '../screens/protected/Home';
import Product from '../screens/protected/Product';

const ProtectedStack = createNativeStackNavigator<ProtectedStackParamList>();

export const ProtectedNavigator = () => {
  return (
    <ProtectedStack.Navigator>
      <ProtectedStack.Screen
        name={'Home'}
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <ProtectedStack.Screen
        name={'Product'}
        component={Product}
        options={{
          headerShown: false,
        }}
      />
    </ProtectedStack.Navigator>
  );
};
