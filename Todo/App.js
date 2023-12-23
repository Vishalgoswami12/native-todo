import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormFill from './components/FormFill';
import TodoList from './components/TodoList';


export default function App() {

const [data,setData] = useState([])  
const [todo,setTodo] = useState("")

const handleChange = (e) => {
  setTodo(e)
}

const handleSubmit = () => {
  let trimed = todo.trim()
  if(!trimed){
    setTodo("")
    return
  }
  setData([...data,{item:todo,status:false}])
  setTodo("")
}

const handleDelete = (index) => {
  data.splice(index,1)
  setData([...data])
}

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>
      <StatusBar style="auto" />
      <FormFill
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      todo={todo}
      />

      {
        data &&
        data.map((ele,index) => {
          return(
            <TodoList key={Math.random()} 
            todoName={ele.item}
            index={index}
            handleDelete={handleDelete}
            />
          )
        })
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center",
  },
  heading:{
    marginTop:"100px",
    color:"blue"
  }
});
