/* ===================================================
   FIREBASE CONFIG — shared backend for Susu JAMB Prep
   ===================================================
   This connects the app to your Firebase project so
   accounts + profile data are stored in a real shared
   database (Firestore) instead of only in the browser.

   NOTE: This apiKey is safe to be public — Firebase web
   API keys are not secret credentials. Real security comes
   from your Firestore Security Rules (set those up in the
   Firebase console before going live).
   =================================================== */

const firebaseConfig = {
  apiKey: "AIzaSyDk1lCqeFEpOxAVrJFCdu1GXcB_zKCwqkQ",
  authDomain: "yamyh-4d677.firebaseapp.com",
  projectId: "yamyh-4d677",
  storageBucket: "yamyh-4d677.firebasestorage.app",
  messagingSenderId: "1083523927820",
  appId: "1:1083523927820:web:30729f5075de7d845ac329"
};

firebase.initializeApp(firebaseConfig);

// Shared handles used by app.js
const auth = firebase.auth();
const db = firebase.firestore();

// Some mobile networks/carriers block Firestore's default
// connection method, causing "client is offline" errors even
// with a working internet connection. This makes Firestore
// auto-detect and fall back to a connection method that works
// almost everywhere.
db.settings({
  experimentalAutoDetectLongPolling: true,
  merge: true
});
