import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;
const baseMargin = 10;

//All Application Styles goes here
export default StyleSheet.create({
    mainRender: {
        flex: 1,
        backgroundColor: '#EDE8D7',
    },
    mainView1: {
        flex: 1,
    },
    mainView2: {
        marginTop: screenHeight * baseMargin * 0.0025,
        padding: screenHeight * baseMargin * 0.001,
        backgroundColor: '#FFFFFF',
    },
    userInputView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    usernameTextView: {
        flex: 0.35,
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
    },
    repositoryView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: screenHeight * baseMargin * 0.001,
    },
    errorView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: screenWidth * baseMargin * 0.001,
    },
    errorText: {
        color: '#FF0000',
        fontSize: 16,
    },
    buttonStyle: {
        backgroundColor: '#263238',
        borderColor: '#263238',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: screenHeight * baseMargin * 0.001,
        padding: screenWidth * baseMargin * 0.0025,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        alignSelf: 'center',
    },
    resultViewRender: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    resultViewHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: screenHeight * baseMargin * 0.002,
    },
    resultViewHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    flatlistContainer: {
        flex: 1,
        marginTop: screenHeight * baseMargin * 0.001,
    },
    bottomBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#000000',
    },
    cardView: {
        flex: 1,
        margin: screenWidth * baseMargin * 0.001,
    },
    indexView: {
        flex: 0.5,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    subheaderText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subValue: {
        fontSize: 16,
        flexWrap: 'wrap',
    },
    cardValueView: {
        flexDirection: 'row',
        flex: 1,
        marginBottom: screenHeight * baseMargin * 0.001,
        marginTop: screenHeight * baseMargin * 0.001,
    },
});
