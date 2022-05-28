<script setup>
import { computed } from '@vue/runtime-core';
import {useStore} from 'vuex'
const store = useStore();

const products = computed(() => {
  if(!store.state.products) {
    return []
  } 
  return store.state.products.filter((pro) => store.state.carts.indexOf(pro.id) > -1)
})

function  del (i) {
  store.commit('deleteProduct', i)
}
function cart (id) {
  if(store.state.carts.indexOf(id) === -1) {
    store.commit('addCart', id)
  } else {
    store.commit('removeCart', id)
  }
}
</script>

<template>
  <div class="home">
    <h1>My Cart: </h1>
    <div
    v-if="products && products.length"
    > 
      <div class="row mt-3">
        <div class="card col-3"
        v-for="(product, i) in products" :key="i"
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
            <button @click="cart(product.id)" class="btn btn-info m-2"
            v-if="store.state.carts.indexOf(product.id) === -1"
            >
              Add to cart
            </button>
            <button @click="cart(product.id)" class="btn btn-warning m-2"
            v-else
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <i> No products found! </i>
    </div>
  </div>
</template> 
