import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA1UP_P4zDJDIsYjo7C_oP5xxWdget8Qbw',
  authDomain: 'clone-ae046.firebaseapp.com',
  projectId: 'clone-ae046',
  storageBucket: 'clone-ae046.appspot.com',
  messagingSenderId: '759938525405',
  appId: '1:759938525405:web:a20afca22477defb185334',
  measurementId: 'G-ETF0BL1V0N',
};

//Connect  frontend with backend
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
