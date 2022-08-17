
var scoreModul = (function() {

function setScore() {
    var  score = Number(section.lastElementChild.textContent);
         ++score
    var scoreJASON =  JSON.stringify( score );
    localStorage.setItem("score",scoreJASON );
 };

let getScore = () => JSON.parse( localStorage.getItem("score"));


let callScore = () => section.lastElementChild.textContent = getScore();

 return {
     setScore: setScore,
     getScore: getScore,
     callScore: callScore
 }

}());