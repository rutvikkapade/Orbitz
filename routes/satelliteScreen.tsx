import { FlatList, TextInput } from 'react-native-gesture-handler';
import React from 'react';
import { ScrollView,Button, StyleSheet, Text, View ,Image, Dimensions} from 'react-native';
import { StatusBar } from 'expo-status-bar';

// const SatelliteCard=()=>(
// <View style={styles.item}>
//     <Text style={styles.title}>test</Text>
// </View>
// )
  
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Button title="View"/>
    </View>
  );

const SatelliteScreenComponent=({route,navigation})=>{
    const data=route.params;
    const renderItem = ({ item }) => (
        <Item title={item.Satellite_Name} />
      );
    return(
        <FlatList
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
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });
export default SatelliteScreenComponent;