/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

//All Application Styles goes here
export default StyleSheet.create({
    mainRender: { flex: 1, backgroundColor: '#EDE8D7' },
    mainView1: { flex: 1, marginBottom: 25 },
    mainView2: {
        marginTop: 25,
        padding: 10,
        backgroundColor: 'white',
    },
    userInputView: { flexDirection: 'row', justifyContent: 'space-between' },
    usernameTextView: { flex: 0.35, justifyContent: 'center' },
    headerText: { fontSize: 16 },
    repositoryView: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
    errorView: { alignItems: 'center', justifyContent: 'center' },
    errorText: { color: 'red', fontSize: 16 },
    buttonStyle: {
        height: 50,
        backgroundColor: '#263238',
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        alignSelf: 'center',
    },
    resultViewRender: { flex: 1, backgroundColor: '#FFFFFF' },
    resultViewHeader: { justifyContent: 'center', alignItems: 'center', marginTop: 20 },
    resultViewHeaderText: { fontSize: 20, fontWeight: 'bold' },
    flatlistContainer: { flex: 1, marginTop: 10 },
    bottomBorder: { borderBottomWidth: 1, borderBottomColor: 'black' },
    cardView: { flex: 1, margin: 10 },
    indexView: { flex: 0.5, justifyContent: 'flex-start', alignItems: 'flex-start' },
    subheaderText: { fontSize: 16, fontWeight: 'bold' },
    subValue: { fontSize: 16, flexWrap: 'wrap' },
    cardValueView: { flexDirection: 'row', flex: 1, marginBottom: 5, marginTop: 5 },
})
