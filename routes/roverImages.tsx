import React from 'react'
import { View ,Image,StyleSheet, Button,Text} from 'react-native';
import { FlatList } from 'react-native-gesture-handler'

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
    data={data.data.photos} initialNumToRender={10} windowSize={10} maxToRenderPerBatch={10} updateCellsBatchingPeriod={30} removeClippedSubviews={false} onEndReachedThreshold={0.1} renderItem={renderItem} keyExtractor={item=>item.id}
    />   
    </View>
    
)
}


const styles=StyleSheet.create({
    mainContainer : {
        width : '100%',
        alignItems : 'center',
        backgroundColor : '#E9EEF6',
    },horizontalView:{
        flexDirection : 'row',
        margin : 5,
        backgroundColor : '#B7C7E4',
    },
    container:{
        width: '100%',
        padding : 20,
        borderColor : '#e2e5f4',
        borderStyle : 'solid',
        borderWidth : 5,
    },
    imageView:{
        width:'100%',
        height:'100%',
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
    imageStyle:{
        width:'100%', 
        height : 300,
        marginBottom : 10,
        borderRadius : 10
    },
    infoView:{
        alignItems : 'center',
        borderRadius : 15,
    },
    labelView:{
        alignItems: 'center',
        width : '50%',
        borderWidth : 1,
        borderColor : 'white',
    },valueView :{
        alignItems: 'center',
        width : '50%',
        borderWidth : 1,
        borderColor : 'white',
    }
    ,label :{
        fontSize : 18
    },
    value :{
        fontSize : 18
    }
})

export default RoverImagesComponent;