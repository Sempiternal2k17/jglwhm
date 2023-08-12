import { URLtrim } from "./URLtrim.js";
let textData = "BlogID";
let queryData = URLtrim(textData);
console.log('trim: ' + queryData);
var dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
console.log('dataValues: ' + dataValues);
var titleBanner = document.querySelector('#titleBanner');
var windowTitle= document.querySelector('#windowTitle');
var blogBody = document.querySelector('#blogBody');
var videoID = document.querySelector('#videoID');

titleBanner.innerHTML = dataValues.title;
windowTitle.innerHTML = dataValues.title;
blogBody.innerHTML = dataValues.body;
videoID.setAttribute('src', `${dataValues.video}`);