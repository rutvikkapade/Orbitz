import React from 'react'
import { View ,Image,StyleSheet, Button,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler'
import { paletone } from '../components/colors'

const Item=({data})=>{
return(
<View style={styles.container}>
    <Image style={styles.imageStyle} source={{uri:data.img_src}}></Image>
    <View style={styles.infoView}>
    <View style={styles.horizontalView}>
        <View style={styles.labelView}>
            <Text style={styles.label}>ID</Text>
        </View>
        <View style={styles.valueView}>
            <Text style={styles.value}>{data.id}</Text>
        </View>
    </View>
    <View style={styles.horizontalView}>
        <View style={styles.labelView}>
            <Text style={styles.label}>SOL</Text>
        </View>
        <View style={styles.valueView}>
            <Text style={styles.value}>{data.sol}</Text>
        </View>
    </View>
    <View style={styles.horizontalView}>
        <View style={styles.labelView}>
            <Text style={styles.label}>Camera</Text>
        </View>
        <View style={styles.valueView}>
            <Text style={styles.value}>{data.camera.full_name}</Text>
        </View>
    </View>
    </View>
    
</View>)
    
};
const RoverImagesComponent=({route,navigation})=>{
    let data=route.params;
    let renderItem=({item})=>(
       <Item data={item}></Item> 
    );
return(
    <View style={styles.mainContainer}>
        <FlatList
    data={data.data.photos} initialNumToRender={10} windowSize={10} maxToRenderPerBatch={10} updateCellsBatchingPeriod={30} removeClippedSubviews={false} onEndReachedThreshold={0.1} renderItem={renderItem} keyExtractor={item=>item.id.toString()}
    />   
    </View>
    
)
}


const styles=StyleSheet.create({
    mainContainer : {
        width : '100%',
        alignItems : 'center',
        backgroundColor : paletone.backd,
        justifyContent:'center',
        
        
    },
    horizontalView:{
        flexDirection : 'row',
        margin : 5,
        backgroundColor : paletone.backd,
        borderRadius:5,
        
    },
    container:{
        width: '95%',
        padding : 20,
        backgroundColor: paletone.backg,
        
        borderStyle : 'solid',
        borderWidth : 0,
        borderRadius: 10,
        marginVertical: 10,
        alignSelf: 'center',
    },
    imageView:{
        width:'100%',
        height:'100%',
        shadowColor: "#000",
        justifyContent:'center',
    alignItems: 'center',
    
    shadowOffset: {
	width: 0,
	height: 2,
    },
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,

    },
    imageStyle:{
        width:'100%', 
        height : 300,
        marginBottom : 10,
        borderRadius : 10,
        
    },
    infoView:{
        alignItems : 'center',
        borderRadius : 20,
    },
    labelView:{
        alignItems: 'center',
        width : '50%',
        borderRightWidth : 1,
        borderColor : paletone.hlit3,
        
        
    },valueView :{
        alignItems: 'center',
        width : '50%',
        borderLeftWidth : 0,
        borderColor : paletone.hlit3,
    }
    ,label :{
        fontSize : 18,
        color: 'white'
    },
    value :{
        fontSize : 18,
        color: 'white'
    }
})

export default RoverImagesComponent;