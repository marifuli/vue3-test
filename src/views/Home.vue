<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    rg 
    <h1>{{ count }}</h1>
     erh w 
    <button @click="increment" class="btn btn-danger">Increment</button>
   
  </div>
</template>

<script setup>
// @ is an alias to /src
import { ref } from '@vue/reactivity'
let count = ref(0);
function increment () {
  count.value++
}
</script>
