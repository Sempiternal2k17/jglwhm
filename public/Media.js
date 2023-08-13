import { collection, getDocs, orderBy, query} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { db } from "./Database.js";
import { URLtrim } from "./URLtrim.js";

// TAKING THE URL PARAMETER FOR GETTING DATA FROM DB
let textData = "Prompt";
let queryData = URLtrim(textData);
console.log(queryData);
var DataSet = []; //session data
var dataValues = [];// useful data values
// get data here 
 if (queryData == "" || queryData == null){
    queryData = "media";
 }
if(sessionStorage.getItem(`${queryData}`) !== null){
    //get from sessionStorage
    console.log("SESSION STORAGE");
    dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));

}
else{
    //get from database
    const querySnapshot = await getDocs(query(collection(db, `${queryData}`), orderBy("timestamp", "desc")));
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
    var firstLive = document.querySelector('#programContainer');
    let ID=0
    let DATA= 1;   
    let html = '';
    let htmlContainer ='';
    var intervalProgs = 0;
    var intervalPosts = '';
    for (let i=0; i<dataValues.length; i++){
        
    sessionStorage.setItem(`${dataValues[i][ID]}`, JSON.stringify(dataValues[i][DATA]));
    let startDiv = `  <div class="row1">`;
    let endDiv = `</div>`;
    intervalPosts = intervalPosts + ` 
                <div class="news" style="background-image: url(${dataValues[i][DATA].image});">
                    <a href="galleryOne.html?GalleryID=${dataValues[i][ID]}">
                        <div class="newsInfo">
                            <h1>${dataValues[i][DATA].title}</h1>
                            <p>${dataValues[i][DATA].date}</p>
                        </div>
                    </a>
                </div> `;
        intervalProgs += 1; 
        if(intervalProgs === 2){
            htmlContainer = startDiv + intervalPosts + endDiv;
            html+= htmlContainer;
            intervalPosts = '';
            intervalProgs = 0;
        }
        else if (i === dataValues.length){
        htmlContainer = startDiv + intervalPosts + endDiv;
        html+= htmlContainer;
        intervalPosts = '';
        intervalProgs = 0;
        }
    }
    programContainer.insertAdjacentHTML('afterend', html);
}

CreatePrograms();



