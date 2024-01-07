import { collection, getDocs, orderBy, query} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { db } from "./Database.js";
//import { SubscribeFunction } from "./Subscribe.js";
import { URLtrim } from "./URLtrim.js";
import { FooterFunction } from "./Footer.js";
// TAKING THE URL PARAMETER FOR GETTING DATA FROM DB
let textData = "Prompt";
let colorScheme =   "#2c5f2d";
let queryData = URLtrim(textData);
console.log(queryData);
var DataSet = []; //session data
var dataValues = [];// useful data values
// get data here 
if(sessionStorage.getItem(`${queryData}`) !== null){
    //get from sessionStorage
    console.log("SESSION STORAGE");
    dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
   
}
else{
    //get from database
    const querySnapshot = await getDocs(query(collection(db, `connects/${queryData}/data`), orderBy("timestamp", "desc")));
    querySnapshot.forEach((doc)=>{
        DataSet.push([doc.id, doc.data()]);
    });

    console.log("NEW DATA SET");
    
    // set to sessionStorage
    sessionStorage.setItem(`${queryData}`, JSON.stringify(DataSet));
    dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
}

//inject html data here
function CreatePrograms(){
    let ID=0
    let DATA= 1;
    var firstLive = document.querySelector('#h1Access');
    let htmlTemplate = ` 
    <div class="blog" style="background-image: linear-gradient(rgba(44,95,45, 0.7),rgba(44,95,45, 0.7)), url(${dataValues[ID][DATA].image})">
      <a href="Blog1.html?BlogID=${dataValues[ID][ID]}">
        <div class="blogInfo">
            <h1>${dataValues[ID][DATA].title}</h1>
            <p>Blog</p>
        </div>
      </a>
    </div>`;
    firstLive.insertAdjacentHTML('afterend', htmlTemplate);
    var tempData = dataValues[ID][DATA];
    sessionStorage.setItem(`${dataValues[ID][ID]}`, JSON.stringify(tempData));

    var programContainer = document.querySelector('#programContainer');
    let blogTemplate = ``;

    for(let i=1;i<dataValues.length;i++){
       
            blogTemplate = blogTemplate +
                  `<div class="blog" style="background-image: linear-gradient(rgba(44,95,45, 0.7),rgba(44,95,45, 0.7)), url(${dataValues[i][DATA].image})">
                      <a href="Blog1.html?BlogID=${dataValues[i][ID]}">
                        <div class="blogInfo">
                            <h1>${dataValues[i][DATA].title}</h1>
                            <p>Blog</p>   
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
    
var footerTemplate = FooterFunction();
var footerContainer = document.querySelector('.bottomLinks1');
footerContainer.innerHTML = footerTemplate;