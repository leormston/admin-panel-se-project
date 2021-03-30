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


const UserMenu = ({navigation}) => {




    return(
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate('Users')}>
                <Text style={styles.buttontext}>View Users</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.TouchableOpacity}
            onPress={() => navigation.navigate('Create User')}>
                <Text style={styles.buttontext}>Create User</Text>
            </TouchableOpacity>


            



        </View>
    )
   
}

export default UserMenu;

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
