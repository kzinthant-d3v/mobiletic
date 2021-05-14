import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StackNavigatorParams } from '@config/navigator';

interface IGame {
  navigation: StackNavigationProp<StackNavigatorParams, 'Home'>;
}

const Game: React.FC<IGame> = ({ navigation }) => {
  return (
    <View>
      <Text>Game</Text>
      <Button
        title='Home'
        onPress={() => {
          navigation.navigate('Home');
        }}
      ></Button>
    </View>
  );
};

export default Game;
