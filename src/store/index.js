import { createStore } from 'vuex'

// using localstorage to get user info just for TEST perpose
let userFromLocal = {}
if(localStorage.getItem('@user')) {
  try {
    userFromLocal = JSON.parse(localStorage.getItem('@user'))
  } catch (error) {
    console.log(error)
  }
}
let productsFromLocal = {}
if(localStorage.getItem('@user')) {
  try {
    productsFromLocal = JSON.parse(localStorage.getItem('@user'))
  } catch (error) {
    console.log(error)
  }
}

export default createStore({
  state: {
    user: userFromLocal,
    user_token: localStorage.getItem('@user_token') || null,

    products: productsFromLocal
  },
  getters: {

  },
  mutations: {
    updateUser: (state, user) => {
      state.user = user
      localStorage.setItem('@user', JSON.stringify(user))
    },
    updateUserToken: (state, token) => {
      // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      state.user_token = token 
      localStorage.setItem('@user_token', token)
    }
  },
  actions: { 
    setUser: ({commit}, user) => {
      commit('updateUser', user)
    },
    setUserToken: ({commit}, token) => {
      commit('updateUserToken', token)
    },
  },
  modules: {
  }
})
