import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const UserDetails = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text>Name :</Text>
                <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text>Username :</Text>
                <Text style={styles.name}>{item.username}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text>Phone :</Text>
                <Text style={styles.name}>{item.phone}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text>Email :</Text>
                <Text style={styles.email}>{item.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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


export default UserDetails

