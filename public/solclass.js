import { FooterFunction } from "./Footer.js";

// ADD FOOTER SECTION
var footerTemplate = FooterFunction();
var footerContainer = document.querySelector('.bottomLinks');
footerContainer.innerHTML = footerTemplate;