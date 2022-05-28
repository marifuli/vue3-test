<script setup>
import {useStore} from 'vuex'
const store = useStore();

function  del (i) {
  store.commit('deleteProduct', i)
}
</script>

<template>
  <div class="home">
    <div class="row"
    v-if="store.state.products && store.state.products.length"
    >
      <div class="card col-3"
      v-for="(product, i) in store.state.products" :key="i"
      >
        <div class="card-body">
          <h5 class="card-title">
            {{ product.title }}
          </h5>
          <p class="card-text">
            {{ product.description }}
            <br> 
            <br> 
            <strong>
              Qty: {{ product.quantity }}
              <br>
              Price: ${{ product.price }}
              <br>
              Category: {{ product.category }}
            </strong>
          </p>
          <router-link :to="{name: 'products', query: {index: i}}" class="btn btn-primary">
            Edit
          </router-link>
          <button @click="del(i)" class="btn btn-danger m-2"> Delete </button>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <i> No products found! </i>
    </div>
  </div>
</template> 
