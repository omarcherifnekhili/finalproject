const email = document.querySelector("#email");
console.log(email);
const password = document.querySelector(".password");
//console.log(password);
const inputs = document.querySelector("input");
console.log(inputs);
const button = document.querySelector("button");
//console.log(button);
const form = document.querySelector("form");
const body = document.querySelector("body");
const span = document.querySelectorAll("span");
function formVerif(e){
    e.preventDefault();

    inputs.forEach(function(v,i) {
        console.log(v,i);
        if(v.value == false) {
            span[i].classList.toggle("errorSpan");
            v.classList.toggle("error");
        }
    });
}
