import React from 'react';
import { StyleSheet, View, SafeAreaView } from "react-native";
import MyStack from './src/navigation/Stack';

import Tabs from './src/navigation/Tabs';

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
          {/* //J'appelle ma navigation */}
          <Tabs/>
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