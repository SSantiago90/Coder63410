import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ4S4zWHKrQOUzh_NacReHRF4uI_fZ8pA",
  authDomain: "react-ecommerce-f00e3.firebaseapp.com",
  projectId: "react-ecommerce-f00e3",
  storageBucket: "react-ecommerce-f00e3.firebasestorage.app",
  messagingSenderId: "138011420911",
  appId: "1:138011420911:web:1a41b721ec94ac8884931a"
};

// 1. Conexión con Firebase
const app = initializeApp(firebaseConfig);

// 2. Conexión con la base de datos de Firestore
const db = getFirestore(app);
console.log(db);