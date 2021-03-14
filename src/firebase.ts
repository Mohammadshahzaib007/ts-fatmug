import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyDaTtKt27zH74Nr3QdfoP2qjikMMx2Owoo",
    authDomain: "fatmug-blog-app.firebaseapp.com",
    projectId: "fatmug-blog-app",
    storageBucket: "fatmug-blog-app.appspot.com",
    messagingSenderId: "265826967074",
    appId: "1:265826967074:web:0e7d09e6765307a79b347b"
})
;

export const auth = app.auth();

export default app
;
