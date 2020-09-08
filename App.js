import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import StartGameScreen from './screens/StartGameScreen';
export default function App() {
  return (
    <View style={styles.screen} >
      <Header title="Guess A Number" />
      <StartGameScreen /> 
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'yellow',
  
  },
});
