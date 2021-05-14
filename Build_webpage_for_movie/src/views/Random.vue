<template>
  <div>
      <div class="title" v-for="(movie, idx) in pickedMovie" :key="idx">{{movie}}</div>
      <button class="btn" @click="pickRandomMovie">PICK</button>
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
  name: 'Random',
  methods: {
    ...mapActions([
      'pickRandomMovie',
    ])
  },
  computed: {
    pickedMovie: function () {
      if (this.$store.state.pickedMovie) {
        return this.$store.state.pickedMovie
      }
        return "버튼을 클릭해주세요."
    }
  }
}
</script>

<style>
.title {
  background-color: rgba(163, 204, 163, 0.2);
  padding: 5px;

}
</style>