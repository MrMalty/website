<template>
  <div class="nav-bar">
    <router-link to="/" class="product-link">
      <div class="logo-wrap">
        <img :src="logo" />
      </div>
    </router-link>
    <router-link to="/cart" class="cart-link">
      <button>Shopping cart</button>
    </router-link>
  </div>
</template>

<script>
import logo from "@/assets/Ellas-Creations.png";

export default {
  name: "NavBar",
  data() {
    return {
      logo,
    };
  },
};
</script>
