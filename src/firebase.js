import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig= {
    apiKey: 'AIzaSyDjJAuIR4SXYp90IcIP0BeDKZwLAzJirKg',
    authDomain: 'my-website-5cd3e.firebaseapp.com',
    projectId: 'my-website-5cd3e',
    storageBucket: 'my-website-5cd3e.appspot.com',
    messagingSenderId: '493637542163',
    appId: '1:493637542163:web:55534fe544fcb4167b3ae6',
    measurementId: 'G-SBYQ2R7L06',
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);
