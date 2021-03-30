import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import CreateUser from './components/create-user';
import Users from './components/users';
import AdminMenu from './components/admin-menu';
import UserMenu from './components/user-menu';
import User from './components/user';
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