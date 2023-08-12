import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyBzXH77M9rOai9cZpXtHppjIQG_sZGheek",
    authDomain: "jglwhm-9c253.firebaseapp.com",
    projectId: "jglwhm-9c253",
    storageBucket: "jglwhm-9c253.appspot.com",
    messagingSenderId: "473928839285",
    appId: "1:473928839285:web:8409d084d872cfa504c83c",
    measurementId: "G-T144LJT289"
  };

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app);

