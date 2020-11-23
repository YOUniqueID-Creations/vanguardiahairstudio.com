import Firebase from 'firebase/app'
import credentials from '../credentials'

export const LFirebase = Firebase.initializeApp(credentials.config);
