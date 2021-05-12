import { TextInput } from 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View ,Image, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
const a=1;

const LoginComponent=({route,navigation})=>{
return(
<View > 
    <StatusBar></StatusBar> 
    <View style={styles.viewOne}>
        <Image style={styles.orbitzLogo} source={require('../assets/splash.png')} />
    </View>
    <View style={styles.viewTwo}>
        <View style={styles.subView}>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <Button title='Login' onPress={()=>{ navigation.navigate('HomeScreen')}}/>
            <Button title='Register' onPress={()=>{navigation.navigate('RegisterScreen')}}/>
        </View>
    </View>
</View>
);
}

const styles = StyleSheet.create({
viewOne : {
    height : '30%',
    width : '100%',
    backgroundColor : 'white',
    alignItems : 'center',
    justifyContent : 'center',
},
viewTwo : {
    height : '70%',
    width : '100%',
    backgroundColor : 'white',
    alignItems : 'center'
},
orbitzLogo : {
    height : 100,
    width :  200,
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
    backgroundColor : 'white',
    margin : 10,
    height : 45,
    borderRadius : 20,
    textAlign : 'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
    
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
}
})
export default LoginComponent;