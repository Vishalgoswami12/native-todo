import React from "react"
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-elements";

function TodoList (props){

const{todoName,index,handleDelete} = props    
    return(
        <View>
            <Text>{todoName}</Text>
            <Button title="Delete" onPress={() => handleDelete(index)} />
        </View>
    )
}

const styles = StyleSheet.create({})

export default TodoList;