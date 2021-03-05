import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity,Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
function Google(props) {
    
    return (
        <View style={{alignItems: 'center',marginVertical:10 }}>
            <View style={{ borderRadius:30,width: '80%',marginBottom:10, borderColor:'#3827b2', alignContent:'space-between',backgroundColor:'white'}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',height:50, }}>
                <View style={{flexDirection:'row',justifyContent: 'space-between', alignContent: 'space-between', alignSelf: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize:17, paddingHorizontal:10}}>SIGN IN WITH {props.name}</Text>
                <Image source={require('../../assets/images/google.jpg')} style={{width:25, height:25,alignSelf: 'flex-end'}}/>
                </View>              
            </TouchableOpacity>
            </View>
            <View style={{  borderRadius:30,width: '80%', backgroundColor: '#4966a3'}}>
            <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center',height:50, }}>
                <View style={{flexDirection:'row'}}>
                <Text style={{fontWeight: 'bold', fontSize:17, paddingHorizontal:10, color: 'white'}}>SIGN IN WITH {props.name2}</Text>
                <Image source={require('../../assets/images/facebook.png')} style={{width:25, height:25, alignSelf: 'flex-end'}}/>
                </View>              
            </TouchableOpacity>
            </View>
           
        </View>
    );
}

export default Google;  

