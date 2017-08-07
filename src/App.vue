<template>
  <div id="app">
    <some id="search"></some>
    <foot id="footer"></foot>
    <router-view></router-view>
  </div>
</template>

<script>
  import some from './components/search-some.vue'
  import foot from './components/footer.vue'
  export default {
    components: {
      some,
      foot
    }
  }
</script>

<style>
  html{
    height: 100%;
  }

  body{
    height: 100%;
    overflow: hidden;
    background:url('./assets/background.png') no-repeat;
    background-size: 100% 100%;
  }

  #search {
    color: #2c3e50;
    width: 600px;
    font-family: Source Sans Pro, Helvetica, sans-serif;
    text-align: center;
    position: absolute;
    top: 35%;
    left: 50%;
    margin-left: -300px;
    margin-top: -100px;
  }

  #footer{
    width: 100%;
    position: absolute;
    margin-left: 0;
    bottom: 0;
  }
</style>

