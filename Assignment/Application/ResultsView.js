/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import _ from 'lodash';

class ResultsView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.display = this.display.bind(this);
    }

    display(value) {
        return (
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 5, marginTop: 5 }}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={{ fontSize: 16 }}>Hash: </Text>
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <Text style={{ fontSize: 16, flexWrap: 'wrap' }}>{value.commitHash} </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 5, marginTop: 5 }}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={{ fontSize: 16 }}>Author: </Text>
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <Text style={{ fontSize: 16, flexWrap: 'wrap' }}>{value.author}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 5, marginTop: 5 }}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={{ fontSize: 16 }}>Message: </Text>
                    </View>
                    <View style={{ flex: 0.8 }}>
                        <Text style={{ fontSize: 16, flexWrap: 'wrap' }}>{value.commitMessage}</Text>
                    </View>
                </View>
            </View>
        )
    }


    render() {
        let input = this.props && this.props.data && this.props.data.length > 0 ? this.props.data : null
        console.log("Input: ", input)
        return (
            <FlatList
                style={{ flex: 1, backgroundColor: '#ADD8E6' }}
                keyExtractor={(item) => item.commitHash}
                data={input}
                renderItem={({ item }) =>
                    <View style={{ flex: 1, }}>
                        {this.display(item)}
                    </View>
                }
                ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />}
            />

        );
    }
}

export default ResultsView;
