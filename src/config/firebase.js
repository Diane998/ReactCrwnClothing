import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDq_T8tOtvgm7rjPRGK1_QZ2Obz6mmHk1M',
  authDomain: 'crwn-clothing-3dc3f.firebaseapp.com',
  projectId: 'crwn-clothing-3dc3f',
  storageBucket: 'crwn-clothing-3dc3f.appspot.com',
  messagingSenderId: '401091160751',
  appId: '1:401091160751:web:e7ed118d09cd355dd1c25a',
  measurementId: 'G-TLVL3VTMEW'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
