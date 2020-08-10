import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyARanfNQan84yOX8SGP0JL7kQ_Q8tdtTe4",
        authDomain: "clone-app-832eb.firebaseapp.com",
        databaseURL: "https://clone-app-832eb.firebaseio.com",
        projectId: "clone-app-832eb",
        storageBucket: "clone-app-832eb.appspot.com",
        messagingSenderId: "509234467406",
        appId: "1:509234467406:web:2b0bd7955b4875a3d3e91f",
        measurementId: "G-1ZZR680RKX"
      
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};