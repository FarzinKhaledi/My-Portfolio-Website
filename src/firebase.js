import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAPkv_qVzaLaPoQ38Yj4SGvr9qUgLHHgFA',
  authDomain: 'my-portfolio-cd40b.firebaseapp.com',
  projectId: 'my-portfolio-cd40b',
  storageBucket: 'my-portfolio-cd40b.appspot.com',
  messagingSenderId: '261778363149',
  appId: '1:261778363149:web:7ab4ccdab73800638f1644',
  measurementId: 'G-YXQNW0VE5R',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
