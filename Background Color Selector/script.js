const button = document.querySelectorAll(".colour");
const body = document.querySelector("body")

button.forEach(function (button) {
    button.addEventListener("click", function (p) {
        console.log(p.target);
         console.log(p.target.id);
        body.style.backgroundColor = p.target.id;


    })
})