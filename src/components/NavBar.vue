<template>
  <div class="nav-bar">
    <div class="logo-wrap">
      <router-link to="/">
        <img :src="logo" />
      </router-link>
    </div>
    <router-link to="/cart" class="cart-link">Cart</router-link>
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
