<template>
  <div >
    <input @blur="removeResposiveSearch" @input="responsiveSearch" :value="searchInput" @keypress.enter="addMyMovie" type="text" placeholder="영화 제목">
    <button @click="addMyMovie">ADD</button>
    <!-- click 이벤트는 blur보다 낮은 우선순위, blur가 먼저 적용된다. mousedown은 blur보다 우선한다. -->
    <div class="List" @mousedown="select(responsiveResult.title)" v-for="(responsiveResult, idx) in responsiveSearchList" :key="idx">{{ responsiveResult.title }}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'MyListForm',
  data: function () {
    return {
      searchInput: '',
      responsiveSearchList: [],
    }
  },
  methods: {
    // 최종 플젝 때 쓸 거
    responsiveSearch: function (e) {
      this.searchInput = e.target.value
      if (this.searchInput.trim()) {
        this.responsiveSearchList = this.movies.filter((movie) => {
          return movie.title.replace(' ', '').includes(this.searchInput) || movie.title.includes(this.searchInput)
        })
      } else {
        this.responsiveSearchList = []
      }
    },
    removeResposiveSearch: function () {
      this.responsiveSearchList = []
    },
    addMyMovie: function () {
      // if (this.searchInput && this.responsiveSearchList.titleincludes(this.searchInput)) {
      if (this.searchInput) {
        const movie = {
          title: this.searchInput,
          date: Date.now()
        }
        this.addMyMovieAction(movie)
      }
      this.searchInput = ''
      this.responsiveSearchList = []
    },
    select: function (selectedMovie) {
      this.searchInput = selectedMovie
      this.addMyMovie()
    },
    ...mapActions([
      'addMyMovieAction',
    ])
  },
  computed: {
    ...mapState([
      'movies',
    ])
  },
}
</script>

<style>
.List {
  cursor: pointer;
}

.List:hover {
  background: #eee;
}
</style>