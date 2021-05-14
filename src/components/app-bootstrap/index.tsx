import React from 'react';
import { View, Text } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  DeliusUnicase_400Regular,
  DeliusUnicase_700Bold,
} from '@expo-google-fonts/delius-unicase';

const AppBootstrap: React.FC = ({ children }) => {
  const [fontLoaded] = useFonts({
    DeliusUnicase_400Regular,
    DeliusUnicase_700Bold,
  });
  return <>{fontLoaded ? children : <AppLoading />}</>;
};

export default AppBootstrap;
