<template>
  <div id="app">
    <ul>
      <li><router-link to="/" exact>首页</router-link></li>
       <li><router-link to="testdemo" >测试页</router-link></li>
    </ul>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

li{display: inline-block;list-style: none;}
</style>
