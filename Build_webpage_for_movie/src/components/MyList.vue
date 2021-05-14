<template>
  <div>
    <div>{{ movie.title }}
    <button @click="deleteMyMovieAction(movie)">X</button></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'MyList',
  props: {
    movie: {
      type: Object,
    }
  },
  methods: {
    ...mapActions([
      'deleteMyMovieAction',
    ])
  }
}
</script>

<style>
</style>