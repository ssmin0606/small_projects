const panels = document.querySelectorAll('.panel')

function toggleRun(){
  this.classList.toggle('open');
}

function toggleActive(e){
  if(e.propertyName.includes('grow')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleRun))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))