import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzUuYkGdBDU7tB1i7-xNv7OsEaq7sMqRs",
  authDomain: "alhama-gallery.firebaseapp.com",
  projectId: "alhama-gallery",
  storageBucket: "alhama-gallery.appspot.com",
  messagingSenderId: "869584634674",
  appId: "1:869584634674:web:f04d10a505e9dc40d6cd2b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };