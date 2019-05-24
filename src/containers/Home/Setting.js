import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import styles from '../../styles/tab';

class Setting extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'setting',
    title: 'setting',
    headerTitleStyle: {
      alignSelf: 'center',
      color: 'black',
      fontSize: 16,
    },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerRight: (
      <TouchableOpacity activeOpacity={0.5} onPress={() =>  Actions.loginscreen()}>
        <Text style={{ margin: 10 }} >Logout</Text>
      </TouchableOpacity>
    ),
  });

  render() { 
    return (
      <View style={styles.container}>
          <Text>Settings</Text>
      </View>
    );
  }
}

export default Setting;