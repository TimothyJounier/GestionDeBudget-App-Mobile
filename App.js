import React from 'react';
import { StatusBar, StyleSheet, View, Text, SafeAreaView } from "react-native";

export default function App() {
  return (
      <View style={styles.container}>
        <SafeAreaView>
        <StatusBar />
          {/* //J'appelle ma navigation */}
          <View>
            <Text>Hello</Text>
          </View>
        </SafeAreaView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});