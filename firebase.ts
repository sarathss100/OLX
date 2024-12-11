import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDKtm_6YqSVi3hO_-MGw7RfybvA22E23y8',
  authDomain: 'olxclone-3654d.firebaseapp.com',
  projectId: 'olxclone-3654d',
  storageBucket: 'olxclone-3654d.firebasestorage.app',
  messagingSenderId: '912776447790',
  appId: '1:912776447790:web:36e34d822fb99a586edcbf'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
// const db = getFirestore(app);

// const signup = async function(name, email, password) {
//     try {
//         const response = await createUserWithEmailAndPassword(auth, email, password);
//         const user = response.user;
//         await addDoc(collection(db, 'user'), {
//             uid: user.uid,
//             name,
//             authProvider: 'local',
//             email 
//         });
//     } catch (error) {
//         console.log(error);
//         toast.error(error.code.split('/')[1].split('-').join(' '));
//     }
// };

// const login = async function(email, password) {
//     try {
//         await signInWithEmailAndPassword(auth, email, password);
//     } catch (error) {
//         console.log(error);
//         toast.error(error.code.split('/')[1].split('-').join(' '));
//     }
// };

// const logout = function() {
//     signOut(auth);
// };

export {auth, googleProvider};