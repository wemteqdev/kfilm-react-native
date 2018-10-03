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
  }

  SignUp() {
    console.log('signup');
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Name"
          onChangeText={(text) => this.setState({name: text})}
        />

        <TextInput
          style={{height: 40}}
          placeholder="Email"
          onChangeText={(text) => this.setState({email: text})}
        />


        <TextInput
          type="password"
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(text) => this.setState({password: text})}
        />


        <TextInput
          type="password"
          style={{height: 40}}
          placeholder="Password Confirmation"
          onChangeText={(text) => this.setState({password_confirmation: text})}
        />
        

        <Button
              onPress={() => this.props.navigation.navigate('signup')}
              title="Sign Up"
              color="#841584"
              accessibilityLabel="Sign Up"
            />

        <Button
              onPress={ this.Login }
              title="Login"
              color="#841584"
              accessibilityLabel="Login"
            />
      </View>
    );
  }
}
