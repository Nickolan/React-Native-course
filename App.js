import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing';
 
const app = () =>{

  const [imageSelected, setImageSelected] = useState(null)

  let openPickanImage = async() =>{
    let permisionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permisionResult.granted === false) {
      alert('It is needed to authorize the media library')
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync()

    if (pickerResult.canceled === true) {
      return;
    }
    setImageSelected({uriImage: pickerResult.assets[0].uri})
  }

  let openSharing = async () => {
    if (!(await Sharing.isAvailableAsync())) {
      alert('This device is not available to share with others')
      return;
    }

    await Sharing.shareAsync(imageSelected.uriImage)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Image!!</Text>
      <TouchableOpacity
        onPress={openPickanImage}
      >
      <Image source={{uri: imageSelected !== null ? imageSelected.uriImage : 'https://picsum.photos/200'}} style={styles.imageex}/>
      </TouchableOpacity>
      {
        imageSelected !== null ?
        <TouchableOpacity
          onPress={openSharing}
          style={styles.touchableImage}
        >
          <Text style={styles.buttonText}>Share Image</Text>
        </TouchableOpacity> : null
      }
    </View>
  ) 
  
}

const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#292929'
  },

  title:{
    fontSize: 30,
    color: '#fff',
  },
  imageex: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  imageex2: {
    height: 200,
    width: 300
  },
  touchableImage:{
    backgroundColor: '#00a3ff',
    padding: 7,
    marginTop: 10,
  },
  buttonText:{
    color: '#fff',
    fontSize: 20
  }
})

export default app;