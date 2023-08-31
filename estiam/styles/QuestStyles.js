import { StyleSheet } from 'react-native';

const QuestStyles = StyleSheet.create({
    body: {
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: "#33B4D8",
    },
    qCount: {
        fontSize: 18,
        fontWeight: '600',
    },
    qScore: {
        fontSize: 18,
        fontWeight: '600',
    },





    main: {
        flex: 1,
        borderWidth: 0,
        borderColor: '#000',
    },
    qTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#05015E",
        borderWidth: 0,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    answerSafeArea: {
        paddingVertical: 10,
        borderWidth: 0,
        borderColor: '#000',
    },
    answerBlock: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderWidth: 0,
        borderColor: '#000',
    },
    answerBtnStandard: {
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minWidth: "80%",
        maxWidth: "80%",

        borderWidth: 1,
        borderColor: '#69D3E8',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginVertical: 10,
        paddingVertical: 10,
    },
    answerBtnSelected: {
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minWidth: "80%",
        maxWidth: "80%",

        borderWidth: 1,
        borderColor: '#69D3E8',
        backgroundColor: '#33B4D8',
        borderRadius: 12,
        marginVertical: 10,
        paddingVertical: 10,
    },

    answerTitleStandard: {
        color: '#05015E',
    },
    answerTitleSelected: {
        color: '#fff',
    },





    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        minHeight: 80,
        paddingBottom: 40,
        borderWidth: 0,
        borderColor: '#000',
    },
    submitBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        minHeight: 50,
        backgroundColor: "#05015E",
        borderWidth: 0,
        borderColor: '#000',
        borderRadius: 15,
    },
    submitBtnLabel: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
    },


    scoreText: {
        color: "#05015E",
        fontSize: 18,
        fontWeight: 'bold',
    },
    scoreMain: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    qTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#05015E",
        borderWidth: 0,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

})

export default QuestStyles;