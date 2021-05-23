import { TextInput } from 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View ,Image, Dimensions,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const paletone = {
    backg : '#333345',
    backd : '#23232f',
    hlit3: '#725A7A',
    hlit2: '#bd6868',
    hlit1: '#ff7c75'
}
const RegisterComponent=({route,navigation})=>{
return(<View>
    <View > 
    <StatusBar></StatusBar> 
    <View style={styles.viewOne}>
        <Image style={styles.orbitzLogo} source={require('../assets/ORBITZ.png')} />
    </View>
    <View style={styles.viewTwo}>

    <TextInput placeholderTextColor={paletone.hlit2} style={styles.input} placeholder='Email'></TextInput>
            <TextInput placeholderTextColor={paletone.hlit2}  style={styles.input} placeholder='Password'></TextInput>

            <TouchableOpacity style= {nstyles.touchbutts} onPress={()=>{ navigation.navigate('HomeScreen')}}>
                <Text  style = {nstyles.touchtexts}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity style= {{bottom:70, position: 'absolute'}} onPress={()=>{ navigation.navigate('HomeScreen')}}>
                <Text  style = {nstyles.regtxt}>Login</Text>
            </TouchableOpacity>
       {/*  <View style={styles.subView}>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <Button title='Login' onPress={()=>{ navigation.navigate('HomeScreen')}}/>
            <Button title='Register' onPress={()=>{navigation.navigate('RegisterScreen')}}/>
        </View> */}
    </View>
</View>
</View>)
}
const styles = StyleSheet.create({
    viewOne : {
        height : '30%',
        width : '100%',
        backgroundColor : paletone.backd,
        alignItems : 'center',
        justifyContent : 'center',
    },
    viewTwo : {
        height : '70%',
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
        height : '80%',
        backgroundColor : '#6D69E1',
        justifyContent : 'center',
        padding : 20,
        borderRadius : 20,
        shadowColor: "#000",
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
                fontSize : 20,
                color: paletone.hlit2,
                alignSelf: 'center',
                fontWeight: "bold"
                
            }
        }
    )


export default RegisterComponent;
