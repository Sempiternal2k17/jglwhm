import { URLtrim } from "./URLtrim.js";
let textData = "StoryID";
let queryData = URLtrim(textData);
var dataValues = JSON.parse(sessionStorage.getItem(`${queryData}`));
var bannertitle = document.querySelector('#bannertitle');
var storyTitle = document.querySelector('#storyTitle');
var subtitle= document.querySelector('#subtitle');
var blogBody = document.querySelector('#storyBody');

bannertitle.innerHTML = dataValues.title;
storyTitle.innerHTML = dataValues.title;
subtitle.innerHTML = dataValues.subtitle;
blogBody.innerHTML = dataValues.body;
