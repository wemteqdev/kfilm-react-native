import React from 'react';
import { Button, View, TextInput } from 'react-native';
import  APP from '../constants/App';

export default class SignUpScreen extends React.Component {
  static navigationOptions = {
    title: 'SignUp',
  };

  constructor(props) {
    super(props);
    this.state = { name: '',  email: '', password: '', password_confirmation: '' };
    this._handleSignUp = this._handleSignUp.bind(this);
  }

  _handleSignUp() {
    axios.post(`${APP.API_BASE_URL}/user/register`, {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        confirm_password: this.state.confirm_password
      })
      .then( response => {
        this.props.navigation.navigate('home');
      })
      .catch(error => {
          this.setState({
              errors: error.response.data.error,
          });
      });
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style = {styles.input}
          autoCapitalize="none"
          placeholder="Name"
          onChangeText={(text) => this.setState({name: text})}
        />

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

        <TextInput
          style = {styles.input}
          autoCapitalize="none" 
          placeholder="Password Confirmation"
          secureTextEntry
          onChangeText={(text) => this.setState({confirm_password: text})}
        />

        <TouchableOpacity style={styles.buttonContainer} onPress={this._handleSignUp}>
             <Text  style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity> 

        <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('login')}>
             <Text  style={styles.buttonText}>LOGIN</Text>
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