/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {TamaguiProvider} from 'tamagui';
import {QueryClient, QueryClientProvider} from 'react-query';
import {ToastProvider, ToastViewport} from '@tamagui/toast';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import config from './tamagui.config';
import Navigator from './src/navigator';
import {AppToast} from './src/components/Toast';
import AppProvider from './src/context';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <AppProvider>
        <TamaguiProvider config={config}>
          <ToastProvider>
            <ToastViewport />
            <AppToast />
            <QueryClientProvider client={queryClient}>
              <Navigator />
            </QueryClientProvider>
          </ToastProvider>
        </TamaguiProvider>
      </AppProvider>
    </SafeAreaProvider>
  );
}

export default App;
