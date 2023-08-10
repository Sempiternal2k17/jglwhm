var setPrograms = ['j12Kids','lifeClas','marriedForLife','mentoring','solClass','spearHead','sundayService','wildFire']

function firstOrderFunction(){
  // function parseParams(){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const bannerProgram = urlParams.get('bannerProgram');
    const programBlogs = urlParams.get('programBlogs');
    console.log(programBlogs, " ",bannerProgram);
  // }
  // parseParams();

// put programBlogs here instead if sunday service
var programComponents = JSON.parse(localStorage.getItem(`${programBlogs}`));
var bannerComponents = JSON.parse(localStorage.getItem(`${bannerProgram}`));
console.log(programComponents);
console.log(bannerComponents);
function createNews1(){
  var newsContainer = document.querySelector('#news1');
  let ID = 0;
  let DATA = 1;
  let html = ``;
  if(bannerComponents["image"] != null || bannerComponents["image"] != undefined) {
      html+= `<img src="${bannerComponents["image"]}" alt="">`;
  }

  html += `<div class="textBox">
      <div class="plateName">
        <h2>
        <span class="${bannerProgram}">${programComponents[ID][DATA].category}</span>
        </h2>
      </div>
      <h1>${bannerComponents["title"]}</h1>
      <p>${bannerComponents["introduction"]}</p>
    <br>`;
    console.log(bannerComponents["date"])
  if(bannerComponents["date"] !== "" ) {
    html+= `<p>📅 Date: ${bannerComponents["date"]}</p>`;
  }
  else(
    console.log("no date")
  )
  console.log(bannerComponents["time"])
  if(bannerComponents["time"] !== "" ) {
    html+= `<p>⏰ Time: ${bannerComponents["time"]}</p>`;
  }else(
    console.log("no time")
  )
  if(bannerComponents["location"] !== "") {
    html+= `<p>🏠 Location: ${bannerComponents["location"]}</p>`;
  }else(
    console.log("no lcoation")
  )
  if(bannerComponents["details"] !== "") {
    html+= ` <p>${bannerComponents["details"]}</p> <br>        
    </div>`;
  }
  else(
    console.log("no details")
  )
 
    newsContainer.innerHTML = html;
}

createNews1();




function createPrograms(){
    var programContainer = document.querySelector('#news1');
    let ID = 0;
    let DATA = 1;
    let html = '';
    let htmlContainer ='';
    
    var intervalProgs = 0;
    var intervalPosts = '';
      for(let i=0; i<programComponents.length; i++){
        
        let startDiv = `<div class="bottomNews" id="bottomNews" style=" display: flex;
        padding: 4%;">`;
        let endDiv = `</div>`;
        
        intervalPosts = intervalPosts + `
        <div class="news2"
        style="
        width: 50%;
        margin-right: 4%;">     
          <img src="${programComponents[i][DATA].image}" 
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
             <h2><span class="${programComponents[i][DATA].category}">${programComponents[i][DATA].category}</span></h2>
            </div>
             <h1 style="
             margin-top: 1%;
             margin-bottom: 1%;
             font-size: 2vw;
             font-family: 'Source Code Pro';"
             >${programComponents[i][DATA].title}</h1>
             <p style="color: #585757;
             text-align: justify;
             font-size: 1.3vw;
             font-family: 'Roboto Condensed';"
             >${programComponents[i][DATA].body}</p>
          </div>
        </div>`
          intervalProgs += 1; 
          if(intervalProgs === 2){
              htmlContainer = startDiv + intervalPosts + endDiv;
              html+= htmlContainer;
              intervalPosts = '';
              intervalProgs = 0;
          }
          else if (i === programComponents.length){
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
      var sundayServiceFormats = ["MarriedForLife","SundayService","Spearhead","J12Kids","LifeClass","SOLClass","Mentoring","Wildfire"];
      let ID = 0;
    let DATA = 1;
    let banners = JSON.parse(localStorage.getItem('Banners'));
    let htmlNavbar = ``;
      for(let i=0;i<banners.length;i++){
         
          for(let j=0;j<sundayServiceFormats.length;j++){
              if(banners[i][ID].toLowerCase() == sundayServiceFormats[j].toLowerCase()){
                  console.log(`${banners[i][ID]}`);
                  localStorage.setItem(`${banners[i][ID]}`, JSON.stringify(banners[i][DATA]));
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

}
firstOrderFunction();