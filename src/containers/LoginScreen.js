import React from 'react'
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../styles/login';
import { Actions } from 'react-native-router-flux'; // New code
import { login } from '../reducers';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from './../actions/loginAction';


class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputEmailColor: '#581845',
      inputEmailError: '',
      inputPasswordColor: '#581845',
      inputPasswordError: '',
      email: '',
      password: '',

    };
    this.onSubmit = this.onSubmit.bind(this);
  }


  validateEmail(email) {
    // eslint-disable-next-line no-useless-escape
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(email)) {
      this.setState({
        inputEmailColor: '#581845',
        inputEmailError: 'Please enter a valid email address.',
      });
    } else {
      this.setState({
        email,
        inputEmailColor: '#581845',
        inputEmailError: '',
        errorMessage: '',
      });
    }
    this.setState({ email });
  }

  validatePassword(password) {
    if (!password) {
      this.setState({
        inputPasswordColor: '#581845',
        inputPasswordError: 'Password is required',
      });
    } else {
      this.setState({
        password,
        inputPasswordColor: '#581845',
        inputPasswordError: '',
      });
    }
    this.setState({ password });
  }

  onSubmit() {
   
    const userData = {
      userName: this.state.email,
      password: this.state.password
    }
    this.props.actions.userLogin(userData)
   
      Actions.push('TabScreen');
    

  }

  render() {


    


    return (
      <View style={styles.container}>


        <ScrollView>
          <View style={styles.logoContainer}>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.loginText}>Login</Text>

            <View style={styles.inputeTextBox}>
              <TextInput
                label=''
                returnKeyType="next"
                style={styles.formInput}
                keyboardType="email-address"
                placeholder='Email'
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                underlineColorAndroid="transparent"
                onChangeText={(email) => { this.validateEmail(email); }}
                value={this.state.email}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputEmailError}</Text>

              <TextInput
                label=''
                placeholder='Password'
                returnKeyType="go"
                secureTextEntry
                style={styles.formInput}
                ref={(input) => this.passwordInput = input}
                underlineColorAndroid="transparent"
                onChangeText={(password) => { this.validatePassword(password); }}
                value={this.state.password}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputPasswordError}</Text>
            </View>

            <TouchableOpacity
              style={styles.btnSignInContainer}
              onPress={() => {
                if (this.state.email !== undefined && this.state.email !== '' && this.state.password !== undefined && this.state.password !== '') {
                  this.onSubmit();
                }
              }}
            >
              <Text style={styles.btnSigninText} >Login</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { Actions.push('registerscreen'); }}>
              <Text style={styles.dntAccStyle}>Do not have an account? Sign Up</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log('-----', state);


  return {
    


  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);


