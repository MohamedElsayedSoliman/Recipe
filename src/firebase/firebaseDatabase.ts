
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const dbkey=`${process.env.REACT_APP_DB_KEY}`

const secondaryfirebaseConfig = {
  apiKey: dbkey,
  authDomain: "recipe-data-64db5.firebaseapp.com",
  projectId: "recipe-data-64db5",
  storageBucket: "recipe-data-64db5.appspot.com",
  messagingSenderId: "1050571383630",
  appId: "1:1050571383630:web:7831f548930ef3626bf41f",
  measurementId: "G-Z54P62MS9S",
};

const secondaryApp = initializeApp(secondaryfirebaseConfig, "secondary");

export const db = getFirestore(secondaryApp);
