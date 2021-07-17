import  firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAi6NvnKFur8ayvxGxDYaLS2ThAqMoUlQU",
  authDomain: "new-project-b8582.firebaseapp.com",
  databaseURL: "https://new-project-b8582-default-rtdb.firebaseio.com",
  projectId: "new-project-b8582",
  storageBucket: "new-project-b8582.appspot.com",
  messagingSenderId: "265402015578",
  appId: "1:265402015578:web:aaeeb7c6a304daca641d63",
  measurementId: "G-P6TBTMEW8E"
});

const firestore = app.firestore();
export const database ={
  folders: firestore.collection('folders'),
  files: firestore.collection('files'),
  formatDoc: doc =>{
    return {id:doc.id, ...doc.data()}
  } ,
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage();
export const auth = app.auth();
export default app;
  