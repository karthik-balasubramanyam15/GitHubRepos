/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import _ from 'lodash';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            repository: '',
            validateUserName: false,
            validateRepository: false,
            repos: [],
        };
        this.handleCommits = this.handleCommits.bind(this);
    }

    handleCommits() {
        let userId = !_.isEmpty(this.state.userName) ? this.state.userName : null;
        let repos = !_.isEmpty(this.state.repository) ? this.state.repository : null;
        if (_.isEmpty(userId)) {
            this.setState({
                validateUserName: true,
            });
        }
        if (_.isEmpty(repos)) {
            this.setState({
                validateRepository: true,
            });
        }
        if (!_.isEmpty(userId) && !_.isEmpty(repos)) {
            this.getRepository().then((res) => {
                this.setState({ repos: res });
            });
        }
    }

    getRepository = () => {
        let username = this.state.userName.toLowerCase().trim();
        const url = `https://api.github.com/users/${username}/repos`;
        return fetch(url).then((res) => res.json());
    }

    displayMainView() {
        console.log('IN Render: ', this.state);
        return (
            <View style={{
                flex: 1,
                marginTop: 100,
                padding: 10,
                backgroundColor: 'white',
            }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{ flex: 0.35, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16 }}>
                            GitHub Username:
                        </Text>
                    </View>
                    <View style={{ flex: 0.65 }}>
                        <TextInput
                            placeholder={this.state.validateUserName ? 'Enter Valid Username' : 'Enter your Github Username'}
                            placeholderTextColor={this.state.validateUserName ? 'red' : 'grey'}
                            style={{
                                padding: 10,
                                fontSize: 16,
                                borderColor: this.state.validateUserName ? 'red' : 'grey',
                                borderWidth: 1,
                                borderRadius: 10,
                            }}
                            value={this.state.userName}
                            spellCheck={false}
                            autoCorrect={false}
                            onChangeText={(input) => this.setState({ userName: input, validateUserName: false })}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flex: 0.35 }}>
                        <Text style={{ fontSize: 16 }}>
                            Repository Name:
                        </Text>
                    </View>
                    <View style={{ flex: 0.65, justifyContent: 'center' }}>
                        <TextInput
                            placeholder={this.state.validateRepository ? 'Enter Valid Repository' : 'Github the Repository Name'}
                            placeholderTextColor={this.state.validateRepository ? 'red' : 'grey'}
                            style={{
                                padding: 10,
                                fontSize: 16,
                                borderColor: this.state.validateRepository ? 'red' : 'grey',
                                borderWidth: 1,
                                borderRadius: 10,
                            }}
                            value={this.state.repository}
                            spellCheck={false}
                            autoCorrect={false}
                            onChangeText={(input) => this.setState({ repository: input, validateRepository: false })}
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
                    }}
                    onPress={() => this.handleCommits()} >
                    <Text style={{
                        color: '#FFFFFF',
                        fontSize: 18,
                        alignSelf: 'center',
                    }}>
                        Display Commits
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'teal' }}>
                {this.displayMainView()}
            </SafeAreaView>
        );
    }
}

export default App;

