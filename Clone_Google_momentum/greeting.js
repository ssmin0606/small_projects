const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  // js-greetings가 클래스인 것을 명시해줘야하기 때문에 .을 넣어줬다
  greeting = document.querySelector(".js-greetings");


// 여기서는 currentUser는 string이고
// showing은 class 이름이다. 
// 생각해보니 showing이랑 currentUser 둘 다 string으로 쓰인 것 같다. 
const USER_LS = "currentUser",
  SHOWING_CN = "showing";


// local storage에 이름을 등록하기 위하 함수
function saveName(text){
  localStorage.setItem(USER_LS, text);
}

// 사용자의 이름이 존재하거나 이름을 등록하면 실행되는 함수
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

// 사용자가 이름을 등록하려고 할 때 실행되는 함수
function handSubmit(event){
  // event === "submit"이고
  // 기본적으로 작동되는 Default 행동을 못하게 한다.
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

// 사용자의 이름이 등록되어 있지 않을 때 등록을 요청하는 함수
function askForName(){
  form.classList.add(SHOWING_CN);
  // "submit"을 하려고 하면, handSubmit 함수가 실행
  form.addEventListener("submit", handSubmit)
}

// 사용자의 이름이 등록되어있는 지 아닌 지 판단해서 각각 함수를 실행
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

// 초기 실행 함수
function init() {
  loadName();
}

init();