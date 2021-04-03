import React, {setState, useState, useEffect, Component} from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, List, Alert, Switch} from 'react-native';
import { db } from '../firebase';
import {fire} from '../firebase';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

import firebase from 'firebase/app';



function updateTicket(id, note, iswitchValue, rswitchValue) {
    const ticket = db.collection('tickets').doc(id);
    ticket.update({notes: note});
    ticket.update({Important: iswitchValue});
    ticket.update({Resolved: rswitchValue});

  }

function deleteTicket(id, {navigation}) {
    const ticket = db.collection('tickets').doc(id);
    ticket.delete();
    navigation.navigate("Tickets");
}

const singleTicket = ({route, navigation}) => {
    var tickets = route.params.tickets;


    const [enteredNotes, setNotes] = useState('');
    const [iswitchValue, setiSwitchValue] = useState(tickets.Important);
    const [rswitchValue, setrSwitchValue] = useState(tickets.Resolved);
    return(
        <ScrollView style={styles.container}>
                    <Text>Ticket ID: </Text>
                    <TextInput
                    placeholder= {tickets.id.concat(" (Cannot be Modified)")} />
                    <Text>Ticket Title: </Text>
                    <TextInput
                    placeholder= {tickets.Title.concat(" (Cannot be Modified)")} />
                    <Text>Date Created: </Text>
                    <TextInput
                    placeholder= {tickets.Date.concat(" (Cannot be Modified)")} />
                    <Text>User : </Text>
                    <TextInput
                    placeholder= {tickets.userID.concat(" (Cannot be Modified)")} />
                    <Text>Description : </Text>
                    <TextInput
                    placeholder= {tickets.Description.concat(" (Cannot be Modified)")}
                    />
                    <Text>Admin Notes :</Text>
                    <TextInput
                    placeholder= {tickets.notes}
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
                    title ="Update Ticket"
                    onPress={() => updateTicket(tickets.id, enteredNotes || tickets.notes, iswitchValue, rswitchValue)}/>

                    <View style={{marginTop: 20, marginBottom: 20}}>
                    <Button
                    color = "#FF4942"
                    title ="Delete Reported Ticket"
                    onPress = {() => deleteTicket(tickets.id, {navigation})}/>
                    </View>





                </ScrollView>
    )
}

export default singleTicket;


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