import React, { useContext } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Alert,
} from 'react-native';
import FormButton from '../components/FormButton';


const HomeScreen = () => {
    return (
        <View className='flex-1 justify-center items-center p-7 pt-10'>
            <Text style={styles.text}>Welcome</Text>
            <FormButton
                buttonTitle="logout"
                onPress={() => Alert.alert('Logout')}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
});