/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, SafeAreaView } from 'react-native';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
        <View style={{ margin: 10, backgroundColor: 'green' }}>
          <Text>Hello World</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default App

