## Small pjt - Build movie_website (Vue.js) 

#### 1. 프로젝트 개요💼

---

- 일시: 2021년 05월 14일

- 개요: 이번 주 배웠던 `Vue.js`(특히, `vuex`)를 사용하여 영화 추천 사이트를 제작해보았습니다. 

- 의의: 

  - 이번 주에 학습했던 `Vue.js`에 익숙해지는 데 의의를 두었습니다.

- 방식: `Vue.js`를 사용하여 웹페이지 제작

- 목표:

  - `Vue.js`와 친해지기

    

<br>

### 2.  시작 & 마음가짐 👔 

---

- `Vue.js`와 친해지도록 노력하자

- Styling은 나중에 하고, 일단 기능 구현에 힘쓰자!

- 다른 팀원들과 협업해서 작업을 하는 것이니만큼 효율적으로 협력해보자

  

<br>

### 3. 기능

---

#### 3.1 영화 전체 조회

- `TMDB` API를 사용하여 전체 영화 목록 조회
- 영화 이미지, 제목, 줄거리 

<br>

#### 3.2 랜덤 영화 출력

- `PICK`을 클릭하면 랜덤으로 영화가 출력
- 해당 영화 제목을 클릭하면 해당 영화 정보가 팝업(구현예정)

<br>

#### 3.3 좋아하는 영화 리스트 생성

- 좋아하는 영화를 검색하고 저장
- 서버를 구성하여 각 유저마다 좋아하는 영화에 대한 정보를 소유 (구현예정)



<br>

### 4. TroubleShooting

---

- 해당 프로젝트 하는 동안 어려움이 있었던 것들을 정리하고, 문제들을 해결한 것들을 정리해보았습니다!



#### 4.1 home.vue에 접속하자마자 어떻게 영화 정보들을 가져올까?

---

##### 문제 🌚

사용자들이 웹페이지를 열면 바로 나오게 될 `Home` 컴포넌트에서 영화 정보들을 바로 보여주기 위해서 어떻게 해야할지 몰랐다. `methods`를 사용해줘서 출력해줘야할지..를 고민했었다

<br>

해결과정🌞

`Vue.js`에서는 라이프 사이클 훅이라는 것이 존재한다. 라이프 사이클에서 `mounted` 되었을 때 영화목록들을 불특징은 `package-lock.json`이 존재하면 그 내용으로 설치한다. 존재하지 않으면 오류가 난다. npm@5 버전이상에서 `package-lock.json`을 생성 후 다시 시도해야 한다.러오는 방식으로 문제를 해결했다.

<br>

#### 4.2 store.state 이름 변경할 때 key는 string으로 줘야한다.

---

- `vuex`를 사용할 때, store.state내에 정보의 이름을 변경하고 싶을 때 `key`는 string (ex.`'wow'`) 형식으로 작성해줘야한다.

<br>

#### 4.3 `npm run serve`가 안됨

---

문제 🌚

`vue.js`를 사용하여 웹페이지를 만들고 서버를 켜서 웹페이지가 잘 작동하는 지 보려고 `npm run serve`를 하였는데 에러가 나오면서 실행되지 않았다.

<br>

해결과정🌞

`npm ci` 커맨드를 통해 문제를 해결했다(아마, `npm install`로도 해결가능할듯 하다). 해당 에러는 `Git`을 통해 팀원들과 프로젝트 기능 구현을 분업하다보니, `package.json` 과 `package-lock.json`에 기입되어 있는 npm 패키지들이 내가 받아온 프로젝트에는 존재하지 않기 떄문에 서버를 가동시키는 것이 불가능 했던 것

<br>

`npm ci`에 대해서 더 조사해보니 `package-lock.json`이 있어야만 기능을 한다고 한다. 아래는 `npm ci`와 `npm install`의 차이점이다.

> - We must use `npm install` to install new dependencies, or to update existing dependencies.
> - We must use `npm ci` when running in continuous integration, or if you want to install dependencies without modifying the `package-lock.json`.

<br>

#### 4.4 vue/no-parsing-error parsing error x-invalid-end-tag

---

문제 🌚

vue 컴포넌트에서 `<template>` 내부에서 p태그를 사용하여 문서의 구조를 조정하고 있었는데, 제목과 같은 에러가 발생했다.

<문제 발생 코드>

```vue
<template>
  <div>
    Home
    <p v-for="(movie, index) in $store.state.moviesData" :key="index">
      <img :src="movie.poster_path">
      <span>영화 제목: {{ movie.title }} </span>
      <div>영화 줄거리: {{ movie.overview }}</div>
    </p>
    <MovieCard />
  </div>
</template>
```



