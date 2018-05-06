<template>
<div>
  <h2>{{msg}}</h2>
  <div class="hello-bem hello-ben--init">
    <button class="hello-bem__btn" @click="test">加+1</button>
    <button class="hello-bem__btn">减-1</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods:{
    test(){
      alert("111");
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
:root{
  --mainColor:yellowgreen;
}

.hello-bem{
  border:1px solid var(--mainColor);
  border-radius: 5px;
}
.hello-bem__btn{
   background:#ff9800;
   border:2px solid red;
   cursor: pointer;
   padding:10px;
}

.hello-ben--init{
  padding:1em;
}
</style>
