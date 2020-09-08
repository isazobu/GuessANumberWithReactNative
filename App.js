import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
export default function App() {
  return (
    <View style={styles.screen} >
      <Header title="Guess A Number" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'yellow',
  
  },
});
