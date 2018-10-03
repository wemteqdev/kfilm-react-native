import React from 'react';
import { Button, View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import APP from '../constants/App';
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
    this._handleLogin = this._handleLogin.bind(this);
  }

  _handleLogin() {
    axios.get(`${ APP.API_BASE_URL }/user/login?email=${this.state.email}&password=${this.state.password}`)
      .then(response => {
      
      })
      .catch(() => {});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style = {styles.input}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />

        <TextInput
          style = {styles.input}
          autoCapitalize="none" 
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => this.setState({password: text})}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this._handleLogin}>
             <Text  style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('signup')}>
             <Text  style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   padding: 20
  },
  input:{
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      color: '#fff'
  },
  buttonContainer:{
      backgroundColor: '#2980b6',
      paddingVertical: 15
  },
  buttonText:{
      color: '#fff',
      textAlign: 'center',
      fontWeight: '700'
  }
});