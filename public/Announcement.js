import { collection, getDocs ,orderBy, query} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import {db} from './Database.js';
import { URLtrim } from "./URLtrim.js";
import { FooterFunction } from "./Footer.js";
    var sundayServiceFormats = ["MarriedForLife","SundayService","Spearhead","J12Kids","LifeClass","SOLClass","Mentoring","Wildfire"];
    var announcementDocs = [];
    var general = [];
    var bannerDocs = [];
  let textData = "Prompt";
  let queryData = URLtrim(textData);


  if(sessionStorage.getItem(`${queryData}`) !== null){
    // get the data from the session storage
    console.log("SESSION STORAGE");
    general = JSON.parse(sessionStorage.getItem(`${queryData}`));
   
  } else {
    // get from firebase
    //data for Announcements
  const announceSnapshot = await getDocs(query(collection(db, `announcement`), orderBy("timestamp", "desc")));
  announceSnapshot.forEach((doc)=>{
    announcementDocs.push([doc.id, doc.data()]);
  });
  
//data for Banners
  const bannerSnapshot = await getDocs(query(collection(db, "announcement/banners/data"), orderBy("timestamp", "desc")));
  bannerSnapshot.forEach((doc)=>{
    bannerDocs.push([doc.id, doc.data()]);
  });
  console.log(bannerDocs);
//set Banners
sessionStorage.setItem("Banners", JSON.stringify(bannerDocs));

    for(let i=0; i<sundayServiceFormats.length; i++){
      let tempData = [];
      for(let j=0; j<announcementDocs.length; j++) {
      
      if (sundayServiceFormats[i] === announcementDocs[j][1].category){
          tempData.push(announcementDocs[j]);
      }
      
      }
      sessionStorage.setItem(`${sundayServiceFormats[i]}`, JSON.stringify(tempData))
  }

  // sessionStorage.setItem("updated",true);
  sessionStorage.setItem(`${queryData}`, JSON.stringify(announcementDocs));
    general = JSON.parse(sessionStorage.getItem(`${queryData}`));
    console.log("this is taken from database: ", general.length);
  }
    
  function createPrograms(){
  var programContainer = document.querySelector('#news1');
  let ID = 0;
  let DATA = 1;
  let html = '';
  let htmlContainer ='';
  
  var intervalProgs = 0;
  var intervalPosts = '';
    for(let i=0; i<general.length; i++){
      
      let startDiv = `<div class="bottomNews" id="bottomNews" style=" display: flex;
      padding: 4%;">`;
      let endDiv = `</div>`;
      
      intervalPosts = intervalPosts + `
      <div class="news2"
      style="
      width: 50%;
      margin-right: 4%;">     
        <img src="${general[i][DATA].image}" 
        alt="Image Unable To Load"
        style="
        display: block;
        width: 100%;
        transition: 0.5s;">
         <div class="textBox"
         style="
         margin: auto;
         width: 98%;">
          <div class="plateName">
           <h2><span style = "font-size: 10px;"class="${general[i][DATA].category}">${general[i][DATA].category}</span></h2>
          </div>
           <h1 style="
           margin-top: 1%;
           margin-bottom: 1%;
           font-size: 16px;
           font-family: 'Source Code Pro';"
           >${general[i][DATA].title}</h1>
           <p style="color: #585757;
           text-align: justify;
           font-size: 14px;
           font-family: 'Roboto Condensed';"
           >${general[i][DATA].body}</p>
        </div>
      </div>`
        intervalProgs += 1; 
        if(intervalProgs === 2){
            htmlContainer = startDiv + intervalPosts + endDiv;
            html+= htmlContainer;
            intervalPosts = '';
            intervalProgs = 0;
        }
        else if (i === general.length){
          htmlContainer = startDiv + intervalPosts + endDiv;
          html+= htmlContainer;
          intervalPosts = '';
          intervalProgs = 0;
        }
       
       
    }
    programContainer.insertAdjacentHTML('afterend', html);
  }
  createPrograms();

  function createNavbar(){
    var navbarDiv = document.querySelector('#navbarDiv');
   
    let ID = 0;
  let DATA = 1;
  let banners = JSON.parse(sessionStorage.getItem('Banners'));
  let htmlNavbar = ``;
    for(let i=0;i<banners.length;i++){
       
        for(let j=0;j<sundayServiceFormats.length;j++){
            if(banners[i][ID].toLowerCase() == sundayServiceFormats[j].toLowerCase()){
                console.log(`${banners[i][ID]}`);
                sessionStorage.setItem(`${banners[i][ID]}`, JSON.stringify(banners[i][DATA]));
                htmlNavbar = htmlNavbar +`
                 <li style="list-style: none;"><a href="AnnouncementSundayService.html?bannerProgram=${banners[i][ID]}&programBlogs=${sundayServiceFormats[j]}"
                 style="color: #fff;
                 font-size: 1.3vw;
                 margin-left: 25px;
                 text-decoration: none;
                 transition: all 0.3s ease;
                 font-family: 'Roboto Condensed';" 
                 onMouseOver="this.style.color='#F49F1C'"
                 onMouseOut="this.style.color='#fff'">${sundayServiceFormats[j]}</a></li>`;
            }
        }
    }
    navbarDiv.insertAdjacentHTML('afterend', htmlNavbar);

  }
  createNavbar();

var footerTemplate = FooterFunction();
var footerContainer = document.querySelector('.bottomLinks');
footerContainer.innerHTML = footerTemplate;