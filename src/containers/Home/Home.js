import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../../styles/tab';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'; // New code


class Home extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarLabel: 'Home',
    title: 'Home',
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
    const { userData } = this.props
    console.log('userData-->', this.props);

    return (
      <View style={styles.container}>
        <Text>User Name: {userData.data.userName}</Text>
        {
          userData.data.fullname &&
          <Text>Full Name: {userData.data.fullname}</Text>
        }
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.login.UserData,
  };
}


export default connect(mapStateToProps)(Home);


