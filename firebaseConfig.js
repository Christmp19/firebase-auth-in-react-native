// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence, signInWithEmailAndPassword } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyAbUDBsWHU7Vvzhtq2D4weR-9pcVwPZ3EE",
    authDomain: "social-app-3b654.firebaseapp.com",
    projectId: "social-app-3b654",
    storageBucket: "social-app-3b654.appspot.com",
    messagingSenderId: "163330744697",
    appId: "1:163330744697:web:df6579145f2933d0068fa8"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

const handleLogin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        throw new Error(error.message);
    }
};

export { auth, app, handleLogin };