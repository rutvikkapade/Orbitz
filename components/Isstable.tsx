import React from 'react'
import {View, StyleSheet, Text,} from 'react-native'
import { color } from 'react-native-reanimated'
import { paletone } from './colors'
export const Isstable = ({data}) => {

    function renrow(kee){
        return(
            <View key={kee} style={style.row}>
                <View style={style.viewl}>
                <Text style={style.tleft}>{kee}</Text>
                </View>
                <View style={style.viewr}>
                <Text style={style.tright}>{data[kee]}</Text>
                </View>
                
            </View>

        )

    }
   
    const res = Object.keys(data)
    
    return (
        <View style={{height: '75%', marginBottom:30}}>
            {
                res.map(key=>
                    renrow(key)
                )
            }
            
           
         
        </View>
        
    )
}

const style= StyleSheet.create(
    {
        row: {
            backgroundColor: paletone.backg,
            flex:1,
            flexDirection:'row',
            borderRadius:5,
            margin:1,
            height:50,
            width:'75%'
        },
        tleft:{
            fontSize: 18,
            alignSelf:'center',
            color: paletone.hlit3
            

        },
        tright:{
            fontSize: 18,
            alignSelf:'center',
            overflow: 'scroll',
            color: paletone.hlit3
            

        },
        viewl:{
            height:'100%',
            width:'40%',
            borderColor:paletone.hlit3,
            borderRightWidth:1 ,
            justifyContent: 'center'
        },
        viewr:{
            height:'100%',
            width:'60%',
            justifyContent:'center'
            
           
        }

    }
)

  {/*  <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.name}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.id}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.latitude}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.longitude}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.altitude}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.velocity}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.visibility}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.daylight}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.footprint}</Text></View>

            <View style = {style.c1}><Text>Name</Text></View>
            <View style = {style.c2}><Text>{data.daynum}</Text></View> */}