//random number generated 

const mybuttom  = document.getElementById("mybutton");
const mylabel  = document.getElementById("mylable");
let max = 6;
let min = 1;
let randomNumber;

mybutton.onclick = function() {
    randomNumber = Math.floor(Math.random() * max) + min;
    mylabel.textContent = randomNumber;

}
