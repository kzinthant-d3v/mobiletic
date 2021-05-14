import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '@config/navigator';

interface IHome {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
}

const Home: React.FC<IHome> = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title='Game'
        onPress={() => {
          navigation.navigate('Game', { gameId: '1' });
        }}
      ></Button>
    </View>
  );
};

export default Home;
