const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  // js-greetings가 클래스인 것을 명시해줘야하기 때문에 .을 넣어줬다
  greeting = document.querySelector(".js-greetings");


  // 여기서는 currentUser는 string이고
  // showing은 class 이름이다. 
  // 왜 showing은 .showing을 안해주는 것일까?
  // 왜 string과 class를 저장할 때 똑같이 해줘도 되는 것일까?
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function askForName(){
  form.classList.add(SHOWING_CN);

}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();