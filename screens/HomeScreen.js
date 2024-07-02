import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import FormButton from '../components/FormButton';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false); // State pour gérer le chargement
    const auth = getAuth();
    const navigation = useNavigation();

    useEffect(() => {
        const currentUser = auth.currentUser;
        setUser(currentUser);
    }, []);

    const handleSignOut = () => {
        setLoading(true); // Activer le chargement pendant le processus de déconnexion
        signOut(auth)
            .then(() => {
                setLoading(false); // Désactiver le chargement après la déconnexion réussie
                Alert.alert("Logged out successfully!", "Logged out successfully!");
                navigation.replace('Login');
            })
            .catch((error) => {
                setLoading(false); // Désactiver le chargement en cas d'erreur
                Alert.alert("Error", error.message);
            });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user?.email}</Text>
            <FormButton
                buttonTitle="Logout"
                onPress={handleSignOut}
            />
            <Text style={{ marginTop: 20, marginBottom: 20 }}>
                {loading && <ActivityIndicator size="large" />}
            </Text>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
});