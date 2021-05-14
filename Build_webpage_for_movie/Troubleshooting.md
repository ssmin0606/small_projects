< Troubleshooting >

---

### 1. home.vue에 접속하자마자 어떻게 영화 정보들을 가져올까?

- `mounted`를 사용해서 dispatch를 보내주면 됨



### 2. store -> state 이름 변경할 때 key는 string으로 줘야한다.



### 3. `npm run serve`가 안됨

---

npm ci를 통해 노드 패키지 설치, 

- 여기서 package-lock.json과 package.json이 둘 다 존재하는데 이는 전자가 더 많은 정보를 가지고 있으므로 npm ci를 사용하면 전자를 설치하게 해줌. 속도도 빠르다고 함



### 4. vue/no-parsing-error parsing error x-invalid-end-tag

---

```javascript
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



https://eslint.vuejs.org/rules/no-parsing-error.html

vue.js에서 문법이나 syntax오류를 잡아주는 것 같다.



```javascript
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



그래서 p가 아닌 div로 감싸주었다~~~





### 4. vuex에 대한 원리에 대해 적응이 필요하다

---

```javascript
mutations: {
    GET_MOVIE_LIST (state, moviesData) {
      state.moviesData = 
        moviesData.map( movie => {
          return {
            ...movie,
            poster_path: 'https://image.tmdb.org/t/p/original' + movie.poster_path
          }
        })
    }
  },
  actions: {
    getMovieList ({ commit }) {
      axios ({
        method: 'get',
        url: 'https://gist.githubusercontent.com/eduChange-hphk/d9acb9fcfaa6ece53c9e8bcddd64131b/raw/9c8bc58a99e2ea77d42abd41376e5e1becabea69/movies.json'
      })
      .then( function(res) {
        commit('GET_MOVIE_LIST', res.data)
      })
    }
  },
```



### 5. v-model을 사용하면 한국어 인식에 어려움이 있다

---

그래서 v-bind를 활용하여 단방향을 두 번 반복해서 양방향을 직접 구현해준다.

관련 내용 참고





### 6. blur 처리 되서 작업이 안됨

---

![image-20210514165846474](D:\STUDY\SSAFY\ssafy5-submission(시작하자마자 pull 끝나면 push\projects\pjt10\Troubleshooting.assets\image-20210514165846474.png)



> Replace your click **event** with (*mousedown*). Mousedown event is called **before** blur. This code should works properly:
>
> ```
> <input (focus)="showDropdown()" (blur)="myBlurFunc()">
> <ul>
>   <li *ngFor="let item of dropdown" (mousedown)="myClickFunc()">{{item.label}}</li>
> </ul>
> ```
>
> It looks like click event has **lower priority** than blur, so it is predictible behaviour that blur event fires first.



- event에서도 우선순위가 존재함





### 7. git branch... 사용법이 너무 어렵다 ㅠㅠ

---

