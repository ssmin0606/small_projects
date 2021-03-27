// data를 불러온다.
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// 여기에 할당 시켜줄거야
const cities = []

// endpoint를 이용하여 fetch 진행
fetch(endpoint)
  // blob??
  // .json() 메서드를 이용해서
  .then(blob => blob.json())
  // data를 사용할 수 있게 추출 후
  // cities array에 각각의 데이터(...data)를 넣어준다.
  .then(data => cities.push(...data))


// match를 쓰기 위해서는 정규식이 필요 regex 생성자 함수를 통해서 생성
// RegExp(변수명or문자등등, 방법?(ex.gi : 대소문자 상관X))
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    // wordToMatch에 저장된 값을 `gi` 적용해서 새로운 정규식 객체가 생성됨
    const regex = new RegExp(wordToMatch, 'gi');
    // place -> city내 match 메서드를 활용해 regex가 있는 지 확인
    // 그 결과를 반환 (match된 값들의 모음)
    return place.city.match(regex) || place.state.match(regex)
  });
}

// 검색어와 매치된 결과들 보여주는 함수
function displayMatches(){
  const matchArray = findMatches(this.value, cities);
  
  // 검색어에 따라서 결과물들을 join해서 html에 할당
  const html = matchArray.map(place => {
    // 검색하고 있는 거 하이라이트 해주기
    // 정규식 생성자를 통해서 입력된 값과 동일한(대소문자 구분 없이) 값을 regex에 할당
    const regex = new RegExp(this.value, 'gi');
    // 
    const cityName = place.city.replace(regex, `<span class=hl>${this.value}</span>`)
    const stateName = place.state.replace(regex, `<span class=hl>${this.value}</span>`)
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
  }).join('');
  // suggestions 클래스를 가지고 있는 곳 안의 내용을 html로 바꿔줌
  suggestions.innerHTML = html;
}

// addeventlistener -> keyup: 키를 놓을 때 발생
const searchInput = document.querySelector('.search')
const suggestions = document.querySelector('.suggestions')



searchInput.addEventListener('click', displayMatches);
// 키에서 손을 놓을 때~
searchInput.addEventListener('keyup', displayMatches);


//  map은 적용, filter는 거르는 것  