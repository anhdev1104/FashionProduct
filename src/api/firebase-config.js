// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyB7mrej_tifgupHZhjreJgWWQcT2A4YHaU',
    authDomain: 'project-45d37.firebaseapp.com',
    databaseURL: 'https://project-45d37-default-rtdb.firebaseio.com',
    projectId: 'project-45d37',
    storageBucket: 'project-45d37.appspot.com',
    messagingSenderId: '733402593543',
    appId: '1:733402593543:web:826dc8ce4ef875ed88ada2',
    measurementId: 'G-WNLKR6LSP5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
