export default {
    config: {
        apiKey: process.env.VUE_APP_FIREBASE_API_KEY ?? "AIzaSyB6fYQ9GrlwLv-7VRMaaiNFDfm3cHXY4r4",
        authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN ?? "vanguardia-hair-studio.firebaseapp.com",
        storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET ?? "vanguardia-hair-studio.firebasestorage.app",
        databaseURL: process.env.VUE_APP_FIREBASE_DB_URL ?? "https://vanguardia-hair-studio.firebaseio.com",
        projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID ?? "vanguardia-hair-studio",
        messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID ?? "946317675664",
        appId: process.env.VUE_APP_FIREBASE_APP_ID ?? "1:946317675664:web:693d9267f713340769dc15",
        measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID ?? "G-VREF4TQEH0"
    }
}
