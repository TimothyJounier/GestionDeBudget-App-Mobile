import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import StackNavigation from './src/navigation/Stack';
import MyStack from './src/navigation/Stack';

import data from './data.json';

import {DataContext} from './DataContext';


export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
    <DataContext.Provider value={data}>
        <View style={styles.container}>
          {/* //J'appelle ma navigation */}
          <StackNavigation/>
          <StatusBar  barStyle="light-content"/>
        </View>
      </DataContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height:'100%',
  },
  safe: {
    backgroundColor:'black',
  }
});