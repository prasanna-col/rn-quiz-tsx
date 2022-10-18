
import React, { FC } from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import Quiz from './src/screens/Quiz';

const App: FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Quiz />
    </SafeAreaView>
  );
};



export default App;
