"use strict";

// Chytenie section
let useSection = document.querySelectorAll("section");


// Vypísanie section
useSection.forEach( function( section ) {
   section.addEventListener("click", function( event ) {
     let score = Number( section.firstElementChild.textContent);
      


       section.firstElementChild.textContent = ++score
        

 

     
   }) ;
} );

