import React from "react";
import { Text, View, StyleSheet, Image, Button, Alert } from 'react-native'
import image from './assets/blue-diamon.webp'
const app = () =>{
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!!</Text>
      <Image source={{uri: 'https://picsum.photos/200'}} style={styles.imageex}/>
      <Button
      title="Press Me"
      onPress={() => Alert.alert('Expample')}
      />
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
  }
})

export default app;