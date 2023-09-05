import { collection, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { db } from "./Database.js";
import { FooterFunction } from "./Footer.js";

let equipForm = document.querySelector('#notificationForm');

equipForm.addEventListener('submit', async(event) =>{
    event.preventDefault();
    var equipBtn = document.querySelector('#subBtn');
    equipBtn.style.backgroundColor = '#5a5a5a';
    equipBtn.disabled = true;
    try{
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNum").value;
        const userDataRef = collection(db, `subscriptions`);
        const prayerFormat = {
            fullname: fullName,
            email: email,
            contact: phoneNumber,
            timestamp: serverTimestamp(),
        }
        await addDoc(userDataRef, prayerFormat).then(() => {
            equipBtn.style.backgroundColor = `black`;
            equipBtn.disabled = false;
            if (confirm("Your Information has been submitted!\nReturn to homepage?")) {
                window.location.href = "./index.html";
              }
              else{
                window.location.reload();
              }
        });
    }
    catch(e){throw e};
});

// ADD FOOTER SECTION
var footerTemplate = FooterFunction();
var footerContainer = document.querySelector('.bottomLinks');
footerContainer.innerHTML = footerTemplate;