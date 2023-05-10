import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseApi = `${process.env.REACT_APP_FIREBASE_API_KEY}`;

const firebaseConfig = {
  apiKey: firebaseApi,
  authDomain: "recipe-authentication-12705.firebaseapp.com",
  projectId: "recipe-authentication-12705",
  storageBucket: "recipe-authentication-12705.appspot.com",
  messagingSenderId: "444283833749",
  appId: "1:444283833749:web:433af575ccdfaa4c0eba9c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
