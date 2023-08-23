import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import HomeScreen from "./src/screens/HomeScreen";
import SecondScreen from "./src/screens/SecondScreen";
const Stack = createStackNavigator()

const app = () =>{
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="SecondScreen" 
        component={SecondScreen}
        options={({navigation}) => ({
          headerStyle: { backgroundColor: "#222f3e"},
          headerTitleStyle: { color: "#ffffff"},
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
              <Text style={{color: '#ffffff', marginEnd: 2}}>New</Text>
            </TouchableOpacity>
          )
        })}/>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  ) 
  
}



export default app;