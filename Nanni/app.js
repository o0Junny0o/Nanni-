import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCeM1rCRrx9_VEayGBO0aas946aOZNAnaQ",
    authDomain: "nannitest-2ad96.firebaseapp.com",
    projectId: "nannitest-2ad96",
    storageBucket: "nannitest-2ad96.firebasestorage.app",
    messagingSenderId: "330907496083",
    appId: "1:330907496083:web:f711c4e666d9247ab0a766"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);