//firebase config key set up

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//your web app's firebase applications
const firebaseConfig={
    apiKey: "AIzaSyBEfWBW3yeZJe1HDXgyktLYKOLQYTwgtjY",
    authDomain: "trial-735e3.firebaseapp.com",
    projectId: "trial-735e3",
    storageBucket: "trial-735e3.appspot.com",
    messagingSenderId: "895516772103",
    appId: "1:895516772103:web:1bde6450907397bba227a2",
    measurementId: "G-QSMK3T6HLB"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export{firebase};