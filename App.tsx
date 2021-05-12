import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import React,{useEffect, useState} from 'react';
import { Button, StyleSheet, Text, View ,Image, Dimensions} from 'react-native';
import { createStackNavigator} from '@react-navigation/stack';
import {mapstyle} from "./mapStyle/mapstyle";
import MapView, {Marker} from 'react-native-maps';
import LoginComponent from './routes/loginScreen';
import RegisterComponent from './routes/registerScreen';
import HomeScreenComponent from './routes/homeScreen';
const Stack=createStackNavigator();
let a=1;

const testScreen=({route,navigation})=>{
  const{data}=route.params;
  const longitude=data.longitude;
  const latitude=data.latitude;
  console.log(longitude+' '+latitude);
  return(
    <>
    <Text>{JSON.stringify(data)}</Text>
    <Button title='Render Map' onPress={()=>{
      navigation.navigate('MapScreen',{longitude :longitude ,latitude:latitude });
    }}/></>
  )
}

const Maps = ({route,navigation}) => {
  const{longitude,latitude}=route.params;
  const long=parseFloat(longitude);
  const lat=parseFloat(latitude);
  return (
      <MapView
  customMapStyle={mapstyle}
   style={styles.map} 
    initialRegion={{
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      latitudeDelta: 100,
      longitudeDelta: 100
    }}
  >
   <MMarker lat={lat} long={long}></MMarker>
  </MapView>
  )
}
const MMarker=(props)=>{
  const[lat,setLat]=useState(props.lat);
  const[long,setLong]=useState(props.long);
  setTimeout(async()=>{
    const resp=await fetch('https://api.wheretheiss.at/v1/satellites/25544');
    const dataOne=await resp.json();
    setLat(parseFloat(dataOne.latitude));
    setLong(parseFloat(dataOne.longitude));
  },1000)
 return(
  <Marker coordinate ={{ latitude:  parseFloat(lat),
    longitude: parseFloat(long) }}>
      <Image style = {styles.img} source={require("./assets/issat.png")}/>

    </Marker>
 ) 
}
export default function App() {
  return (
    
    <NavigationContainer>{
      <Stack.Navigator>
        <Stack.Screen name='LoginScreen' options={{headerShown:false}} component={LoginComponent}></Stack.Screen>
        <Stack.Screen name='RegisterScreen' options={{headerShown:false}} component={RegisterComponent}></Stack.Screen>
        <Stack.Screen name='HomeScreen' options={{headerShown:true}} component={HomeScreenComponent
        }></Stack.Screen>
        <Stack.Screen name='TestScreen' component={testScreen}></Stack.Screen>
        <Stack.Screen name='MapScreen' component={Maps}></Stack.Screen>
      </Stack.Navigator>
      
      }</NavigationContainer>
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
