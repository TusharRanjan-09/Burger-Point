import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const { width, height } = Dimensions.get('window')
const DATA = [{ id: 1, image: require('../assets/img/burger2.jpg') }, { id: 2, image: require('../assets/img/burger.jpg') }, { id: 3, image: require('../assets/img/burger3.jpg') }]
export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Swiper autoplay={true}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
      >
        {DATA.map((slide) => {
          return (
            <View key={slide.id} style={styles.slide}>
              <Image source={slide.image} style={styles.image} />
            </View>
          )
        })}
      </Swiper>
      <View style={styles.darkLayer}/>
      <View  style={{position:'absolute',top:60, alignSelf:'center'}}>
      <FontAwesome5 name='hamburger' size={100} color='orange'/>
      <Text style={{color:'white', fontWeight:'bold', fontSize:26,alignSelf:'center'}}>BURGER</Text>
      <Text style={{color:'white', fontWeight:'bold', fontSize:19,alignSelf:'center'}}>Point</Text>
      </View>
      
      <TouchableOpacity style={{ position: 'absolute', borderWidth: 2, padding: 5, width: '85%', borderRadius: 30, justifyContent: 'center', alignItems: 'center', borderColor: 'white', bottom: 50, alignSelf: 'center' }}
        onPress={() => navigation.navigate('Login')}
      >   
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 28 }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  image: {
    width: width,
    height: height,

  },
  dot: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3
  },
  activeDot: {
    backgroundColor: 'white',
    width: 8,
    height: 8,
    borderRadius: 8,
    marginLeft: 3,
    marginRight: 3
  },
  darkLayer: {
    position:'absolute',
    top:0,
    bottom:0,
    right:0,
    left:0,
    backgroundColor:'#000000',
    opacity:.4
  }
});
