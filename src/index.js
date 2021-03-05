import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './screens/startScreen';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
const {width,height} = Dimensions.get('window')
const Stack = createStackNavigator();
export default function Index() {
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
