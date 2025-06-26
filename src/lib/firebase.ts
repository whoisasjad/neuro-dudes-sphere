
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwYruygD-9SDlb1pGwRO5X3_pauZDttBM",
  authDomain: "blogs-test-58b9d.firebaseapp.com",
  databaseURL: "https://blogs-test-58b9d-default-rtdb.firebaseio.com",
  projectId: "blogs-test-58b9d",
  storageBucket: "blogs-test-58b9d.firebasestorage.app",
  messagingSenderId: "639855099513",
  appId: "1:639855099513:web:ded6beea6c58e73b321ea8",
  measurementId: "G-SRCS943N0T"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
