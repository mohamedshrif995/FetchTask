import React from 'react'
import { View, Text } from 'react-native'
import UserDetails from '../components/UserDetails'
const DetailsScreen = ({ route }) => {
    const { params } = route
    const { item } = params
    return (
        <View style={{ flex: 1 }}>
            <UserDetails item={item} />
        </View>
    )
}

export default DetailsScreen