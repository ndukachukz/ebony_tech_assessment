import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PublicNavigator} from './PublicNavigator';
import {ProtectedNavigator} from './ProtectedNavigator';

const Navigator = () => {
  return (
    <NavigationContainer>
      <PublicNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
