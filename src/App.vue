<template>
  <div class="body">
    <div class="bg-dark">
      <nav class="navbar navbar-expand-lg navbar-dark container">
        <router-link class="navbar-brand" to="/">
          My App
        </router-link> 
        <div>
          <div class="navbar-nav">
            <router-link class="nav-item nav-link" :to="{name: 'login'}">
              Login
            </router-link>
            <router-link class="nav-item nav-link" :to="{name: 'register'}">
              Register
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
 