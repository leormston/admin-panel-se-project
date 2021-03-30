import React, {useState, useEffect, Component} from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, List} from 'react-native';
import { db } from '../firebase';
import type {Node} from 'react';
import User from './user';




const Users = ({navigation}) => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const ref = db.collection('users');
        ref.onSnapshot((query) => {
            const objs = [];
            query.forEach((doc) => {
            objs.push({
                id: doc.id,
                ...doc.data(),
            });
            });
            setUsers(objs);
        });
    }, [])
    



    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>VIEW USERS</Text>
            <View style={styles.table}>
            <Text style={styles.username}>Username</Text>
            <Text style={styles.datecreated}>Date Created</Text>
                <Text style={styles.datecreated}>View</Text>
            </View>
            {users.map((users) => (
            <View style={styles.table} key={users.id}>
           
                <Text style={styles.username}>{users.username}</Text> 
                <Text style={styles.datecreated}>{users.created}</Text> 


                <TouchableOpacity 
                title="Edit" 
                style={styles.button}

                onPress={() => {
                    navigation.navigate('User',{users});
                    }}
                    >

                <Text style={styles.buttontext}>View</Text>
                </TouchableOpacity>


            </View>
            ))}
            
            
            

        </ScrollView>
    )
}

export default Users;
const styles = StyleSheet.create({

    container: {
        marginLeft: 15,
        marginRight: 15,
      },
    header: {
        fontSize: 50,
        fontWeight: "700",
        alignItems: 'center',
    },
    username: {
        width: "30%",
        textAlignVertical:  'center',
    },
    datecreated: {
        width: "45%",
        textAlignVertical:  'center',
        

    },
    table: {
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: 60,
        textAlignVertical:  'center',
    },
    button: 
    {
        backgroundColor: "dodgerblue",
        flex: 0,
        marginTop: 12.5,
        height: 35,
        width: 80,
        textAlignVertical:  'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttontext: {
        color: "white",
        fontSize: 18,
        fontWeight: "700",
    }
})
