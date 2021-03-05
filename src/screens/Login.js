import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Button from '../components/Buttons/Button';
import Input from '../components/Input/TextInput';
import SignIn from '../components/Buttons/SignInWithGoogle';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
function Login({ navigation }) {
    const Width = Dimensions.get('screen').width
    const Height = Dimensions.get('screen').height
    return (
        <View style={{ flex: 1, }}>
            <Image source={{ uri: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2020/06/Guacamole-Bacon-Burgers-6.jpg' }} style={{ resizeMode: 'cover', width: Width, height: Height }} />
            <View style={{ flexDirection: 'row', top: 730, justifyContent: 'center',position:'absolute',alignSelf:'center' }}>
                <Text style={{ fontSize: 16 }}>Don't have an account?</Text>
               <TouchableOpacity onPress={()=> navigation.navigate('SignUp')}>
                   <Text style={{ fontSize: 16, fontWeight:'bold', color:'red' }}> SignUp</Text>
               </TouchableOpacity>
            </View>
            <View style={styles.darkLayer} />
            <View style={{ position: 'absolute', top: 50, alignSelf: 'center' }}>
                <FontAwesome5 name='hamburger' size={100} color='orange' />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 26, alignSelf: 'center' }}>BURGER</Text>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 19, alignSelf: 'center' }}>Point</Text>
            </View>
            <View style={{ backgroundColor: 'rgba(255,255,255,0.3)', position: 'absolute', top: Height / 3.5, width: '90%', alignSelf: 'center', height: Height / 1.82, borderRadius: 20, }}/>
            <View style={{  position: 'absolute', top: Height / 3.5, width: '90%', alignSelf: 'center', height: Height / 1.82, borderRadius: 20, }}>
                <Text style={{ color: '#F53803', alignSelf: 'center', fontWeight: 'bold', fontSize: 25, padding: 10 }}>Sign In</Text>
                <Input data={'Enter Your Email'} icon={Entypo} name={"mail"} />
                <Input data={'Password'} icon={Entypo} name={"key"} />
                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 10, marginBottom: 10 }} onPress={()=> navigation.navigate('SignUp')}>
                    <Text style={{ color: 'black', fontWeight:'bold',fontSize:16}}>Forget Password ?</Text>
                </TouchableOpacity>
                <Button title={'LOGIN'} nav={()=>navigation.navigate('SignUp')}/>
                <Text style={{ alignSelf: 'center' ,fontSize:16,color: 'black',fontWeight:'bold'}}>OR</Text>
                <SignIn name="GOOGLE" name2="FACEBOOK" />
            </View>

        </View>
    );
}

export default Login;
const styles = StyleSheet.create({
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        height: 10
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
    },
    darkLayer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: '#000000',
        opacity: .3
    }
});