import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const AdminMenu = ({navigation}) => {




    return(
        <View style={styles.container}>
            <Text style={styles.header}>ADMIN MENU</Text>
            <TouchableOpacity 
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate('User Menu')}>
                <Text style={styles.buttontext}>Manage Users</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.TouchableOpacity}>
                <Text style={styles.buttontext}>Reported Bugs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.TouchableOpacity}>
                <Text style={styles.buttontext}>Support Tickets</Text>
            </TouchableOpacity>


        </View>
    )
   
}

export default AdminMenu;

const styles = StyleSheet.create({
    header: {
        fontSize: 50,
        fontWeight: "700",
        alignItems: 'center',
    },

    TouchableOpacity: {
        height: 70,
        width: "100%",
        backgroundColor: "dodgerblue",
        textAlignVertical:  'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttontext: {
        color: "white",
        fontSize: 30,
        fontWeight: "500",
    },
    container: {
        marginLeft: 15,
        marginRight: 15,
      }
})
