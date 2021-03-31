import React, {setState, useState, useEffect, Component} from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, List} from 'react-native';
import { db } from '../firebase';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
function updateUser(uusername, ppassword, ffirstname, llastname) {
    db.collection("users").doc(uusername).set({
      username: uusername,
      password: ppassword,
      firstname: ffirstname,
      lastname: llastname,
      created: Date().substr(4, 20)
  })
  }

function deleteUser(id, {navigation}) {
    const user = db.collection('users').doc(id);
    user.delete();
    navigation.navigate("Users");
}

const User = ({route, navigation}) => {
    var user = route.params.users;
  

    const [enteredPassword, setPassword] = useState('');
    const [enteredFirstname, setFirstname] = useState('');
    const [enteredLastname, setLastname] = useState('');
    return(
        <ScrollView style={styles.container}>
            <Text>Username: </Text>
            <TextInput
            placeholder= {user.username.concat(" (Cannot be Modified)")} />
            <Text>Date Created: </Text>
            <TextInput
            placeholder= {user.created.concat(" (Cannot be Modified)")} />
            <Text>Password: </Text>
            <TextInput
            placeholder= {user.password}
            onChangeText =  {text => setPassword(text)} 
            />
            <Text>First Name: </Text>
            <TextInput
            placeholder= {user.firstname}
            onChangeText =  {text => setFirstname(text)} 
            />
            <Text>Last Name: </Text>
            <TextInput
            placeholder= {user.lastname}
            onChangeText =  {text => setLastname(text)} 
            />

            <Button  
            title="Update User"
            onPress={() => updateUser(user.username, enteredPassword || user.password, enteredFirstname || user.firstname, enteredLastname || user.lastname)}/>
            <Text>Once this is done it cannot be undone</Text>
            <Button  
            style ={{marginTop: 20, marginBottom: 20}}
            color = "#FF4942"
            title="Delete User"
            onPress= {() => deleteUser(user.id, {navigation})}/>
            
    

        </ScrollView>
    )
}

export default User;


const styles = StyleSheet.create({
    container: {
      marginLeft: 15,
      marginRight: 15,
    },
    
  })