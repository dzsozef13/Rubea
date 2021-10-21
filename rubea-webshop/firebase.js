import firebase from '@firebase/app'
import '@firebase/firestore'
import '@firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDUEuKnEPo95ezQan1V4qDsyJ4lYWt1vCs",
  authDomain: "rubea-webshop.firebaseapp.com",
  databaseURL: "https://rubea-webshop-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rubea-webshop",
  storageBucket: "rubea-webshop.appspot.com",
  messagingSenderId: "179579247424",
  appId: "1:179579247424:web:c3b90a6e98f3b22f9c38a5",
  measurementId: "G-G7HQ0GXBYQ"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const dbMenuAdd = db.collection('testProducts');

export var docRef = db.collection("testProducts").doc("a61elX98SfzoI10hy7wd");