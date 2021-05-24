import React from 'react'
import {View, Image, StyleSheet,TouchableOpacity,Text } from 'react-native'

const paletone = {
    backg : '#333345',
    backd : '#23232f',
    hlit3: '#725A7A',
    hlit2: '#bd6868',
    hlit1: '#ff7c75'
}
export const Fancybutts = ({text, opressor}) => {
    return (
        <TouchableOpacity style={styles.buttn} onPress= {opressor}>
            <View style={styles.txtview}><Text style= {styles.text}>{text}</Text></View>
            <Image style = {styles.image} source={require('../assets/polytr.png')}/>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create (
    {
        txtview:{flex:3, justifyContent:'center' },
        buttn: {
            height: 70,
            /* padding: 10, */
            backgroundColor: paletone.backg,
            borderRadius: 20,
            width: "85%",
            flexDirection: "row",
            marginVertical: 18
            

        },
        text:{
            color: '#FFFFFF',
            letterSpacing: 4 ,
            marginLeft:20,
            fontSize: 20,
            alignSelf: 'flex-start',
            justifyContent:'center'
        },
        image:{
            alignSelf: 'center',
            height:45,
            resizeMode: 'contain',
            flex: 1
        }
    }
)



