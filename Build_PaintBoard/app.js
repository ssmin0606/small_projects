const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
const saveBtn = document.getElementById("jsSave")

const INITIAL_COLOR = "black";

// canvas의 픽셀 사이즈를 줘야 그리기 가능
canvas.width = 700;
canvas.height = 700;

// canvas default bgcolor
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// default black color
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}


function handleCanvasClick(){
  if (filling === true){
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}


// canvas위에 마우스를 놓으면 x,y 를 반환
function onMouseMove(event) {
  // offsetX, offsetY : canvas안에서의 좌표 표시
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // 선을 그리는 것을 시작
    // 하지만 painting = false이기 때문에 보이지 않음
    ctx.beginPath();
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

// 색바꾸기
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = ctx.strokeStyle;
}

// brushsize 조정
function handleBrushSize(event) {
  const size = event.target.value;
  ctx.lineWidth = size;
}

function fillColor(event) {
  event.backgroundColor = event.strokeStyle;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill"
  } else {
    filling = true;
    mode.innerText = 'Paint'
    
  }
}

function handleCM(event){
  // 우클릭 못하게 하기
  event.preventDefault();
}

function handleSaveClick(){
  const image = canvas.toDataURL("image/png")
  const link = document.createElement("a");
  link.href = image;
  link.download = "paintJs[EXPORT]";
  link.click();
}

// 마우스의 움직임을 감지
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

// 배열에 넣어서 각 요소에 적용
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

// brushsize 조정
if (range) {
  range.addEventListener("input", handleBrushSize);
}

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

if (saveBtn) {
  saveBtn.addEventListener("click", handleSaveClick);
}