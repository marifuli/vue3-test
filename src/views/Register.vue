<template>
  <div class="m-auto" style="max-width: 800px;">
    <h1 class="text-center mt-3">
      Register
    </h1>
    <form @submit.prevent="submit">
      <div class="form-group mt-3">
        <label for="Name">Name</label>
        <input type="text" class="form-control" id="Name" aria-describedby="emailHelp" placeholder="Enter Name" 
        v-model="user.name"
        required
        />
      </div>
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
      <div class="form-group mt-3">
        <label for="InputPassword2">Confirm Password</label>
        <input type="password" class="form-control" id="InputPassword2" placeholder="Password" 
        v-model="user.confirmPassword"
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
<script setup>
import { reactive, ref } from "@vue/reactivity";

const user = reactive({
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
});
const error = ref('');
const loading = ref(false);

function submit () {
  error.value = ''

  // validate the inputs
  if(user.name.length < 3) {
    return error.value = 'Name length should be greater than 3'
  }
  if(user.email.length < 3 || user.email.indexOf('@') < 2) {
    return error.value = 'Enter a valid email'
  }
  if(!user.password || user.password !== user.confirmPassword) {
    return error.value = 'Ener the same password in the confirm password field'
  }
  if(user.password.match( /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{6,}$/) === null) {
    return error.value = 'Password must contain uppercase, lowercase, number, and minimum 6 characters'
  }

  // loading.value = true
  // axios requestion will go here, which should 
  // return a token/key and user data for the logged in user. For now i am directly setting the token

  // loading.value = false 
}

</script>
