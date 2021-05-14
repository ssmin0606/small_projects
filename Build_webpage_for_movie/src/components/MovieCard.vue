<template>
<div>
  <div class="row row-cols-1 row-cols-md-2 g-4">
    <div class="col" v-for="(movie, index) in $store.state.moviesData" :key="index">
      <div class="card h-100">
        <img :src="movie.poster_path" class="card-img-top h-100" alt="movie_image">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</div>


  
</template>

<script>
export default {
  name: 'MovieCard',
  computed: {
    getImageURL: function() {
      return this.$store.ImageURL
    }
  },
  mounted() {
    this.$store.dispatch('getMovieList')
  }
}

</script>

<style>

</style>