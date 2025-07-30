import { provide } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    productsInCart: [],
    total: Number,
  },
  mutations: {

    loadProducts(state, products) {
      state.products = products
    },
    
    loadCart(state, products) {
      state.productsInCart = products
    },

    addToCart(state, product) {
      state.productsInCart.push(product)
      localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart))
    },
    
    removeFromCart(state, productId) {
      var updatedCart = state.productsInCart.filter(item => item.id != productId);
      state.productsInCart = updatedCart
      localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart))
    },
  },
  actions: {
    
    loadProducts({ commit }) {
      axios
      .get('https://fakestoreapi.com/products')
      .then(response => {
        commit('loadProducts', response.data);
      })
    },
    
    loadCart({ commit }) {
      if (localStorage.getItem("productsInCart")){
        commit('loadCart', JSON.parse(localStorage.getItem("productsInCart")));
      }
    },

    addToCart({ commit }, product) {
      commit('addToCart', product)
    },

    removeFromCart({ commit }, productId) {
      if (confirm("Você tem certeza que deseja retirar o item do carrinho?")) {
        commit('removeFromCart', productId)
      }
    },
  },
  modules: {
  }
})
