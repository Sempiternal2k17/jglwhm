import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, where ,orderBy, query} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
//   import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { firebaseConfig } from "./firebaseConfig.js";
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app);
    var prayerDocs = [];
//data for prayerRequest
  const prayersSnapshot = await getDocs(query(collection(db, "prayerRequests"), where("status", "==", "verified"), orderBy("timestamp", "desc")));
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
          border-radius: 10px;
          margin-bottom: 4%;
          background-color: #F7F7F7;">
          <div class="req" id="req${prayerDocs[i][ID]}>
            <div class="heading" id="${prayerNameTag}"
            style="background-color: #F5F5F5;
            padding-left: 3%;
            padding-top: 3%;
            padding-bottom: 2%;
            color: black;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;"
            >
              <h1 style=" font-size: 2.5vw;
              font-family: 'Encode Sans SC';"
              >${prayerDocs[i][DATA].fullname}</h1>
              <p id="prayerDate${prayerDocs[i][ID]}"
              style="font-size: 18px; color:#82817f;"
              >${date}</p>
            </div>
            <div class="body" id="prayerbody${prayerDocs[i][ID]}"
            style="color: black;
            padding-left: 3%;
            padding-top: 2%;
            padding-bottom: 2%;
            padding-right: 3%;
            background-color: #FFE7CC;">
              <p id=${bodyID} 
              style=" font-size: 1.5vw;
              text-align: justify;
              padding-bottom: 1%;">${prayerDocs[i][DATA].body}</p>
            </div>
          </div>
        </div>`;
      }
      prayerContainer.innerHTML = html;   
  }
  createPrayers();
