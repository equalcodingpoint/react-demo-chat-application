import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBYjVRoP7r0ZlfVKaeXwNHoGIixK5VFU60",
    authDomain: "react-demo-chat-application.firebaseapp.com",
    projectId: "react-demo-chat-application",
    storageBucket: "react-demo-chat-application.appspot.com",
    messagingSenderId: "933415990550",
    appId: "1:933415990550:web:2ebf4857dc7a95303ecc37",
    measurementId: "G-2F6E47BCWF"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;