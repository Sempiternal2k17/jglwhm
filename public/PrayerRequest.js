import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { firebaseConfig } from "./firebaseConfig.js";
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app);


    

    const formSubmit = document.querySelector("#formSubmit");
    formSubmit.addEventListener("submit", async (e)=>{
        e.preventDefault();
        try{
        
        var fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        var phoneNumber = document.getElementById("phoneNum").value;
        const body = document.getElementById("body").value;
        let status = "unverified";
        if(fullName === undefined || fullName === ""){
            fullName = "Anonymous";
        }
        if(phoneNumber === undefined || phoneNumber === ""){
            phoneNumber = "empty";
        }
        const userDataRef = collection(db, "prayerRequests");
        const prayerFormat = {
            fullname: fullName,
            email: email,
            contact: phoneNumber,
            body: body,
            status: status,
            timestamp: serverTimestamp(),
        }
        await addDoc(userDataRef, prayerFormat).then(() => {
            window.location.href = "./index.html";
        });
        }catch(error){throw error;}
    }
    
    );

