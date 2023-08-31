import { StyleSheet } from 'react-native';

const ProfileStyles = StyleSheet.create({
    body: {
        flex: 1,
        alignContent: 'center',
        alignItems: 'center',

    },
    userAvatar: {
        width: 160,
        height: 160,
        marginVertical: 40,
    },
    editBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '50%',
        minHeight: 40,
        backgroundColor: "#05015E",
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 15,
        marginVertical: 40,
    },
    editBtnLabel: {
        color: "#fff",
        fontSize: 15,
        fontWeight: 'bold',
    },
})

export default ProfileStyles;

