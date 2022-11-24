const submit = document.querySelector(".submitt");
const choiceRate = document.querySelector(".rating");
const btns = document.querySelectorAll(".choice");
const thankyou = document.querySelector(".thankyou");
const realRate =document.querySelector(".choose");
const main = document.querySelector(".main");

let ratingValue;
/*choiceRate.addEventListener("click", function(e) {
    let target = e.target;
    ratingValue = target.textContent;
    highlight(target);
});*/

btns.forEach(function(btn) {
    btn.addEventListener("click", function(e) {
        removeHighlight();
        let target = e.currentTarget;
        ratingValue = target.textContent;
        target.classList.add("highlight");
        thankyou.classList.remove("show-text");
    })
});

function removeHighlight() {
    btns.forEach(function(btn) {
        if (btn.classList.contains("highlight")) {
            btn.classList.remove("highlight");
        }
    })
}


submit.addEventListener("click", function() {
    if (!ratingValue) return;
    thankyou.classList.add("show-text");
    realRate.textContent = ratingValue;
    main.classList.remove("show-text")
});