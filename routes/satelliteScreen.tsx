import { FlatList, TextInput } from 'react-native-gesture-handler';
import React from 'react';
import { ScrollView,Button,TouchableOpacity, StyleSheet, Text, View ,Image, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { paletone } from '../components/colors'

// const SatelliteCard=()=>(
// <View style={styles.item}>
//     <Text style={styles.title}>test</Text>
// </View>
// )
  
  const Item = ({ title }) => (
    <View style={styles.item}>
     <View style= {styles.subview}>
     <Text style={styles.title}>{title.Satellite_Name}</Text>
     <Text style ={styles.subtext}>Type: {title.Type}</Text>
       <Text style={styles.subtext}>Norad Id: {title.Norad_Id}</Text>
     </View> 
     {/* <View style={styles.subview}>
       <Text style ={styles.subtext}>Type: {title.Type}</Text>
       <Text style={styles.subtext}>Norad Id: {title.Norad_Id}</Text>
     </View> */}
      <TouchableOpacity style={styles.imgview}>
        <Image style={styles.image} source = {require('../assets/sat.png')}/>
      </TouchableOpacity>
      {/* <Button title="View"/> */}
    </View>
  );

const SatelliteScreenComponent=({route,navigation})=>{
    const data=route.params;
    const renderItem = ({ item }) => (
        <Item title={item} />
      );
    return(
        <FlatList style ={{backgroundColor: paletone.backd}}
        data={data.data}
        renderItem={renderItem}
        keyExtractor={item => item.Norad_ID}
      />
    )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flexDirection:'row',
    backgroundColor: paletone.backg,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center',
    height: 150
    
    
  },
  title: {
    marginLeft:20,
    marginBottom:8,
    fontSize: 20,
    letterSpacing: 2,
    color: 'white',
    marginRight:5,
    alignSelf:'auto',
    
    /* borderRightWidth:1, */
    borderRightColor: paletone.hlit3
  },
  image: {
    height:80,
    width: 80,
    
    alignSelf:'center',
    margin:10,
    resizeMode:'contain',
    tintColor:paletone.backg
  },
  imgview:{
    flex:1,
    justifyContent:'center',
    backgroundColor:paletone.hlit1,
    height: '100%',
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    
    

  },
  subtext: 
  {
    color:paletone.hlit3,
    fontSize: 18,
    marginLeft:20
  },
  subview: {
    flex:3,
    
    padding:10
  }
});
export default SatelliteScreenComponent;