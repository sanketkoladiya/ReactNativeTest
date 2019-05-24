import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import styles from '../../styles/tab';

class Inbox extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Inbox',
    title: 'Inbox',
    headerTitleStyle: {
      alignSelf: 'center',
      color: 'black',
      fontSize: 16,
    },
    headerStyle: {
      backgroundColor: 'white',
    },
    headerRight: (
      <TouchableOpacity activeOpacity={0.5} onPress={() => Actions.loginscreen()}>
        <Text style={{ margin: 10 }} >Logout</Text>
      </TouchableOpacity>
    ),
  });

  render() {
    return (
      <View style={styles.container}>
        <Text>Inbox</Text>
      </View>
    );
  }
}

export default Inbox;