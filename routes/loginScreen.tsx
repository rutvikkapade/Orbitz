import { TextInput } from 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View ,Image, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {CustomButton} from '../components/components';
import {storage} from '../storage/storage';

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
        <Image style={styles.orbitzLogo} source={require('../assets/splash.png')} />
    </View>
    <View style={styles.viewTwo}>
        <View style={styles.subView}>
            <Text>Login</Text>
            <TextInput style={styles.input} placeholder='Email'></TextInput>
            <TextInput style={styles.input} placeholder='Password'></TextInput>
            <Button title='Login' onPress={()=>{ 
                storage.save({
                    key : 'loginInfo',
                    data : {
                        username : "rutvik kapade",
                        loggedIn : true,
                
                    }
                });
                navigation.navigate('HomeScreen')}}/>
            <Button title='Register' onPress={()=>{navigation.navigate('RegisterScreen')}}/>
            <CustomButton navigation={navigation} route={route}></CustomButton>
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
    height : '60%',
    backgroundColor : 'white',
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
    backgroundColor : '#eeeeee',
    margin : 10,
    height : 45,
    width: '100%',
    borderRadius : 5,
    textAlign : 'center',

}
})
export default LoginComponent;