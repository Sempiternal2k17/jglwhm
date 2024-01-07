import { URLtrim } from "./URLtrim.js";
import { FooterFunction } from "./Footer.js";
let textData = "BlogID";
let queryData = URLtrim(textData);
var dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
var bannertitle = document.querySelector('#bannertitle');
var storyTitle = document.querySelector('#storyTitle');
var image= document.querySelector('#spearImage');
var blogBody = document.querySelector('#storyBody');

bannertitle.innerHTML = dataValues.title;
storyTitle.innerHTML = dataValues.title;
image.src = dataValues.image;
blogBody.innerHTML = dataValues.body;


// ADD FOOTER SECTION
var footerTemplate = FooterFunction();
var footerContainer = document.querySelector('.bottomLinks1');
footerContainer.innerHTML = footerTemplate;