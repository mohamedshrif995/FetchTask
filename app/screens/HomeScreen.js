/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    FlatList,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useSelector, useDispatch, connect } from 'react-redux';
import { getData } from '../reduxModal/actions'
import { GET_DATA } from '../reduxModal/actions'
import UserCard from '../components/UserCard';

const HomeScreen = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    const { data } = useSelector(state => state.reducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
    }, [])
    const handleNavigate = (item) => {
        navigation.navigate('Details', { item })
    }
    const renderItem = ({ item, index }) => {
        return (
            <View style={styles.cardContainer}>
                <UserCard data={item} onPress={() => handleNavigate(item)} />
            </View>
        )
    }
    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default HomeScreen
