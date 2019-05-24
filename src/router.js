import React from "react";
import { View, StatusBar, Image } from "react-native";
import { Router, Scene, Tabs, Stack } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginScreen from './containers/LoginScreen';
import RegistrationScreen from './containers/RegistrationScreen';
import HomeTab from './containers/Home/Home';
import InboxTab from './containers/Home/Inbox';
import ProfileTab from './containers/Home/Profile';
import SettinTab from './containers/Home/Setting';



const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="loginscreen"
          component={LoginScreen}
          initial
        />

        <Scene key="registerscreen" component={RegistrationScreen} hideNavBar />

        <Tabs
          key='TabScreen'
          tabs
          activeTintColor='#581845'
          inactiveTintColor='rgb(83,101,119)'
          tabBarPosition='bottom'
          activeBackgroundColor='white'
          inactiveBackgroundColor='white'

          lableStyle={{
            color: 'rgb(148,158,168)',
          }}

          tabBarStyle={{
            height: 30,
            padding: 5,
            borderTopColor: 'lightgrey',
            borderTopWidth: 2,
            marginTop: 1,
            paddingTop: 10,
            borderTopWidth: 0.7,
            borderColor: '#b7b7b7',
            borderBottomWidth: .5,
            borderColor: '#b7b7b7',
            backgroundColor: 'white', // 'black',
            opacity: 1,

          }}
          tabBarSelectedItemStyle={{
            position: 'absolute',
            borderBottomWidth: 3,
            borderBottomColor: '#581845',
          }}
          hideNavBar
        >
          <Stack tabBarLabel="Home">
            <Scene key="tab1" component={HomeTab} initial title="Home" tabBarLabel="Home"/>
          </Stack>

          <Stack tabBarLabel="Inbox">
            <Scene key="tab2" component={InboxTab} title="Inbox" tabBarLabel="Inbox"/>
          </Stack>

          <Stack tabBarLabel="Profile">
            <Scene key="tab3" component={ProfileTab} title="Profile" tabBarLabel="Profile"/>
          </Stack>

          <Stack tabBarLabel="Setting">
            <Scene key="tab4" component={SettinTab} title="Setting" tabBarLabel="Setting"/>
          </Stack>

        </Tabs>

      </Scene>
    </Router>
  );
}

class AppScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <App />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app,
  };
}

export default connect(mapStateToProps)(AppScreen);