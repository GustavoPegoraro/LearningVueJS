<template>
    <div class="basket">
      <div class="items">
  
        <template v-if="productsInCart.length">
          <div 
          class="item"
          v-for="(product, index) in productsInCart" :key="index"
          >
          <div class="remove" @click="this.$store.dispatch('removeFromCart', product.id)">Remover o item</div>
          <div class="photo"><img :src="product.image" alt=""></div>
          <div class="description">
            {{product.title}}
          </div>
          <div class="price">
            <span class="quantity-area">
              <button :disabled="product.quantity <= 1" @click="product.quantity--">-</button>
              <span class="quantity">{{product.quantity}}</span>
              <button @click="product.quantity++">+</button>
            </span>
            <span class="amount">R$ {{ (product.price * product.quantity).toFixed(2) }}</span>
          </div>
        </div>
        <div class="grand-total"> Valor total: R$ {{orderTotal()}}</div>
      </template>

      <template v-else>
        <h4>Você ainda não tem itens no carrinho.</h4>
      </template>

      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';

  export default {
    name: 'ShoppingBasket',
  
    computed: mapState([
      'products', 'productsInCart'
    ]),

    methods: {
     
      orderTotal() {
        let total = 0;
        this.productsInCart.forEach(item => {
          total += item.price * item.quantity;
        });
        return total.toFixed(2)
      }

    },

  }
  </script>
  
  <style lang="scss">
  
  .basket {
    padding: 60px 0;  
    .items {
      max-width: 800px;
      margin: auto;
      .item {
        display: flex;
        justify-content: space-between;
        padding: 40px 0;
        border-bottom: 1px solid lightgrey;
        position: relative;
  
        .remove {
          position: absolute;
          top: 8px;
          right: 0;
          font-size: 11px;
          text-decoration: underline;
          cursor: pointer;
        }
  
        .quantity-area {
          margin: 8px auto;
          height: 14px;
  
          button {
            width: 16px;
            height: 16px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
  
          .quantity {
  
              margin: 0 4px;
          }
        }
  
        .photo {
          img {
            max-width: 80px;
          }
        }
  
        .description {
          padding-left: 30px;
          box-sizing: border-box;
          max-width: 50%;
  
        }
  
        .price {
          .amount {
            font-size: 16px;
            margin-left: 8px;
            vertical-align: middle;
  
          }
        }
      }
        .grand-total {
            font-size: 24px;
            font-weight: bold;
            text-align: right;
            margin-top: 8px;
        }
  
    }
  
  }
  
  </style>
  