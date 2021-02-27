// 이미지 로딩이 다 끝난 후 가져오자
const body = document.querySelector("body");

const IMG_NUMBER = 3;


// API 사용 시에는 필요할듯 
// function handleImgLoad(){
//   console.log("img load finished");
// }

function paintImage(imgNumber){
  const image = new Image();
  const BgSetting = "bgsetting"
  image.src = `/images/background-image${imgNumber + 1}.jpg`;
  body.prepend(image);
  image.classList.add(BgSetting)
  // API 사용 시에는 필요할듯
  // image.addEventListener("loadend", handleImgLoad)
  
}


function genRandom(){
  // image number random 호출
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number; 
}

function init(){
  const randomNumber = genRandom()
  paintImage(randomNumber)
}

init();