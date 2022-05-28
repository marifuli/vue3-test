<script setup>
import { computed, reactive } from '@vue/runtime-core';
import {useStore} from 'vuex'
const store = useStore();

const filter = reactive({
  category: null
})
const products = computed(() => {
  if(!store.state.products) {
    return []
  }
  if(filter.category)
  {
    return store.state.products.filter((pro) => pro.category == filter.category)
  }
  return store.state.products
})
function  del (i) {
  store.commit('deleteProduct', i)
}
</script>

<template>
  <div class="home">
    <div
    v-if="products && products.length"
    >
      <div class="filter">
        <strong> Filter: </strong>
        <select v-model="filter.category" class="form-control">
          <option value="">All</option>
          <option value="Ladies">Ladies</option>
          <option value="Man">Man</option>
          <option value="Kids">Kids</option>
          <option value="Shirts">Shirts</option>
          <option value="Pants">Pants</option>
          <option value="etc..">etc..</option>
        </select>
      </div>
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
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <i> No products found! </i>
    </div>
  </div>
</template> 
