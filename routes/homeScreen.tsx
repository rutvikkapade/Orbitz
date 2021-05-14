import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View ,Image, Dimensions,BackHandler,Alert} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import {getSatelliteData} from '../data/dataService'
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
      <Button title='Get ISS Co-Ordinates' onPress={async () => {
        const resp = await fetch('https://api.wheretheiss.at/v1/satellites/25544');
        const dataOne = await resp.json();
        navigation.navigate('TestScreen', { data: dataOne });
      } } />
    <Button title='get satellites' onPress={async ()=>{
      const resp=await fetch('https://orbitz-server.herokuapp.com/satelliteData');
      const dataOne=await resp.json();
      navigation.navigate('SatelliteScreen',{data:dataOne});
    }}/>
    </View>
  );
}

   const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
  });
  export default HomeScreenComponent;