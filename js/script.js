"use strict";

// Chytenie section
let useSection = document.querySelectorAll("section");


// Vypísanie section
useSection.forEach( function( section ) {
   section.addEventListener("click", function() {
     let score = Number( this.nextSibling.textContent);
         ++score
     
   }) 
} )

