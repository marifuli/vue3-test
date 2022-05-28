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
let productsFromLocal = []
if(localStorage.getItem('@products')) {
  try {
    productsFromLocal = JSON.parse(localStorage.getItem('@products'))
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
    },

    setProduct: (state, product) => {
      if(!state.products) state.products = []
      if(product.id) {
        // it should update
        let objIndex = state.products.findIndex((obj => obj.id == product.id))
        state.products[objIndex] = product
      } else {
        state.products.push({ ...product, id: (Math.random() + 1).toString(36).substring(7) })
      }
      localStorage.setItem('@products', JSON.stringify(state.products))
    },
    deleteProduct: (state, index) => {
      state.products.splice(index, 1)

      localStorage.setItem('@products', JSON.stringify(state.products))
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
