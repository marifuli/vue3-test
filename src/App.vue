<script setup>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex"

const store = useStore()
const user =  computed(() => store.state.user);

</script>
<template>
  <div class="body">
    <div class="bg-dark">
      <nav class="navbar navbar-expand-lg navbar-dark container">
        <router-link class="navbar-brand" to="/">
          My App
        </router-link> 
        <div class="w-100 d-flex">
          <div 
          v-if="user && user.id"
          class="navbar-text">
            <span class="nav-item nav-link"> Logged in as {{ user.name }} </span>
          </div>
          <div 
          v-else
          class="navbar-text">
            <router-link class="nav-item nav-link" :to="{name: 'login'}">
              Login
            </router-link>
            <router-link class="nav-item nav-link" :to="{name: 'register'}">
              Register
            </router-link>
          </div>
          <div 
          class="navbar-text"> 
            <router-link class="nav-item nav-link" :to="{name: 'products'}">
              Add Product
            </router-link>
          </div>
          <div 
          class="navbar-text">
            <router-link class="nav-item nav-link" :to="{name: 'home'}">
              Products
            </router-link>
          </div>
        </div>
      </nav> 
    </div>
    <div class="container mt-3">
      <router-view/>  
    </div>
    
  </div>
</template>
 