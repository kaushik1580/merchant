<template>
  <div id="app">
     <!-- <Header></Header> -->
    <!-- <Todos></Todos> -->
    <router-view/>
  </div>
</template>

<script>
// import Header from './components/Header'
// import Todos from './components/Todos'
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// color-green = #42b983
// color-blue = #2c3e50
</style>
