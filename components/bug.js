import React, {setState, useState, useEffect, Component} from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, List, Alert, Switch} from 'react-native';
import { db } from '../firebase';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
function updateBug(id, note, iswitchValue, rswitchValue) {
    const bug = db.collection('bugs').doc(id);
    bug.update({notes: note});
    bug.update({Important: iswitchValue});
    bug.update({Resolved: rswitchValue});

  }

function deleteBug(id, {navigation}) {
    const bug = db.collection('bugs').doc(id);
    bug.delete();
    navigation.navigate("Bugs");
} 

const Bug = ({route, navigation}) => {
    var bugs = route.params.bugs;
    
    const [enteredNotes, setNotes] = useState('');
    const [iswitchValue, setiSwitchValue] = useState(bugs.Important);
    const [rswitchValue, setrSwitchValue] = useState(bugs.Resolved);
    return(
        <ScrollView style={styles.container}>
            <Text>Bug ID: </Text>
            <TextInput
            placeholder= {bugs.id.concat(" (Cannot be Modified)")} />
            <Text>Bug Title: </Text>
            <TextInput
            placeholder= {bugs.Title.concat(" (Cannot be Modified)")} />
            <Text>Date Created: </Text>
            <TextInput
            placeholder= {bugs.Date.concat(" (Cannot be Modified)")} />
            <Text>User : </Text>
            <TextInput
            placeholder= {bugs.userID.concat(" (Cannot be Modified)")} />
            <Text>Description : </Text>
            <TextInput
            placeholder= {bugs.Description.concat(" (Cannot be Modified)")}
            />
            <Text>Admin Notes :</Text>
            <TextInput
            placeholder= {bugs.notes}
            onChangeText = {text => setNotes(text)}
            />
            <Text>Current Importance : </Text>
            <View style={styles.inlineSwtich}>
                <Text  style={styles.inlineSwitch}>
                {iswitchValue ? 'Important' : 'Not Important'}
                </Text>
                <Switch
                style={styles.inlineSwtich, {marginBottom: 30}}
                title= "Mark as important"
                onValueChange={setiSwitchValue}
                value={iswitchValue} />
            </View>
            <Text>Issue Resolved : </Text>
            <View style={styles.inlineSwtich}>
                <Text  style={styles.inlineSwitch}>
                {rswitchValue ? 'Issue has been marked as resolved' : 'Issue not yet resolved'}
                </Text>
                <Switch
                style={styles.inlineSwtich, {marginBottom: 30}}
                title= "Mark as important"
                onValueChange={setrSwitchValue}
                value={rswitchValue} />
            </View>


            
            <Button 
            title ="Update Bug"
            onPress={() => updateBug(bugs.id, enteredNotes || bugs.notes, iswitchValue, rswitchValue)}/>
            
            <View style={{marginTop: 20, marginBottom: 20}}>
            <Button 
            color = "#FF4942"
            title ="Delete Reported Bug"
            onPress = {() => deleteBug(bugs.id, {navigation})}/>
            </View>

            
             
            

        </ScrollView>
    )
}

export default Bug;


const styles = StyleSheet.create({
    container: {
      marginLeft: 15,
      marginRight: 15,
    },
    inlineSwitch: {
        flex: 1,
        flexDirection: 'row',
    }
  })