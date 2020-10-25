/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import _ from 'lodash';

class ResultsView extends Component {


    display(value) {
        return (
            <View style={{ flex: 1, margin: 10 }}>
                <Text>{value.commitHash}</Text>
                <Text>{value.author}</Text>
                <Text>{value.commitMessage}</Text>
            </View>
        )
    }


    render() {
        let input = this.props && this.props.data && this.props.data.length > 0 ? this.props.data : null
        console.log("Input: ", input)
        return (
            <ScrollView>
                <View style={{ flex: 1, backgroundColor: '#ADD8E6' }}>
                    {
                        input && input.length > 0 ? input.map((value) => {
                            return <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }}>
                                {this.display(value)}
                            </View>
                        })
                            : null
                    }
                </View>
            </ScrollView>
        );
    }
}

export default ResultsView;
