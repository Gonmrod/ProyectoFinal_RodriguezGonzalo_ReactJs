import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCnenfurUfU25pKJhgbAOZbTbBHGfZ-u6s",
  authDomain: "pf-gmr-reactjs.firebaseapp.com",
  projectId: "pf-gmr-reactjs",
  storageBucket: "pf-gmr-reactjs.appspot.com",
  messagingSenderId: "730157325016",
  appId: "1:730157325016:web:a47d8aad8c20f0268295ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);