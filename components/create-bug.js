import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';
import { db } from '../firebase';
function addBug(ttitle, ddescription, uuserID) {
    db.collection("bugs").add({
      Title: ttitle,
      Description: ddescription,
      userID: uuserID,
      Date: Date().substr(4, 20),
      notes: "",
      Important: false,
      Resolved: false
  })
  }

class CreateBug extends Component{
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
            <Text style={styles.header}>REPORT BUG</Text>
            <TextInput
            placeholder="Bug Title" 
            
            onChangeText = {this.handleTitle}/>
            <TextInput
            placeholder="Bug Description"
            onChangeText = {this.handleDescription} />
            <Button  
            title="Report Bug"
            onPress={() => addBug(this.state.title, this.state.description, "louie@fdm.com")}/>
        </View>
    )
    }
}

export default CreateBug;
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