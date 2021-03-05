import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import Index from './src/index';
export default class App extends Component {
  render(){
  return (
    <View style={styles.container}>
  <Index/>
      <StatusBar style="light" />
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
