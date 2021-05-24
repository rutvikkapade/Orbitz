import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { Button,TouchableOpacity, StyleSheet, Text, View ,Image, Dimensions,BackHandler,Alert} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import { response } from 'express';
import {Carousel} from '../components/Carousel'
import {Fancybutts} from '../components/Fancybutts'
import { ScrollView } from 'react-native-gesture-handler';
import { paletone } from '../components/colors'
const HomeScreenComponent=({ navigation })=> {
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View style={styles.container}>
      
      <ScrollView>
      <View style={styles.ucon}>
        <TouchableOpacity style={styles.uconsegment}>
        <Image style={styles.logout} source={require('../assets/logout.png')}/>
        </TouchableOpacity>
       <TouchableOpacity style={styles.uconsegment}>
        <Image style={styles.userim} source={require('../assets/user.png')}/>
        </TouchableOpacity>
      </View>
      <Carousel/>
      <View style={{height: "auto", width:'100%', alignItems: 'center'}}>
      <Fancybutts text='ISS CO-ORDINATES' opressor= {async () => {
        const resp = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const dataOne = await resp.json();
        navigation.navigate('TestScreen', { data: dataOne });
      }}  />
      <Fancybutts text= 'GET SATELLTES' opressor ={async ()=>{
      const resp=await fetch('https://orbitz-server.herokuapp.com/satelliteData');
      const dataOne=await resp.json();
      navigation.navigate('SatelliteScreen',{data:dataOne});
    }} />

    <Fancybutts text = 'Rover Images' opressor= {()=>{navigation.navigate('RoverOptions')}}/>


      {/* <Button title='Get ISS Co-Ordinates' onPress={async () => {
        const resp = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const dataOne = await resp.json();
        navigation.navigate('TestScreen', { data: dataOne });
      } } />
    <Button title='get satellites' onPress={async ()=>{
      const resp=await fetch('https://orbitz-server.herokuapp.com/satelliteData');
      const dataOne=await resp.json();
      navigation.navigate('SatelliteScreen',{data:dataOne});
    }}/>
    <Button title='Curiosity Rover Images' onPress={async()=>{
      const resp=await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=300&camera=navcam&api_key=8aLgViIFEf7gbv2t5m9QA4dAJ1Flv0IQsEjJ8bkU');
      const dataOne=await resp.json();
      navigation.navigate('RoverImageScreen',{data:dataOne});
    }}/>
    <Button title='Rover Images' onPress={()=>{
      navigation.navigate('RoverOptions');
    }}/> */}
    </View>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: paletone.backd,
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    img: {
      height: 35,
      width: 35
    },
    ucon:{
      width:'100%',
       height:50,
       flexDirection:'row',
       paddingHorizontal:20,
       
       marginTop:20,
       justifyContent:'center',
       paddingTop:10

      },
      uconsegment:{
        flex:1,
        alignSelf:'auto',
        
        
      },
      userim:{
        height:30,
        width:30,
        resizeMode:'contain',
        alignSelf:'flex-end',
       
      },
      logout:{
        height:30,
        width:30,
        resizeMode:'contain',
        alignSelf:'flex-start'

      }
  });

  const nstyles = StyleSheet.create (
    {
        touchbutts : {
            backgroundColor: paletone.hlit1,
            width: '85%',
            height: 50,
            borderRadius: 15,
            justifyContent: 'center',
            marginVertical: 20
            

            

        },
        touchtexts : {
            letterSpacing: 4,
            fontSize : 20,
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
  export default HomeScreenComponent;