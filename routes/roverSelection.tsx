import React, { useEffect, useState } from "react"
import { View ,StyleSheet, ImageBackground, Picker,Text} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {GetRoverImages} from "../components/components";

let cameraName="fhaz";
const CameraComponentCuriosity=()=>{
    const [cameraValue,setCameraValue]=useState('fhaz');
    useEffect(()=>{
        cameraName=cameraValue;
    })

    
    return(
    <View style={styles.pickerView}>
    <View style={styles.label}>
        <Text style={styles.labelText}>Rover Camera :</Text>
    </View>
    <View style={styles.valueViewer}>
        <Picker selectedValue={cameraValue}
style={{ height: 50, width:150, fontSize : 20 }}
onValueChange={(itemValue, itemIndex) => {setCameraValue(itemValue)}}>
        <Picker.Item label="Front Hazard Avoidance Camera" value="fhaz" />
<Picker.Item label="Rear Hazard Avoidance Camera" value="rhaz" />
<Picker.Item label="Mast Camera" value="mast" />
<Picker.Item label="Chemistry and Camera Complex" value="CHEMCAM" />
<Picker.Item label="Mars Hand Lens Imager" value="MAHLI" />
<Picker.Item label="Mars Descent Imager" value="MARDI" />
<Picker.Item label="Navigation Camera" value="NAVCAM" />
</Picker>
</View>
</View>
)}

const CameraComponentOpportunityAndSpirit=()=>{
    const [cameraValue,setCameraValue]=useState('Front Hazard Avoidance Camera');
    useEffect(()=>{
        cameraName=cameraValue;
    })
    return(
        <View style={styles.pickerView}>
    <View style={styles.label}>
        <Text style={styles.labelText}>Rover Camera :</Text>
    </View>
    <View style={styles.valueViewer}>
        <Picker selectedValue={cameraValue}
style={{ height: 50, width:150, fontSize : 20 }}
onValueChange={(itemValue, itemIndex) => {setCameraValue(itemValue);cameraName=cameraValue;console.log(cameraName);}}>
        <Picker.Item label="Front Hazard Avoidance Camera" value="fhaz" />
<Picker.Item label="Rear Hazard Avoidance Camera" value="rhaz" />
<Picker.Item label="Navigation Camera" value="NAVCAM" />
<Picker.Item label="Panoramic Camera" value="PANCAM" />
<Picker.Item label="Miniature Thermal Emission Spectrometer (Mini-TES)" value="MINITES" />
</Picker>
</View>
</View>
    )
}
const RoverSelectionComponent=({route,navigation})=>{
    const [roverValue, setRoverValue] = useState("curiosity");
    const [solValue,setSolValue]=useState("1");
    
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={{uri : 'https://www.wallpapertip.com/wmimgs/26-269777_curiosity-rover-selfie-with-arm.jpg'}}>
            <View style={styles.pickerView}>
                <View style={styles.label}>
                    <Text style={styles.labelText}>Select Rover :</Text>
                </View>
                <View style={styles.valueViewer}>
                    <Picker selectedValue={roverValue}
        style={{ height: 50, width:150, fontSize : 20, }}
        onValueChange={(itemValue, itemIndex) => setRoverValue(itemValue)}>
                    <Picker.Item label="Curiosity" value="curiosity" />
        <Picker.Item label="Opportunity" value="opportunity" />
        <Picker.Item label="Spirit" value="spirit" />
                </Picker>
                </View>
                 
            </View>
            {(roverValue=="curiosity"?<CameraComponentCuriosity></CameraComponentCuriosity>:<CameraComponentOpportunityAndSpirit></CameraComponentOpportunityAndSpirit>)}
            <View style={styles.pickerView}>
                <View style={styles.label}> 
                    <Text style={styles.labelText}>Set Sol(1-5000) :</Text>
                </View>
                <View style={styles.valueViewer}>
                   <TextInput onChangeText={setSolValue} value={solValue}  style={{height: 50, width:140, padding : 8}} placeholder="Enter sol value"/>
                </View>
                 
            </View>
            <GetRoverImages navigation={navigation} route={route} onPressFunction={async()=>{
                console.log(cameraName);
                console.log(solValue);
                console.log(roverValue);
      const resp=await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/'+roverValue+'/photos?sol='+solValue+'&camera='+cameraName+'&api_key=8aLgViIFEf7gbv2t5m9QA4dAJ1Flv0IQsEjJ8bkU');
      const dataOne=await resp.json();
      if(dataOne.photos.length!=0){
            navigation.navigate('RoverImageScreen',{data:dataOne});
      }
      
    }}></GetRoverImages>
            </ImageBackground>
        </View>
    )
}

const styles=StyleSheet.create({
    container : {
        flex: 1,
    flexDirection: "column"
    },
image:{
    flex :1,
    resizeMode: 'cover',
    opacity : 1,
    alignItems : 'center',
    justifyContent : 'center',
    
},pickerView:{
    flexDirection: 'row',
    backgroundColor : 'white',
    borderRadius : 10,
    justifyContent : 'center',
    margin : 10,
},label : {
    alignItems : 'center',
    justifyContent : 'center',
    padding : 5,
    backgroundColor : 'black',
    borderRadius : 10,
},labelText:{
    fontSize: 15,
    color : 'orange',
},valueViewer : {
    justifyContent : 'center',
}
});

export default RoverSelectionComponent;