
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
import { 
    getFirestore,
    collection,
    addDoc,
    serverTimestamp
  } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
  

const firebaseConfig = {
    apiKey: "AIzaSyBjXMRDVwfGtZGJdks1gBEuxRlwxroNt9A",
    authDomain: "alt4-b3000.firebaseapp.com",
    projectId: "alt4-b3000",
    storageBucket: "alt4-b3000.firebasestorage.app",
    messagingSenderId: "532082512620",
    appId: "1:532082512620:web:18e071db5019f74d738bc9",
    measurementId: "G-ERNTPHPWZ1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = getFirestore(app);

document.getElementById("submit_form").addEventListener("click", async (event) => {
    event.preventDefault();

    const email = document.getElementById("form_email").value;
    const message = document.getElementById("form_message").value;
    const name = document.getElementById("form_name").value;

    const data = {
        name, 
        email,
        message,
        timestamp: serverTimestamp()
      };
  
      await addDoc(collection(db, 'form-submissions'), data);
});