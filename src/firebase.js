import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: 'wheelit-updated.firebaseapp.com',
  projectId: 'wheelit-updated',
  storageBucket: 'wheelit-updated.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASURMENT_ID,
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const storage = getStorage(app)
export const db = getFirestore(app)
export const auth = getAuth()
