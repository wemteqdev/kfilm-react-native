import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class CategoriesScreen extends React.Component {
  static navigationOptions = {
    title: 'Categories',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Categories Goes right here</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
