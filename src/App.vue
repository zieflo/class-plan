<template>
  <div id="app">
    <Header/>
    <div class="img-bck" style="background-image:url('../static/img/ecole-primaire.jpg')">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.img-bck {
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 800px;
}

</style>
