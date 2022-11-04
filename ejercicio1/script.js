
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, deleteDoc } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1eBma2RVOF6iF0g-t1hhQiprZyhlAGQk",
    authDomain: "ejercicio1-4nov.firebaseapp.com",
    projectId: "ejercicio1-4nov",
    storageBucket: "ejercicio1-4nov.appspot.com",
    messagingSenderId: "829862370957",
    appId: "1:829862370957:web:84c91443cbfad92496ccc4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const querySnapshot = await getDocs(collection(db, "users"));

function generateRandomId(num) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < num; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
async function insertUser(user) {
    await setDoc(doc(db, "users", generateRandomId(20)), user);
    alert("Insertado el usuario: " + user.email);
}

const form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", e => {
    e.preventDefault();
    const user = {
        email: document.getElementsByTagName("input")[0].value,
        password: document.getElementsByTagName("input")[1].value
    }

    insertUser(user);
})
