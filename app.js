const submit = document.querySelector(".submitt");
const choiceRate = document.querySelector(".rating");
const btns = document.querySelectorAll(".choice");
const thankyou = document.querySelector(".thankyou");
const realRate =document.querySelector(".choose");

let ratingValue;
let selected;
choiceRate.addEventListener("click", function(e) {
    let target = e.target;
    ratingValue = target.textContent;
    highlight(target);
});

/*btns.forEach(function(btn) {
    btn.addEventListener("clcik", function(e) {
        let target = e.currentTarget;
        ratingValue = target.textContent;
        highlight(target)
    })
});
*/
const highlight = (target) => {
    if(selected){
        selected.classList.remove('highlight');
    }
    selected = target;
    selected.classList.add('highlight');
}


submit.addEventListener("click", function() {
    if (thankyou.classList.contains("show-text")) {
        thankyou.classList.remove("show-text");
    }
    else {
        thankyou.classList.add("show-text");
    }
    realRate = ratingValue;
});