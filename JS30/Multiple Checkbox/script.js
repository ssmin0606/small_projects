const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked;

function handleCheck(e){
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // 저번에 눌린 것 또는 지금 눌린 것
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // 현재 눌려진 것이 계속 마지막으로 체크 된 것으로 변수에 할당됨
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))