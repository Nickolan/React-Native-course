import React from "react";
import { Text, View, TouchableOpacity, Alert, ScrollView, FlatList } from 'react-native'
import repositories from "../data/repositories";
import RepositoryList from "../components/RepositoryList";

const SecondScreen = () =>{
    return(
        <FlatList
          data={repositories}
          ItemSeparatorComponent={() => <Text> </Text>}
          renderItem={({item}) =>(
            <RepositoryList {...item}/>
          )}
        >

        </FlatList>
    )
}

export default SecondScreen;