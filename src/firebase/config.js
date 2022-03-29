import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA9-vXIwCXj-nG7ioC61LOEgYLB_Fymzlo",
    authDomain: "udemy-vue-firebase-sites-a263f.firebaseapp.com",
    // databaseURL: "https://udemy-vue-firebase-sites-a263f.firebaseio.com",
    projectId: "udemy-vue-firebase-sites-a263f",
    storageBucket: "udemy-vue-firebase-sites-a263f.appspot.com",
    messagingSenderId: "419966689121",
    appId: "1:419966689121:web:6aeadbab12a2a35f87ef20"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore service
const db = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timestamp }  