import React from 'react'
import {Dimensions, FlatList,Image, StyleSheet, View} from 'react-native'
import { Screen } from 'react-native-screens'
import { paletone } from './colors';
const { width, height } = Dimensions.get('screen');
const images  = [
    {
        key: '1',
        url:'https://cdna.artstation.com/p/assets/images/images/012/065/420/large/lars-sowig-final-158-small.jpg?1532869707' 
    },
    {
        key: '2',
        url:'https://cdna.artstation.com/p/assets/images/images/010/663/526/4k/julian-calle-space-v003.jpg?1525594725' 
    },
    {
        key: '3',
        url:'https://cdnb.artstation.com/p/assets/images/images/022/278/749/large/james-daly-spacewalk-clr-sm.jpg?1574803271' 
    },
    {
        key: '4',
        url:'https://cdnb.artstation.com/p/assets/images/images/007/926/157/4k/vadim-sadovski-r5.jpg?1509394908' 
    },
    {
        key: '5',
        url:'https://cdnb.artstation.com/p/assets/images/images/012/937/471/large/tan-zhi-hui-5.jpg?1537277726' 
    }
    
]
export const Carousel = () => {
    return (
        <FlatList style={{height: 350 }} data= {images} horizontal pagingEnabled
         renderItem = {({item})=> <View style = {carustyle.view}><Image style= {carustyle.caruimage} source={{uri: item.url}} /></View> }/>
        
    )
}
const carustyle = StyleSheet.create(
    {
        caruimage: {
            height: 300,
            width: 320,
            borderRadius: 15,
            resizeMode: 'cover'
        },
        view: {
            
           width,
           
           
            justifyContent:'center',
            alignItems: 'center'

        }
    }
)

/* export default Carousel */
