<template>
  <div>
    <MyListForm/>
    <MyList
    v-for="(movie, idx) in myMovies"
    :key="idx"
    :movie="movie"
    />
  </div>
</template>

<script>
import MyListForm from '@/components/MyListForm'
import MyList from '@/components/MyList'
import { mapState } from 'vuex'

export default {
  name: 'MyMovieList',
  components: {
    MyListForm,
    MyList,
  },
  computed: {
    ...mapState([
      'myMovies',
    ])
  }
}
</script>

<style>

</style>