import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDmz7tg4H3ktkiLf-AwDDzj5d91pAM1YsM",
    authDomain: "whatsapp-clone-52138.firebaseapp.com",
    projectId: "whatsapp-clone-52138",
    storageBucket: "whatsapp-clone-52138.appspot.com",
    messagingSenderId: "1074651037353",
    appId: "1:1074651037353:web:79ac595f02ba36b737f3b8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth= firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth , provider}
  export default db