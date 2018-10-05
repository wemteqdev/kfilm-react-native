import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Button } from 'react-native';
import APP from '../constants/App';

export default class VideoShowScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            
          </View>          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});