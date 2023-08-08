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

      for(let i=0; i<prayerDocs.length; i++){
          prayerContainer.innerHTML  += ` <div class="request" id="${prayerDocs[i][ID]}"></div>`;
          var prayerRequest = document.querySelector(`[ id ='${prayerDocs[i][ID]}']`);
      //styling
          prayerRequest.style.border = "border: 1px black solid";
          prayerRequest.style.borderRadius = "10px";
          prayerRequest.style.marginBottom = "4%";
          prayerRequest.style.backgroundColor = "#F7F7F7";

          prayerRequest.innerHTML += ` <div  class="req" id="req${prayerDocs[i][ID]}"></div>`;
          var prayerReq = document.querySelector(`#req${prayerDocs[i][ID]}`);
          let prayerNameTag = prayerDocs[i][DATA].fullname.split(" ").join("") + prayerDocs[i][ID];
          prayerReq.innerHTML += `<div class="heading" id="${prayerNameTag}"></div>`;
          var prayerName = document.querySelector(`[id = '${prayerNameTag}']`);
      //styling
          prayerName.style.backgroundColor = "#F5F5F5";
          prayerName.style.paddingLeft = "3%";
          prayerName.style.paddingTop = "3%";
          prayerName.style.paddingBottom = "2%";
          prayerName.style.color = "black";
          prayerName.style.borderTopRightRadius = "10px";
          prayerName.style.borderTopLeftRadius = "10px";

          prayerName.innerHTML += `<h1 id="h1prayer">${prayerDocs[i][DATA].fullname}</h1>`;
          var h1prayer = document.querySelector(`#h1prayer`);
          h1prayer.style.fontSize = "2vw";
          h1prayer.style.fontFamily = "Encode Sans SC";
          var date = prayerDocs[i][DATA].timestamp.toDate().toLocaleDateString();
          prayerName.innerHTML += `<p id="prayerDate${prayerDocs[i][ID]}">${date}</p>`;
          var prayerDate = document.querySelector(`#prayerDate${prayerDocs[i][ID]}`);
          prayerDate.style.fontSize = "18px";
          prayerDate.style.color = "#82817f";



          prayerRequest.innerHTML += ` <div class="body" id="prayerbody${prayerDocs[i][ID]}"></div>`;
          var prayerBody = document.querySelector(`#prayerbody${prayerDocs[i][ID]}`);
          //styling
          prayerBody.style.color = "black";
          prayerBody.style.paddingLeft = "3%";
          prayerBody.style.paddingTop = "2%";
          prayerBody.style.paddingBottom = "2%";
          prayerBody.style.paddingRight = "3%";
          prayerBody.style.backgroundColor = "#FFE7CC";

          let bodyID = "body" + prayerNameTag;
          prayerBody.innerHTML += `<p id=${bodyID}>${prayerDocs[i][DATA].body}</p>`;
          var pBody = document.querySelector(`#${bodyID}`);
          //styling
          pBody.style.fontSize = "1.7vw";
          pBody.style.textAlign = "justify";
          pBody.style.paddingBottom = "1%";
      }
  
     
  }
  createPrayers();
  
