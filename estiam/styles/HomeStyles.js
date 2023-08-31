import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'rgba(51, 180, 216, 1.0)', // #33B4D8
        borderWidth: 0,
        borderColor: '#000',
        paddingTop: 10,
        paddingHorizontal: 8,
    },
    header: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        borderWidth: 0,
        borderColor: '#000',
    },
    wlcmMess: {
        paddingLeft: 10,
        color: '#FFF',
        fontSize: 24,
        // fontFamily: 'Arial',
        fontWeight: 'normal',

        borderWidth: 0,
        borderColor: '#000',
    },
    qotdMess: {
        paddingLeft: 10,
        color: '#216FBC',
        paddingBottom: 6,

        borderWidth: 0,
        borderColor: '#000',
    },



    main: {
        alignContent: 'space-between',
        justifyContent: 'space-between',
        borderWidth: 0,
        borderColor: '#000',
    },

    cardContainer: {
        flex : 1,
        backgroundColor: '#2277B6',
        minWidth: '40%',
        maxWidth: '40%',
        marginHorizontal: '5%',
        marginVertical: 15,

        borderWidth: 1,
        borderColor: '#fff4',
        borderRadius: 15,
        overflow: 'hidden',
    },
    cardPreview: {
        backgroundColor: '#fff',
        minHeight: 120,
        maxHeight: 120,
    },
    cardPreviewImg: {
        width: '100%',
        height: '100%',
    },

    cardBody: {
        justifyContent: 'space-between',
        padding: 10,
        minHeight: 80,
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',

        borderWidth: 0,
        borderColor: '#fff',
    },
    cardDetails: {
        width: '100%',
        color: '#2D9ECB',

        borderWidth: 0,
        borderColor: '#fff',
    },

})

export default HomeStyles;