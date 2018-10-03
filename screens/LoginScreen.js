import React from 'react';
import { Button, View, TextInput } from 'react-native';
import axios from 'axios';
import APP from '../constants/App';
export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  Login() {
    axios.get(`${ APP.API_BASE_URL }/user/login?email=${this.state.email}&password=${this.state.password}`)
      .then(response => {
      
      })
      .catch(() => {});
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />

        <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />

        <Button
              onPress={ this.Login }
              title="Login"
              color="#841584"
              accessibilityLabel="Login"
            />

        <Button
              onPress={() => this.props.navigation.navigate('signup')}
              title="Sign Up"
              color="#841584"
              accessibilityLabel="Sign Up"
            />
      </View>
    );
  }
}
