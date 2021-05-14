import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AppBootstrap } from '@components';
import Navigator from '@config/navigator';

export default function App() {
  return (
    <AppBootstrap>
      <Navigator />
    </AppBootstrap>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fab688',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
