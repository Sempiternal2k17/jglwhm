import { URLtrim } from "./URLtrim.js";
let textData = "GalleryID";
let queryData = URLtrim(textData);
console.log(queryData);
var dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
var bannertitle = document.querySelector('#galleryDiv');
var titleDiv = document.querySelector('#titleDiv');
var tabTitle = document.querySelector('#tabTitle');
titleDiv.innerHTML = dataValues['title'];
tabTitle.innerHTML = dataValues['title'];
let htmlTemplate = ``;
for (var i = 0; i < dataValues['image'].length; i++){
    console.log(dataValues['image'][i]);
 htmlTemplate = `
         
            <a href="${dataValues['image'][i]}" data-lightbox="models" >
            <img src="${dataValues['image'][i]}" >
            </a>
        
    `;
    bannertitle.innerHTML += htmlTemplate;
    htmlTemplate = ``;
}
// bannertitle.insertAdjacentHTML('afterend', htmlTemplate);
