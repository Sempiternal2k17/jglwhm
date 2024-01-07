import { collection, getDocs, orderBy, query} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { db } from "./Database.js";
import { SubscribeFunction } from "./Subscribe.js";
import { URLtrim } from "./URLtrim.js";
import { FooterFunction } from "./Footer.js";
// TAKING THE URL PARAMETER FOR GETTING DATA FROM DB
let textData = "Prompt";
let colorScheme =   "#2F3C7E";
let queryData = URLtrim(textData);
console.log(queryData);
var DataSet = []; //session data
var dataValues = [];// useful data values
// get data here 
if(sessionStorage.getItem(`${queryData}`) !== null){
    //get from sessionStorage
    console.log("SESSION STORAGE");
    dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
    console.log(dataValues);
}
else{
    //get from database
    const querySnapshot = await getDocs(query(collection(db, `connects/${queryData}/data`), orderBy("timestamp", "desc")));
    querySnapshot.forEach((doc)=>{
        DataSet.push([doc.id, doc.data()]);
    });

    console.log("NEW DATA SET");
    console.log(DataSet);
    // set to sessionStorage
    sessionStorage.setItem(`${queryData}`, JSON.stringify(DataSet));
    dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
}

//inject html data here
function CreatePrograms(){
    let ID=0
    let DATA= 1;
    var firstLive = document.querySelector('#firstLive');
    firstLive.setAttribute('src', `${dataValues[ID][DATA].video}`);
    var programContainer = document.querySelector('#programContainer');
    let blogTemplate = ``;

    for(let i=1;i<dataValues.length;i++){
       
            blogTemplate = blogTemplate +
            `<div class="img1">
                <a href="Archive1.html?BlogID=${dataValues[i][ID]}">
                <div class="innerimg1">
                <h2>${dataValues[i][DATA].title}</h2>
                <p>${dataValues[i][DATA].date}</p>
                </div>
                </a>
            </div>`;

      var tempData = dataValues[i][DATA];
      sessionStorage.setItem(`${dataValues[i][ID]}`, JSON.stringify(tempData));

    }
    programContainer.innerHTML = blogTemplate;
}

CreatePrograms();

// ADD SUBSCRIBE SECTION
// var scrubTemplate = SubscribeFunction(queryData, colorScheme);
// var Subscription = document.querySelector('#subscribe');
// Subscription.innerHTML = scrubTemplate;
    
// ADD FOOTER SECTION
var footerTemplate = FooterFunction();
var footerContainer = document.querySelector('.bottomLinks1');
footerContainer.innerHTML = footerTemplate;