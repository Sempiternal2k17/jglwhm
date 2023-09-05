import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { FooterFunction } from "./Footer.js";
//   import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { firebaseConfig } from "./firebaseConfig.js";
const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const equipProgram = urlParams.get('equipProgram');
const programColors = {
    mentoring: '#191825',
    lifeclass: '#3EB489',
    solclass: '#1868AE',
};
let colorScheme = programColors[equipProgram]
console.log(equipProgram, " ", colorScheme);


// ADD FOOTER SECTION
var footerTemplate = FooterFunction();
var footerContainer = document.querySelector('.bottomLinks');
footerContainer.innerHTML = footerTemplate;



// color selection
function setColorScheme(){
var navbarDiv = document.querySelector('.navbar');
navbarDiv.style.backgroundColor = `${colorScheme}`;
var mobileLinksDiv = document.querySelector('.mobileLinks');
mobileLinksDiv.style.backgroundColor = `${colorScheme}`;
var bottomLinksDiv = document.querySelector('.bottomLinks');
bottomLinksDiv.style.backgroundColor = `${colorScheme}`;
var equipBtn = document.querySelector('#equipFormBtn');
equipBtn.style.backgroundColor = `${colorScheme}`;
var equipFormTitle = document.querySelector('#equipFormTitle');
let parseToCAPS = `${equipProgram} Form`;
equipFormTitle.innerText = parseToCAPS.toUpperCase();
}
setColorScheme();
//======================================================

let equipForm = document.querySelector('#equipForm');

equipForm.addEventListener('submit', async(event) =>{
    event.preventDefault();
    var equipBtn = document.querySelector('#equipFormBtn');
    equipBtn.style.backgroundColor = '#5a5a5a';
    equipBtn.disabled = true;
    try{
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phoneNum").value;
        const userAge = document.getElementById("userAge").value;
        const userDataRef = collection(db, `equipping/${equipProgram}/data`);
        const prayerFormat = {
            fullname: fullName,
            email: email,
            contact: phoneNumber,
            age: userAge,
            timestamp: serverTimestamp(),
        }
        await addDoc(userDataRef, prayerFormat).then(() => {
            equipBtn.style.backgroundColor = `${colorScheme}`;
            equipBtn.disabled = false;
            if (confirm("Your Information has been submitted!\nReturn to homepage?")) {
                window.location.href = "./index.html";
              }
              else{
                window.location.reload();
              }
            // window.location.href = "./index.html";
        });
    }
    catch(e){throw e};
});
