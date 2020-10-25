/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

class ResultsView extends Component {
    render() {
        console.log("ResultsView: ", this.props.data)
        return (
            <View style={{ flex: 1, backgroundColor: '#ADD8E6' }}>
                <Text>Will Output Results here</Text>
            </View>
        );
    }
}

export default ResultsView;
