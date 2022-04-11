import React from 'react'
import { View, Text } from 'react-native'
import UserDetails from '../components/UserDetails'
const DetailsScreen = ({ route }) => {
    // console.log(`propsprops`, props)
    const { params } = route
    const { item } = params
    return (
        <View style={{ flex: 1 }}>
            <UserDetails item={item} />
        </View>
    )
}

export default DetailsScreen