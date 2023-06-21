const error1 = document.getElementById("alert1");

const error2 = document.getElementById("alert2");

const connexionBtn = document.getElementById("connectBtn");

const email = document.getElementById("email");

let password = document.getElementById("password")





let emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

connexionBtn.addEventListener("click", (event) =>{
  event.preventDefault()
  if (!emailFormat.test(email.value)){
    error1.classList.add("evenement");
    email.classList.add("alertBorder1");
  }
});


  //********************************* */


 connexionBtn.addEventListener("click", function() {
   if (password.value === "") {
    error2.classList.add("evenement2");
    password.classList.add("alertBorder2");
  }
}); 
