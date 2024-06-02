import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function onUserStateChanged() {
  onAuthStateChanged(auth, (user) => {
    if (user.exists()) {
      console.log(user);
    }
  })
}

export async function login() {
  return signInWithPopup(auth, provider)
    .then((res) => {
      const user = res.user;
      console.log(user);
      return user;
    })
    .catch(console.error);
}


export async function logout() {
  signOut(auth)
    .then(() => console.log('logout!'))
    .catch(console.error);
}