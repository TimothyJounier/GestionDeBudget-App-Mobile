import React from 'react';
import { StyleSheet, View, SafeAreaView } from "react-native";
import StackNavigation from './src/navigation/Stack';
import MyStack from './src/navigation/Stack';


export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
          {/* //J'appelle ma navigation */}
          <StackNavigation/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
      width: '100%',
      height:'100%',
  },
});