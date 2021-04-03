// 요소 선택
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');


//  함수 작성
// playbutton 누르면 비디오 재생
// 소리 조절
// 속도 조절
// -10s, 25s skip 진행

function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton(){
  const icon = video.paused ? 'O' : 'X';
  toggle.textContent = icon;
}

function skipVideo(){
  video.currentTime += parseFloat(this.dataset.skip);
}

function updateChange(){
  video[this.name] = this.value;
  // if (this.name === 'volume'){
  //   video.volume = this.value;
  // } else if (this.name === 'playbackRate') {
  //   video.playbackRate = this.value;
  // }
}

function handleProgress(){
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener('click', togglePlay);
// 비디오가 플레이 되거나 멈추면~ (어떠한 계기라도)
// 이것이 진정한 EventListner이다
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skipVideo));
ranges.forEach(range => range.addEventListener('change', updateChange));
ranges.forEach(range => range.addEventListener('mousemove', updateChange));

// progressbar를 클릭하면 해당 구간으로 이동 후 재생
let mousedown = false;
progress.addEventListener('click', scrub);
// 마우스를 움직여서 구간 이동 가능
// 마우스 클릭과 !클릭을 이용하여 기능 구현
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);