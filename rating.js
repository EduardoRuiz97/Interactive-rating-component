let ratebutton = [...document.querySelectorAll(".ratebut")];
let submit = document.querySelector(".submit");
let rateValue = document.getElementById("resultRate")
let idValue = null;
let firstCard = document.querySelector(".rateSection");
let secondCard = document.querySelector(".thanksSection");


ratebutton.forEach(button => {
  button.addEventListener("click", (event)=>{

    idValue = event.srcElement.id;
  })
})

submit.addEventListener("click", ()=> {
  changeRate();
  firstCard.classList.toggle("dissapear");
  secondCard.classList.toggle("show");
})

secondCard.addEventListener("click", ()=> {
  firstCard.classList.toggle("dissapear");
  secondCard.classList.toggle("show");
})

function changeRate() {
  rateValue.innerHTML = `You selected ${idValue} out of 5`;
}




