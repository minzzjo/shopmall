import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { get, getDatabase, ref, set } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

// Google Authentication
export function onUserStateChanged(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
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

// Realtime Database - Products
export async function addNewProduct(image, product) {
  const id = uuid()
  return set(ref(database, `/product/${id}`), {
    ...product,
    id, price: parseInt(product.price), image, options: product.options.split(''),
  })
}

export async function getProducts() {
	return get(ref(database, 'products')).then((snapshot) => {
		if (snapshot.exists()) {
			return Object.values(snapshot.val());
		}
	});
}