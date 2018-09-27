import React from 'react';
import { Button, View, TextInput } from 'react-native';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  Login() {
    console.log('login');
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
              accessibilityLabel="Sign Up"
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
