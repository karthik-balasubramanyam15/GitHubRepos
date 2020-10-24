/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

class App extends Component {


    displayMainView() {
        return (
            <View style={{
                flex: 1,
                marginTop: 100,
                padding: 10,
                backgroundColor: 'white',
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flex: 0.35 }}>
                        <Text style={{ fontSize: 16 }}>
                            GitHub Username:
                        </Text>
                    </View>
                    <View style={{ flex: 0.65 }}>
                        <TextInput
                            placeholder="Enter your github username"
                            style={{
                                padding: 10,
                                fontSize: 16,
                                borderColor: 'grey',
                                borderWidth: 1,
                                borderRadius: 10,
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        height: 50,
                        backgroundColor: '#263238',
                        borderColor: '#263238',
                        borderWidth: 1,
                        borderRadius: 10,
                        marginTop: 10,
                        justifyContent: 'center',
                    }}>
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        alignSelf: 'center'
                    }}>
                        Display Commits
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'teal' }}>
                {this.displayMainView()}
            </SafeAreaView>
        );
    }
}

export default App

