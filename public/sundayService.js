
// const firebaseConfig = {
//   apiKey: "AIzaSyBzXH77M9rOai9cZpXtHppjIQG_sZGheek",
//   authDomain: "jglwhm-9c253.firebaseapp.com",
//   projectId: "jglwhm-9c253",
//   storageBucket: "jglwhm-9c253.appspot.com",
//   messagingSenderId: "473928839285",
//   appId: "1:473928839285:web:8409d084d872cfa504c83c",
//   measurementId: "G-T144LJT289"
// };

// // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
// import { getFirestore,  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
// import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

//     const app = initializeApp(firebaseConfig)
//     const db = getFirestore(app);
//     var docSnapshot = [];




//   const querySnapshot = await getDocs(collection(db, "connects/wildFire/data"));

//   querySnapshot.forEach((doc)=>{
//       docSnapshot.push([doc.id, doc.data()]);
//   });
//   console.log(docSnapshot);

//   function createFirstBlogs(){
//       var firstBlogs = document.querySelector("#live");
  

//     //   <div class="live">
//     //   <h1>Live Sermons</h1>
//     //   <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fgreatlightworldharvest%2Fvideos%2F746509673730823%2F&show_text=false&width=560&t=0" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
//     // </div>
//       firstBlogs.innerHTML  += ` <div class="blog" id="${docSnapshot[0][0]}"></div>`;

//       var inFirstBlog = document.querySelector(`[ id ='${docSnapshot[0][0]}']`);
//       inFirstBlog.innerHTML += `<h1>Live Sermons</h1>`;
//       inFirstBlog.innerHTML += `<iframe src="${docSnapshot[0][1].}" width="560" height="314" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>`;
      

//       inFirstBlog.addEventListener('click', 
//       function passData(e){
//           e.preventDefault();

          
//           const title = docSnapshot[0][1].title;
//           const subtitle = docSnapshot[0][1].subtitle;
//           const body = docSnapshot[0][1].body;
//           const image = docSnapshot[0][1].image;
//           localStorage.setItem('tempData', JSON.stringify({setTitle: title, setSubtitle: subtitle, setBody: body, setImage: image}));
//           window.location.href = "./fireblogs1.html";
//       }
//       )
//   }


//   function createBlogs() {
//     createFirstBlogs();
//       var insertBlogs = document.querySelector("#insertBlogs");
//       let ID =0;
//       let DATA = 1;
//       for(let i=1; i<docSnapshot.length; i++){
//           console.log(docSnapshot[i][ID]); 
//           insertBlogs.innerHTML += `<div class="blog" id="${docSnapshot[i][ID]}"></div>`;
//           var insideMap = document.querySelector(`[ id ='${docSnapshot[i][ID]}']`);
//               insideMap.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${docSnapshot[i][DATA].image})`;
//               insideMap.style.paddingTop = "5%";
//               insideMap.style.backgroundSize = "cover";
//               insideMap.style.borderRadius = "10px";
//               insideMap.style.marginRight = "0%";
//               insideMap.style.marginBottom = "5%";
//               insideMap.style.paddingBottom = "5%";
//               insideMap.style.zIndex = "10";
//               // strip the name so it doesnt have spaces in between and removes ? ! etc
//               let insertName = docSnapshot[i][DATA].title.split(" ").join("");
//               insertName = insertName.replace(/\?/g, '');
      
//               insideMap.innerHTML += `<div class="blogInfo" id="${insertName}" name="${docSnapshot[i][ID]}"></div>`;
//           var insideBlog = document.querySelector(`#${insertName}`);
//               insideBlog.innerHTML += `<h1 class="h1random" >${docSnapshot[i][DATA].title}</h1>`;
//               insideBlog.innerHTML += `<p class="prandom">${docSnapshot[i][DATA].subtitle}</p>`;
              
//               insideBlog.style.paddingTop = "32%";
//               insideBlog.style.paddingBottom = "7%";
//               insideBlog.style.textAlign = "left";
//               insideBlog.style.textIndent = "5%";
//               insideBlog.style.marginLeft = "3%"
//               insideBlog.style.marginRight = "3%";
//               insideBlog.style.borderRadius = "10px";
//               insideBlog.style.cursor = "pointer";
//               insideBlog.style.transition = "0.5s";
             
//       }
     
//   }

//   createBlogs();

//   var tempTag = document.querySelector(`#insertBlogs`);
//   tempTag.addEventListener('click', function passingData(e){  
//       e.preventDefault();
//     var indexNum = 0;
//     let DATA = 1;
//     // const indexNum = docSnapshot.indexOf(e.target.id);
//     if(e.target.classList.contains("blog")){
//       console.log("blogfoClicked: " + e.target.id);
//       // need to get index of id to pass data
//       indexNum= docSnapshot.findIndex(values => values.indexOf(e.target.id)> -1);
//       console.log(indexNum);
//     }
//     else if(e.target.classList.contains("blogInfo")){
//       console.log("blogInfoClicked: " + e.target.parentElement.id);
//       indexNum= docSnapshot.findIndex(values => values.indexOf(e.target.parentElement.id)> -1);
//       console.log(indexNum);
//     }else if(e.target.classList.contains("h1random") ||e.target.classList.contains("prandom") ){
//       console.log("h1random||prandom: "+ e.target.parentElement.parentElement.id);
//       indexNum= docSnapshot.findIndex(values => values.indexOf(e.target.parentElement.parentElement.id)> -1);
//       console.log(indexNum);
//     }

//     const title = docSnapshot[indexNum][DATA].title;
//     const body = docSnapshot[indexNum][DATA].body;
//     const image = docSnapshot[indexNum][DATA].image;
//     localStorage.setItem('tempData', JSON.stringify({setTitle: title, setBody: body, setImage: image}));
//     window.location.href = "./fireblogs1.html";
// })
  
