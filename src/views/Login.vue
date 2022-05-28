<script setup>
import { reactive, ref } from "@vue/reactivity";
import {useStore} from 'vuex'
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useStore()
const user = reactive({
  name: "",
  email: ""
});
const error = ref('');
const loading = ref(false);

function submit () {
  error.value = ''

  // validate the inputs
  if(user.email.length < 3 || user.email.indexOf('@') < 2) {
    return error.value = 'Enter a valid email'
  }
  if(!user.password) {
    return error.value = 'Ener the same password in the confirm password field'
  }

  // loading.value = true
  // axios requestion will go here, which should 
  // return a token/key and user data for the logged in user. For now i am directly setting the token
  store.dispatch('setUser', {
    id: 1,
    name: 'Test name',
    email: user.email
  })
  router.push('/')
  // loading.value = false 
}

</script>
<template>
  <div class="m-auto" style="max-width: 800px;">
    <h1 class="text-center mt-3">
      Login
    </h1>
    <form @submit.prevent="submit">
      <div class="form-group mt-3">
        <label for="Email">Email address</label>
        <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" 
        v-model="user.email"
        required
        />
      </div>
      <div class="form-group mt-3">
        <label for="InputPassword1">Password</label>
        <input type="password" class="form-control" id="InputPassword1" placeholder="Password" 
        v-model="user.password"
        required
        />
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