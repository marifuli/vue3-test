<script setup>
import { reactive, ref } from "@vue/reactivity";
import {useStore} from 'vuex'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const store = useStore()

let product_data = {
  category: "",
  title: "",
  description: "",
  quantity: 0,
  price: 0.00,
  user_id: 1
}
// console.log(route.query)
if(route.query && route.query.index)
{
    product_data = store.state.products[route.query.index]
}
const product = reactive(product_data);
const error = ref('');
const loading = ref(false);

function submit () {
  error.value = ''
 
  // loading.value = true
  // axios requestion will go here, which should 
  // return a token/key and user data for the logged in user. For now i am directly setting the token
  store.commit('setProduct', {
    ...product
  })
 
  router.push('/')
//   this.$router.push({
//             name: 'animes.list',
  // loading.value = false 
}

</script>
<template>
  <div class="m-auto" style="max-width: 800px;">
    <h1 class="text-center mt-3">
      Add Product
    </h1>
    <form @submit.prevent="submit">

      <div class="form-group mt-3">
        <label for="Title">Title</label>
        <input type="text" class="form-control" id="Title" aria-describedby="emailHelp" placeholder="Enter Title" 
        v-model="product.title"
        required
        />
      </div> 
      <div class="form-group mt-3">
        <label for="quantity">Quantity</label>
        <input type="number" class="form-control" id="quantity" aria-describedby="emailHelp" placeholder="Enter quantity" 
        v-model="product.quantity"
        required
        />
      </div> 
      <div class="form-group mt-3">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" placeholder="Enter price" 
        v-model="product.price"
        required
        />
      </div> 
      <div class="form-group mt-3">
        <label for="Description">Description</label>
        <textarea class="form-control" 
        v-model="product.description"
        required
        ></textarea>
      </div> 
      <div class="form-group mt-3">
        <label for="Category">Category</label>
        <select class="form-control" 
        v-model="product.category"
        required
        >
            <option value="Ladies">Ladies</option>
            <option value="Man">Man</option>
            <option value="Kids">Kids</option>
            <option value="Shirts">Shirts</option>
            <option value="Pants">Pants</option>
            <option value="etc..">etc..</option>
        </select>
      </div> 

      <div class="all-errors mt-3" v-if="error">
          <div class="alert alert-danger">{{ error }}</div>
      </div>
      <button type="submit" class="btn btn-primary mt-3"
      :disabled="loading"
      >Submit</button>
    </form>
  </div>
</template>