document.addEventListener("DOMContentLoaded", function(){

alert("Alert test")

console.log("Console log test")

function logTest() {
    console.log("Function log")
}

let but = document.getElementById("logButton")

but.addEventListener("click",logTest);

logTest();

});