<template>
  <div class="hello">
    <some id="search"></some>
    <foot></foot>
    <header></header>
  </div>
</template>

<script>
  import some from './search-some.vue'
  import foot from './footer.vue'
  import header from './header.vue'
  export default {
    name: 'home',
    components: {
      some,
      foot,
      header
    }
  }
</script>

<style scoped>
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
</style>
