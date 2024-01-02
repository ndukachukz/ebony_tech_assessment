import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PublicNavigator} from './PublicNavigator';
import {ProtectedNavigator} from './ProtectedNavigator';
import {useAppContext} from '../context';

const Navigator = () => {
  const [state] = useAppContext();
  return (
    <NavigationContainer>
      {state.user && <ProtectedNavigator />}
      {!state.user && <PublicNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;
