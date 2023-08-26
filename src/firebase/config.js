import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;