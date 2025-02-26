let ansTrue = localStorage.getItem("ansTrue");

const pCorrect = document.getElementById("Correct");
const pWrong = document.getElementById("Wrong");
const percLeft = document.getElementById("percentage-left");
const percRight = document.getElementById("percentage-right");

//let ansTrueToS = ansTrue.toString();

//console.log(ansTrueToS);

pCorrect.innerText = `${ansTrue}/10 questions`;
pWrong.innerText = `${10 - ansTrue}/10 questions`;

console.log("pc", pCorrect);
console.log("pw", pWrong);

percLeft.innerText = `${ansTrue * 10}%`;
percRight.innerText = `${(10 - ansTrue) * 10}%`;
