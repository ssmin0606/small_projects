// class들을 선택하고 그것을 변수에 저장해줌
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

// 재사용성, 오류 최소화를 위해서 'toDos' string을 변수에 저장
const TODOS_LS = 'toDos';
// toDos의 요소가 제거와 추가가 반복적으로 일어나기 때문에 let을 씀
let toDos = [];


// todo 지워주는 함수
function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  // 제거한 toDo를 제외한 나머지 toDo 리스트
  const cleanToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}


function saveToDos(){
  // object로 저장되는 것을 string으로 바꿔서 저장해주게 함
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

// toDos 생성
// toDos 보여주고
// saveToDos 호출하는 함수
function paintToDo(text){
  // li을 생성
  const li = document.createElement("li");
  // button 생성
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteToDo)
  span.innerText = text;
  // li에 추가
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  // 추가한 것을 ul에 추가 
  toDoList.appendChild(li);
  // 입력한 것을 저장해주기 위한 작업
  const toDoObj = {
    text: text,
    id: newId
  };
  // toDos 배열에 toDoObj를 추가할 수 있다
  toDos.push(toDoObj);
  saveToDos();
}

// // local storage에 todolist 저장
// function saveToDo(text){
//   localStorage.setItem(TODOS_LS, text);
// }

// submit을 해주게 되면 실행되는 함수
function handleSubmit(event){
  // event의 기본 과정을 실행 X
  event.preventDefault();
  // input에 기입된 값을 변수에 할당
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  // saveToDo(currentValue);
  // local storage에 toDos에 대한 value를 저장한 후에 초기화
  toDoInput.value = "";
}

function loadTODos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  // 기존에 저장되어있는 toDoList를 보여주기 위한 장치
  if(loadedToDos !== null){
    // string을 깔끔하게 보이게해줌
    const parsedToDos = JSON.parse(loadedToDos);
    // toDo는 parsedTODos의 각각의 요소
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text)
    })
  } else{

  }
}

// 처음 시작할 때 실행되는 함수
function init(){
  loadTODos();
  // 새로운 toDo를 추가하는 장치
  toDoForm.addEventListener("submit", handleSubmit)

}

init();


// 참고
// local storage에는 자바스크립트의 data를 저장할 수 없음
// 모두 string으로 저장하려고함