import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Index from './src/index';
export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Index />
      </View>
    );
  }
}