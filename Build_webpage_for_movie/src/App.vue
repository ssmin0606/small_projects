<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> | 
      <router-link :to="{ name: 'Random' }">Random</router-link> | 
      <router-link :to="{ name: 'MyMovieList' }">MyMovieList</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

button {
  margin-Left: 5px;
  margin-Top: 15px;
  background-color: rgba(163, 204, 163, 0.2);
  border-radius: 5px;
  border-color: white;
}
</style>
