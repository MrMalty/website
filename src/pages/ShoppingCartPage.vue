<template>
  <h1>Your Cart</h1>
  <div v-if="cartItems.length > 0">
    <ShoppingCartList :products="cartItems" />
    <button class="checkout-button">Proceed to Checkout</button>
  </div>
  <div v-if="cartItems.length === 0" class="details-wrap">
    <h3>You current have no items in your cart!</h3>
  </div>
</template>

<script>
import { cartItems } from "../temp-data";
import ShoppingCartList from "@/components/ShoppingCartList.vue";

export default {
  name: "ShoppingCartPage",
  components: {
    ShoppingCartList,
  },
  data() {
    return {
      cartItems,
    };
  },
};
</script>
