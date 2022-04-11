import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const UserCard = ({ data }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.infoContainer}>
                <Text>Name :</Text>
                <Text style={styles.name}>{data.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text>Email :</Text>
                <Text style={styles.email}>{data.email}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default UserCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginHorizontal: 16,
        borderColor: '#cccccc',
        borderRadius: 16,
        padding: 16,
        marginTop: 16,
        justifyContent: 'center',

    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 12
    },
    name: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'left'

    },
    email: {
        // marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        textAlign: 'left'

    },

});