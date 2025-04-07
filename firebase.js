import { initializeApp } from 'firebase/app'
import { initializeAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB6fYQ9GrlwLv-7VRMaaiNFDfm3cHXY4r4",
    authDomain: "vanguardia-hair-studio.firebaseapp.com",
    databaseURL: "https://vanguardia-hair-studio.firebaseio.com",
    projectId: "vanguardia-hair-studio",
    storageBucket: "vanguardia-hair-studio.firebasestorage.app",
    messagingSenderId: "946317675664",
    appId: "1:946317675664:web:693d9267f713340769dc15",
    measurementId: "G-VREF4TQEH0"
  };

export const firebaseApp = initializeApp(firebaseConfig)
export const analytics = initializeAnalytics(firebaseApp);
