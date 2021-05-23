import { TextInput } from 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View ,Image, Dimensions,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {CustomButton} from '../components/components';
import {storage} from '../storage/storage';
const paletone = {
    backg : '#333345',
    backd : '#23232f',
    hlit3: '#725A7A',
    hlit2: '#bd6868',
    hlit1: '#ff7c75'
}
const LoginComponent=({route,navigation})=>{
storage.load({
    key : 'loginInfo',
    autoSync: true,
    syncInBackground: true,
}).then(data=>console.log(data.username)).catch(err=>console.log(err));
return(
<View > 
    <StatusBar></StatusBar> 
    <View style={styles.viewOne}>
        <Image style={styles.orbitzLogo} source={require('../assets/ORBITZ.png')} />
    </View>
    <View style={styles.viewTwo}>
    <TextInput placeholderTextColor={paletone.hlit2} allowFontScaling = {true} style={styles.input} placeholder='mail...'></TextInput>
            <TextInput placeholderTextColor={paletone.hlit2} style={styles.input} placeholder='password...'></TextInput>
            <TouchableOpacity style= {nstyles.touchbutts} onPress={()=>{ 
                storage.save({
                    key : 'loginInfo',
                    data : {
                        username : "rutvik kapade",
                        loggedIn : true,
                
                    }
                });
                navigation.navigate('HomeScreen')}}>
                <Text  style = {nstyles.touchtexts}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {{bottom:70, position: 'absolute'}} onPress={()=>{ navigation.navigate('RegisterScreen')}}>
                <Text style= {nstyles.regtxt}> Not a user yet? <Text style= {{fontWeight: "bold",  color: paletone.hlit1 }}>Register!</Text> </Text>
            </TouchableOpacity>

       
            {/* <Text>Login</Text>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <Button title='Login' onPress={()=>{ navigation.navigate('HomeScreen')}}/>
            <Button title='Register' onPress={()=>{navigation.navigate('RegisterScreen')}}/>
            <CustomButton navigation={navigation} route={route}></CustomButton>
            <View style={styles.subView}>
        </View> */}
    </View>
</View>
);
}

const styles = StyleSheet.create({
    viewOne : {
        height : '35%',
        width : '100%',
        backgroundColor : paletone.backd,
        alignItems : 'center',
        justifyContent : 'center',
    },
    viewTwo : {
        height : '65%',
        width : '100%',
        backgroundColor : paletone.backd,
        alignItems : 'center'
    },
    orbitzLogo : {
        height : 150,
        width :  '70%',
        resizeMode: 'contain'
    },
    subView : {
        width : '90%',
        height : '60%',
        backgroundColor : paletone.backg,
        justifyContent : 'center',
        padding : 20,
        borderRadius : 20,
        shadowColor: "#000",
        alignItems: 'center',
        shadowOffset: {
        width: 0,
        height: 2,
        },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    },
    input : {
        backgroundColor : paletone.backd,
        borderBottomWidth: 1,
        borderBottomColor: paletone.hlit1,
    
        marginHorizontal: 30,
        marginVertical: 30,
        height : 45,
        width: '70%',
        color: paletone.hlit2,
        /* borderRadius : 5, */
        textAlign : 'left',
        fontSize: 20,
        paddingLeft: 10,
        
        
        textDecorationColor: paletone.hlit2
    
    }
    })
    
    const nstyles = StyleSheet.create (
        {
            touchbutts : {
                backgroundColor: paletone.hlit1,
                width: '85%',
                height: 50,
                borderRadius: 30,
                justifyContent: 'center',
                marginVertical: 30
                
    
                
    
            },
            touchtexts : {
                fontSize : 30,
                color: 'white',
                alignSelf: 'center',
                
            },
            regtxt: {
                fontSize : 15,
                color: paletone.hlit2,
                alignSelf: 'center',
                
            }
        }
    )
export default LoginComponent;
