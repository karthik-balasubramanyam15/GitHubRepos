/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './Style'
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
            <View style={styles.cardView}>
                <View style={styles.indexView}>
                    <Text style={styles.subheaderText}>{'Commit ' + (index + 1)}</Text>
                </View>
                <View style={styles.cardValueView}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={styles.subheaderText}>Hash: </Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Text style={styles.subValue}>{value.commitHash} </Text>
                    </View>
                </View>
                <View style={styles.cardValueView}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={styles.subheaderText}>Author: </Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Text style={styles.subValue}>{value.author}</Text>
                    </View>
                </View>
                <View style={styles.cardValueView}>
                    <View style={{ flex: 0.2 }}>
                        <Text style={styles.subheaderText}>Message: </Text>
                    </View>
                    <View style={{ flex: 0.75 }}>
                        <Text style={styles.subValue}>{value.commitMessage}</Text>
                    </View>
                </View>
            </View>
        )
    }


    render() {
        let input = this.props && this.props.data && this.props.data.length > 0 ? this.props.data : null
        console.log("Input: ", input)
        return (
            <View style={styles.resultViewRender}>
                <View style={styles.resultViewHeader}>
                    {input && input.length > 25 ?
                        <Text style={styles.resultViewHeaderText}>Displaying Top 25 Commits</Text> :
                        <Text style={styles.resultViewHeaderText}>Displaying All Available Commits</Text>
                    }
                    {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{(input && input.length) + ' commit' + (input && input.length > 1 ? 's ' : '') + 'found'}</Text> */}
                </View>
                <FlatList
                    style={styles.flatlistContainer}
                    keyExtractor={(item) => item.commitHash}
                    data={input && input.reverse()}
                    renderItem={({ item, index }) => index < 25 ?
                        <View style={{ flex: 1 }}>
                            {this.display(item, index)}
                        </View> : null
                    }
                    ItemSeparatorComponent={() => <View style={styles.bottomBorder} />}
                />
            </View>

        );
    }
}

export default ResultsView;
