import React from "react";
import { StyleSheet, Button,Text,TextInput, View } from 'react-native';
import {Input}  from "react-native-elements"

function FormFill (props){

const{handleChange,handleSubmit,todo} = props; 

    return(
        <View>
            <TextInput placeholder="Add" defaultValue={todo} onChangeText={(text) => handleChange(text)}/>
            <Button title='Save' onPress= {()=> handleSubmit()} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default FormFill;