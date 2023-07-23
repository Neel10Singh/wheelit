import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyA6IUN9pahuTzCdUqnQTMJu9IJOO7CKWyY',
  authDomain: 'wheel-it-111.firebaseapp.com',
  projectId: 'wheel-it-111',
  storageBucket: 'wheel-it-111.appspot.com',
  messagingSenderId: '262875147359',
  appId: '1:262875147359:web:d09755907c4dcc57a0bfea',
  measurementId: 'G-NYDNZ4VHLM',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
export const GoogleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const store = getStorage(app)
