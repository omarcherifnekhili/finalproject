const email = document.querySelector("#email");
console.log(email);
const password = document.querySelector(".password");
//console.log(password);
const inputs = document.querySelector("input");
console.log(inputs);
const button = document.querySelector("button");
//console.log(button);
const form = document.querySelector("form")
const body = document.querySelector("body");
const span = document.querySelectorALL("span");
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
form.addEventListener("submit", formVerif);
function passwordVerif(e){
    e.preventDefault();

    const val  = e.target.value;
    if(val.length < 8) {
        span[3].classList.toggle("errorSpan");
    }
}
    password.addEventListener("change", passwordVerif);