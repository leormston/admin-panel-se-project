import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import CreateUser from './components/create-user';
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
import UserMenu from './components/create-user';

function addUser(cusername) {
  db.collection("users").doc(cusername).set({
    username: cusername + "@fdm.co.uk",
    password: "Lovelace123",
})
}


const App: () => Node = () => {
  const [users, setUsers] = useState([]);
  const ref = db.collection('users');

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

  


  return (
    <SafeAreaView >
      <StatusBar  />
      <View>
        <Text>Pow</Text>
        {users.map((obj) => (
        <View id={obj.id}>
          <Text>Username: {obj.username}, Password: {obj.password}</Text>
        </View>
        
          ))}
          <Button title="press to add user" onPress={() => addUser("louie")} />
      </View>
      <CreateUser />
    </SafeAreaView>
  );
};



export default App;
