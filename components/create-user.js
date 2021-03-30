import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import { db } from '../firebase';
function addUser(uusername, ppassword, ffirstname, llastname) {
    db.collection("users").doc(uusername).set({
      username: uusername,
      password: ppassword,
      firstname: ffirstname,
      lastname: llastname,
      created: Date().substr(4, 20)
  })
  }

class CreateUser extends Component{
    state = 
    {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
    }

    

    handleUsername = (text) => {
    this.setState({ username: text })
    }

    handlePassword = (text) => {
    this.setState({ password: text })
    }

    handleFirstName = (text) => {
    this.setState({ firstname: text })
    }

    handleLastName = (text) => {
        
    this.setState({ lastname: text })
    }


    render() {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>CREATE USER</Text>
            <TextInput
            placeholder="Username" 
            
            onChangeText = {this.handleUsername}/>
            <TextInput
            placeholder="Password"
            onChangeText = {this.handlePassword} />
            <TextInput
            placeholder="First Name" 
            onChangeText = {this.handleFirstName}/>
            <TextInput
            placeholder="Last Name" 
            onChangeText = {this.handleLastName}/>
            <Button  
            title="Create User"
            onPress={() => addUser(this.state.username, this.state.password, this.state.firstname, this.state.lastname)}/>
        </View>
    )
    }
}

export default CreateUser;
const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        fontWeight: "700",
        alignItems: 'center',
    },
    container: {
        marginLeft: 15,
        marginRight: 15,
      }
})