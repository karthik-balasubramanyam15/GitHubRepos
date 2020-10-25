/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class ResultsView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
        this.display = this.display.bind(this);
    }

    display(value, index) {
        console.log("Value: ", value, index)
        return (
            <View style={{ flex: 1, margin: 10 }}>
                <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{'Commit ' + index}</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 5, marginTop: 5 }}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Hash: </Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Text style={{ fontSize: 16, flexWrap: 'wrap' }}>{value.commitHash} </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 5, marginTop: 5 }}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Author: </Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Text style={{ fontSize: 16, flexWrap: 'wrap' }}>{value.author}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, marginBottom: 5, marginTop: 5 }}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Message: </Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
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
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>The commits are as under.</Text>
                </View>
                <FlatList
                    style={{ flex: 1, marginTop: 10 }}
                    keyExtractor={(item) => item.commitHash}
                    data={input}
                    renderItem={({ item, index }) =>
                        <View style={{ flex: 1, }}>
                            {this.display(item, index)}
                        </View>
                    }
                    ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 1, borderBottomColor: 'black' }} />}
                />
            </View>

        );
    }
}

export default ResultsView;