아래 사이트를 보니 `Vue.js`에서는 자동으로 문법이나 syntax 오류를 확인해서 개발자에게 알려주는 것 같다.

https://eslint.vuejs.org/rules/no-parsing-error.html

<br>

해결과정🌞

<해결 코드>

```vue
<template>
  <div>
    Home
    <div v-for="(movie, index) in $store.state.moviesData" :key="index">
      <img :src="movie.poster_path">
      <p>영화 제목: {{ movie.title }} </p>
      <p>영화 줄거리: {{ movie.overview }}</p>
    </div>
    <MovieCard />
  </div>
</template>
```

그래서 p태그가 아닌 div 태그로 감싸주었다.

<br>

#### 4.5 v-model을 사용하면 한국어 인식에 어려움이 있다

---

문제 🌚

영화를 검색하는 기능을 팀원이 구현하였을 때 한글을 입력했을 때 초성/중성/종성으로 이루어진 한글의 한 글자를 다 입력하고 다음 초성을 입력해야만 검색이 제대로 진행되는 문제가 있었다.

우리가 원하는 것은, 초성/중성/종성으로 이루어진 한 글자의 한글이 입력되었을 때 검색이 되는 것이었다.

<br>

해결과정🌞

아래의 인용글로 대체하겠습니다!

>[IME](https://en.wikipedia.org/wiki/Input_method) (중국어, 일본어, 한국어 등)가 필요한 언어의 경우 IME 중 `v-model`이 업데이트 되지 않습니다. 이러한 업데이트를 처리하려면 `input` 이벤트를 대신 사용하십시오.
>
>https://moonspam.github.io/Vuejs-Autocomplete/

<br>



#### 4-6 blur 처리 되서 작업이 안됨

---

문제 🌚

영화 검색하는 기능을 구현할 때 생긴 문제이다.

영화 제목을 검색하고 해당 입력칸 밖을 클릭하면 검색한 것을 초기화해주는 `blur`이벤트를 사용해주었다. 그 다음, 아래 사진처럼 검색을 통해 나온 `쇼생크 탈출`을 클릭하면 밑의 목록에 추가되게 구현을 하려고 했는데, `click`을 하면 `blur`가 작동이 되어서 `쇼생크 탈출`이 사라지는 현상이 발생하였다.

![error image - blur](D:/STUDY/SSAFY/ssafy5-submission(시작하자마자 pull 끝나면 push/projects/pjt10/Troubleshooting.assets/image-20210514165846474.png)

<br>

해결과정🌞

이벤트에도 우선순위가 존재한다는 것을 알게되었고, `blur`보다 우선순위가 빠르고 `click`과 비슷한 역할을 하는 것을 찾아보았는데 `mouseover`가 있었다. 이를 활용해서 기능을 원하는 방식으로 구현할 수 있었다.

<br>





### 5. 느낀점  

---

#####  5.1 Git branch 사용법이 너무 어렵다

> 전보다 많은 팀원들과 협업을 하였는데, 각자 branch를 생성해서 기능을 구현해보았다. `Vuex`라는 공통의 파일을 건드려야 하는 상황이 필연적으로 발생하였고, 이 때문에 마지막에 기능들을 merge 하였을 때, branch를 다루는 부분에서 문제가 발생하였다. 이 부분에 대해서는 강의를 찾아서 들어봐야겠다.

<br>

##### 5.2 구글링을 통해 문제 해결하는 것은 재밌다.

> 프로그래밍을 통해 프로젝트를 할 때 많은 문제들과 직면한다. 이러할 때 구글링을 통해 문제를 해결하고 해당 원리에 대해서 공부를 하는 것은 나에게 재미를 가져다 주는 것 같다!

<br>

##### 5.3 항상 느끼지만, 기록 남기기 중요!

> 매번 이렇게 프로젝트를 할때마다 느끼는 게 내가 했던 것들을 기록하는 것은 쉬운 일이 아닌 것 같다. 일단, 프로젝트에 힘을 다 쏟은 상태에서 회고록처럼 기록을 남기는 것이 기 때문에 퀄리티 좋게 글을 쓸 수 없다. 그래서 이렇게 하다보니 생긴 노하우가 있는데, 프로젝트를 진행하면서 `Troubleshooting`에 관한 것은 짧게라도 써놓는 것이다!! 계속 글을 써보는 습관을 가지자!

​																																																<span class = 'Right' style="text-align: right">2021 -05-14</span>

​																																																			<span class='right'><span class = 'Right' style="text-align: right">송상민 </span></span>

