import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
//import { db } from '../firebase';

import firebase from 'firebase/app';

import { db } from '../firebase';

 
function addTicket(ttitle, ddescription, uuserID) {
    db.collection("tickets").add({
      Title: ttitle,
      Description: ddescription,
      userID: uuserID,
      Date: Date().substr(4, 20),
      notes: "",
      Important: false,
      Resolved: false
  })
  }

class CreateTicket extends Component{
    state =
    {
        title: "",
        description: "",
    }



    handleTitle = (text) => {
    this.setState({ title: text })
    }

    handleDescription = (text) => {
    this.setState({ description: text })
    }


    render() {
    return(
        <View style={styles.container}>
            <Text style={styles.header}>CREATE A TICKET</Text>
            <TextInput
            placeholder="Ticket Title"

            onChangeText = {this.handleTitle}/>
            <TextInput
            placeholder="Ticket Description"
            onChangeText = {this.handleDescription} />
            <Button
            title="Submit Ticket"
            onPress={() => addTicket(this.state.title, this.state.description, "louie@fdm.com")}/>
        </View>
    )
    }
}

export default CreateTicket;
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