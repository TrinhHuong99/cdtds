<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Main from './layouts/Main.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
@font-face {
    font-family: iCielPanton;
    src: url("assets/fonts/iCielPanton-Light.ttf") format("truetype"),
         url("assets/fonts/iCielPanton-Light.woff") format("woff");
}

@font-face {
    font-family: iCielPanton;
    font-weight: bold;
    src: url("assets/fonts/iCielPanton-Black.ttf") format("truetype"),
         url("assets/fonts/iCielPanton-Black.woff") format("woff");
}
html{
    font-size: 62.5%;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  color: #343434;
  font-family: iCielPanton;
  /* margin-top: 60px; */

}
@media only screen and (max-width: 1600px) {
    html{
        font-size: 40%;
    }

}
@media only screen and (max-width: 767px) {
    html{
        font-size: 100%;
    }
}
</style>
