import React, {useState, useEffect, Component} from 'react';
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Button, TextInput, TouchableOpacity, List} from 'react-native';
import { db } from '../firebase';
import type {Node} from 'react';




const Bugs = ({navigation}) => {
    const [bugs, setBugs] = useState([]);
    useEffect(() => {
        const ref = db.collection('bugs');
        ref.onSnapshot((query) => {
            const objs = [];
            query.forEach((doc) => {
            objs.push({
                id: doc.id,
                ...doc.data(),
            });
            });
            setBugs(objs);
        });
    }, [])
    



    return(
        <ScrollView style={styles.container}>
            <Text style={styles.header}>VIEW BUGS</Text>     
            <View style={styles.table}>
            <Text style={styles.username}>Bug Title</Text>
            <Text style={styles.datecreated}>Date Reported</Text>
                <Text style={styles.datecreated}>View</Text>
            </View>
            {bugs.map((bugs) => (
            <View style={styles.table} key={bugs.id}>
           
                <Text style={styles.username}>{bugs.Title}</Text> 
                <Text style={styles.datecreated}>{bugs.Date}</Text> 


                <TouchableOpacity 
                title="Edit" 
                style={styles.button}

                onPress={() => {
                    navigation.navigate('Bug',{bugs});
                    }}
                    >

                <Text style={styles.buttontext}>View</Text>
                </TouchableOpacity>


            </View>
            ))}
        </ScrollView>
    )
}

export default Bugs;
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
