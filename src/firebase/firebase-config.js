import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCQofP6aJpcGtMTaPM6YOhU_Nl_IfhyeDI',
    authDomain: 'fashionshop-15ebd.firebaseapp.com',
    databaseURL: 'https://fashionshop-15ebd-default-rtdb.firebaseio.com',
    projectId: 'fashionshop-15ebd',
    storageBucket: 'fashionshop-15ebd.appspot.com',
    messagingSenderId: '46541005697',
    appId: '1:46541005697:web:2a98e804d937238c87fe80',
    measurementId: 'G-V11W6S6V6W',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
