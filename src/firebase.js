import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCCEaombUWbG2j8nvPSDW3mpl8HkzfAFL8",
  authDomain: "todo-list-37c01.firebaseapp.com",
  databaseURL:
    "https://todo-list-37c01-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-list-37c01",
  storageBucket: "todo-list-37c01.appspot.com",
  messagingSenderId: "16756312988",
  appId: "1:16756312988:web:8f3068a934fc5063225659",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
