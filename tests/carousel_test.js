document.addEventListener("DOMContentLoaded", function(){

// alert("Alert")
console.log("Log")

function button_test(){

console.log("Button test")

};

let prev_but = document.getElementById("prev-but");
let next_but = document.getElementById("next-but");

prev_but.addEventListener("click", button_test);
next_but.addEventListener("click", button_test);

});

let title1 = document.getElementById("T1");

function changeText(){
    console.log("tex function test")
    alert("test")
};

title1.addEventListener("mouseover",changeText);

const cards = document.getElementsByClassName('item-card');

cards.addEventListener("click",changeText())