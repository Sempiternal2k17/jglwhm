import { collection, getDocs, where ,orderBy, query} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import {db} from './Database.js';
import { FooterFunction } from "./Footer.js";
    var prayerDocs = [];
//data for prayerRequest  
  const prayersSnapshot = await getDocs(query(collection(db, "prayerRequests"), where("status", "==", "cd"), orderBy("timestamp", "desc")));
  prayersSnapshot.forEach((doc)=>{
      prayerDocs.push([doc.id, doc.data()]);
  });

  function createPrayers(){

      var prayerContainer = document.querySelector("#prayerContainer");
      let ID =0;
      let DATA = 1;
      let html = '';
     
      for(let i=0; i<prayerDocs.length; i++){
          let prayerNameTag = prayerDocs[i][DATA].fullname.split(" ").join("") + prayerDocs[i][ID];
          var date = prayerDocs[i][DATA].timestamp.toDate().toLocaleDateString();
          let bodyID = "body" + prayerNameTag;
          html += 
          `<div class="request" id="${prayerDocs[i][ID]}"
              style="border: 1px solid black;
              padding: 3% 3%;
              background-color: white;
              margin-bottom: 4%;">
          <div class="req" id="req${prayerDocs[i][ID]}>
          <div class="body" id="prayerbody${prayerDocs[i][ID]}"
                  style="color: black;
                  padding: ;">
                  <p id=${bodyID} 
                        style=" font-size: 1.5vw;
                        font-family: 'Poppins';
                        text-align: justify;">${prayerDocs[i][DATA].body}</p>
          </div>
            <div class="heading" id="${prayerNameTag}"
                  style="color: black;
                  margin: 1% 0%;">
              <p style=" font-size: 1vw;
                         font-family: 'Poppins';"
              >${prayerDocs[i][DATA].fullname}</h1>
              <p id="prayerDate${prayerDocs[i][ID]}"
                      style="font-size: 1vw;
                      font-family: 'Poppins';">${date}</p>
            </div>
          </div>
        </div>`;
      }
      prayerContainer.innerHTML = html;   
  }
  createPrayers();

  // add footer
  var footerTemplate = FooterFunction();
  var footerContainer = document.querySelector('#bottom');
  footerContainer.innerHTML = footerTemplate;