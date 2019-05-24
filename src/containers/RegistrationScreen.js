import React from 'react'
import { View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import styles from '../styles/registration';
import { Actions } from 'react-native-router-flux'; // New code
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginAction from './../actions/loginAction';


class RegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNameColor: '#581845',
      inputNameError: '',
      inputEmailColor: '#581845',
      inputEmailError: '',
      inputPasswordColor: '#581845',
      inputPasswordError: '',
      inputConfirmPasswordColor: '#581845',
      inputConfirmPasswordError: '',
      name: undefined,
      email: undefined,
      password: undefined,
      confirmPassword: undefined,
    };
  }

  validateName(name) {
    if (!name) {
      this.setState({
        inputNameColor: '#581845',
        inputNameError: 'Name is required',
      });
    } else {
      this.setState({
        name,
        inputNameColor: '#581845',
        inputNameError: '',
      });
    }
    this.setState({ name });
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

  validateConfirmPassword(confirmPassword) {
    if (!confirmPassword) {
      this.setState({
        inputConfirmPasswordColor: '#581845',
        inputConfirmPasswordError: 'Confirm Password is required',
      });
    } else if (this.state.password !== confirmPassword) {
      this.setState({
        inputConfirmPasswordColor: '#581845',
        inputConfirmPasswordError: 'Confirm Password should match with Password',
      });
    } else {
      this.setState({
        confirmPassword,
        inputConfirmPasswordColor: '#581845',
        inputConfirmPasswordError: '',
      });
    }
    this.setState({ confirmPassword });
  }

  onSubmit() {

    const userData = {
      userName: this.state.email,
      password: this.state.password,
      fullname: this.state.name
    }
    this.props.actions.userRegister(userData)

    Actions.push('TabScreen');


  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.logoContainer}>
          </View>

          <View style={styles.bottomContainer}>


            <Text style={styles.loginText}>SignUp</Text>

            <View style={styles.inputeTextBox}>
              <TextInput
                label=''
                returnKeyType="next"
                style={styles.formInput}
                keyboardType="email-address"
                placeholder='Name'
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={() => this.passwordInput.focus()}
                underlineColorAndroid="transparent"
                onChangeText={(name) => { this.validateName(name); }}
                value={this.state.name}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputNameError}</Text>

              <TextInput
                label=''
                placeholder='Email'
                returnKeyType="go"
                style={styles.formInput}
                ref={(input) => this.passwordInput = input}
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

              <TextInput
                label=''
                placeholder='Confirm Password'
                returnKeyType="go"
                secureTextEntry
                style={styles.formInput}
                ref={(input) => this.passwordInput = input}
                underlineColorAndroid="transparent"
                onChangeText={(confirmPassword) => { this.validateConfirmPassword(confirmPassword); }}
                value={this.state.cpassword}
                tintColor='black'
              />
              <Text style={styles.helperText}>{this.state.inputConfirmPasswordError}</Text>

            </View>

            <TouchableOpacity
              style={styles.btnSignInContainer}
              onPress={() => {
                if (
                  this.state.name !== undefined
                  && this.state.email !== undefined && this.state.email !== ''
                  && this.state.password !== undefined && this.state.password !== ''
                  && this.state.confirmPassword !== undefined
                  && this.state.password === this.state.confirmPassword
                ) {

                  this.onSubmit()
                }
              }}
            >
              <Text style={styles.btnSigninText}>Register</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { Actions.push('loginscreen'); }}>
              <Text style={styles.dntAccStyle}>Already Have an account? Sign In</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);

