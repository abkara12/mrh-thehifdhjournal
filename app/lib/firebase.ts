// lib/firebase.ts
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCCbpr-KJ7UDKvFQEI6r5POg-aJvk4ZTP8",
  authDomain: "mrh-thehifdhjournal.firebaseapp.com",
  projectId: "mrh-thehifdhjournal",
  storageBucket: "mrh-thehifdhjournal.firebasestorage.app",
  messagingSenderId: "1048874525743",
  appId: "1:1048874525743:web:f2a135e9ed196bc20ed2da"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
