import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import CreateUser from './components/create-user';
import Users from './components/users';
import AdminMenu from './components/admin-menu';
import UserMenu from './components/user-menu';
import User from './components/user';
import Bugs from './components/bugs';
import Bug from './components/bug';
import BugMenu from './components/bug-menu';
import CreateBug from './components/create-bug.js';
import TicketMenu from './components/ticket-main.js';
import CreateTicket from './components/create-ticket.js';
import Tickets from './components/tickets.js';
import singleTicket from './components/singleTicket.js';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import { db } from './firebase';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App: () => Node = () => {

  const Stack = createStackNavigator();  


  return (

        <NavigationContainer style={styles.container}>
          <Stack.Navigator initialRouteName="Admin Menu">
            <Stack.Screen  name="Admin Menu" component={AdminMenu} /> 
            <Stack.Screen name="User Menu" component={UserMenu} />
            <Stack.Screen name="Users" component={Users} />
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="Create User" component={CreateUser} />
            <Stack.Screen name="Bugs" component={Bugs} />
            <Stack.Screen name="Bug" component={Bug} />
            <Stack.Screen name="Bug Menu" component={BugMenu} />
            <Stack.Screen name="Report Bug" component={CreateBug} />
            <Stack.Screen name="Ticket Menu" component={TicketMenu} />
            <Stack.Screen name="Create Ticket" component={CreateTicket} />
            <Stack.Screen name="Tickets" component={Tickets} />
            <Stack.Screen name="Ticket" component={singleTicket} />
          </Stack.Navigator>
        </NavigationContainer>


      

  );
};



export default App;


const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
  }
})