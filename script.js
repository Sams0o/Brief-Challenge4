const error1 = document.getElementById("alert1");
const error2 = document.getElementById("alert2");
const email = document.getElementById("email");
const password = document.getElementById("password");
const connexionBtn = document.getElementById("connectBtn");


let emailFormat = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;

connexionBtn.addEventListener("click", (event) =>{
  event.preventDefault()
  if (!emailFormat.test(email.value)){
    // error1.classList.add("evenement1");
    email.style.border="2px solid rgba(240, 34, 6, 0.5)"
    error1.style.visibility="visible"
  }
});


connexionBtn.addEventListener("click", function() {
   if (password.value === "") {
    password.style.border="2px solid rgba(240, 34, 6, 0.5)"
    error2.style.visibility="visible"
  }
});


