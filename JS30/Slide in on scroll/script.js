function debounce(func, wait = 5, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSilde(e) {
  sliderImages.forEach(sliderImage => {
    // 이미지 중간(y)의 위치
    const slideInAt = (window.scrollY + window.innerHeight - sliderImage.height / 2);
    // 이미지의 맨 밑의 위치
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // 이미지의 중간의 위치가 이미지의 맨 위(y)의 위치보다 큰지 확인
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // window의 y값이 이미지의 맨 밑(y값)위치보다 작은지 확인
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
        sliderImage.classList.remove('active');
    }
  });
}


window.addEventListener('scroll', debounce(checkSilde));