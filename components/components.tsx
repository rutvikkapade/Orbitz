import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const CustomButton=({route,navigation})=>(
<TouchableOpacity onPress={()=>{
    navigation.navigate('HomeScreen');
}}>
    <Text>Login</Text>
</TouchableOpacity>
);

export const GetRoverImages=({route,navigation,onPressFunction})=>{
return(
    <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={onPressFunction}>
            <Text style={styles.label}>View Images</Text>
    </TouchableOpacity>
)
}

const styles=StyleSheet.create({
button : {
    width : 250 ,
    height : 80,
    backgroundColor : 'orange',
    alignItems : 'center',
    justifyContent : 'center',
    borderRadius : 10,
},
label : {
    color: 'black',
    fontWeight : 'bold',
    fontSize:20

}
})
    
