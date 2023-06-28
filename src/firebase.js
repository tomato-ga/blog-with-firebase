import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCSK32SvvMz5U4_ll_qhHWNA52oUtRGkCY',
  authDomain: 'reactblog-deeb4.firebaseapp.com',
  projectId: 'reactblog-deeb4',
  storageBucket: 'reactblog-deeb4.appspot.com',
  messagingSenderId: '347038669662',
  appId: '1:347038669662:web:ebb881687f63e1ccabcdcf',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
