import { StyleSheet } from 'react-native'
import { COLOR } from '../../constants/Colors'

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    ContentContainerStyle: {
        paddingHorizontal: 15,
        paddingTop: 55 + 2.5,
        paddingBottom: 15,
    },
    InputView: {
        width: '100%',
        height: 45,
        borderRadius: 15,
        color: '#000',
        backgroundColor: 'rgba(243,244,246,1)',
        elevation: 5,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        fontSize: 13,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 15,
        shadowColor: 'rgba(243,244,246,1)',
    },
    ButtonView: {
        width: '100%',
        borderRadius: 10,
        marginTop: 50,
    },
    ImageContainer: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        backgroundColor: COLOR.WHITE,
        borderRadius: 100,
        marginVertical: 20,
        padding: 3,
    },
    Image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    ImageSelectionButton: {
        position: 'absolute',
        right: 5,
        bottom: 5,
        borderRadius: 30,
        borderColor: COLOR.WHITE,
        borderWidth: 2,
        elevation: 2,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    ImageSelectionButtonGradient: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 30,
        backgroundColor: COLOR.WHITE,
    },
})