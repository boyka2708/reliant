import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmuPbqazGIY_HX3mfc3yAOuhgzWmjCj54",
  authDomain: "reliant-aqua-5b511.firebaseapp.com",
  projectId: "reliant-aqua-5b511",
  storageBucket: "reliant-aqua-5b511.appspot.com",
  messagingSenderId: "170281510071",
  appId: "1:170281510071:web:7ebc106fd829b5c4b71932"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export  {app,auth,db};