import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

import movies from '../assets/movie.json'

export default new Vuex.Store({
  state: {
    movies,
    myMovies: [],
    pickedMovie: [],
    moviesData: [],
  },
  mutations: {
    ADD_MY_MOVIE: function (state, movie) {
      state.myMovies.push(movie)
    },
    DELETE_MY_MOVIE: function (state, movie) {
      state.myMovies.splice(state.myMovies.indexOf(movie), 1)
    },
    PICK_RANDOM_MOVIE (state) {
      const pickedMovie  = _.sampleSize(movies, 1)
      const pickedMovieTitle = pickedMovie[0]['original_title']
      state.pickedMovie.push(pickedMovieTitle) 
    },
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
    addMyMovieAction: function ({ commit }, movie) {
      commit('ADD_MY_MOVIE', movie)
    },
    deleteMyMovieAction: function ({ commit }, movie) {
      commit('DELETE_MY_MOVIE', movie)
    },
    pickRandomMovie ({commit}) {
      commit('PICK_RANDOM_MOVIE')
    },
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
  getters: {
  },
  modules: {
  }
})
