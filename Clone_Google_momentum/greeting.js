const form = document.querySelector(".js-form"),
  input = form.querySelector("input");


const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING.CN);
  greeting.classList.add(SHOWING_CN)
  greeting.innerText = `Hello ${text}`;
}


function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {

  } else {
    paintGreeting(currentUser)
  }


function init(){
  loadName();
}
init();