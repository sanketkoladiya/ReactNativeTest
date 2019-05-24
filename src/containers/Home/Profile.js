import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import styles from '../../styles/tab';

class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Profile',
    title: 'Profile',
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
          <Text>Profile</Text>
      </View>
    );
  }
}

export default Profile;