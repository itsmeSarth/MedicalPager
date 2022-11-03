import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyC4_0ZYaRdkqVwPup34DAnXprsn_ab7aaI",
        authDomain: "meet-e4d15.firebaseapp.com",
        projectId: "meet-e4d15",
        storageBucket: "meet-e4d15.appspot.com",
        messagingSenderId: "149973460749",
        appId: "1:149973460749:web:57399fa2264fe50ea2b244"
      
});

var db = firebaseApp.firestore();

export { db };
