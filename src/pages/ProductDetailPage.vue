<template>
  <div v-if="product">
    <div class="img-wrap">
      <img :src="product.imageName" />
    </div>
    <div class="product-details">
      <h1>{{ product.name }}</h1>
      <h3 class="price">{{ product.price }}</h3>
      <p>{{ product.description }}</p>
    </div>
    <div class="">
      <router-link :to="/products/ + product.id">
        <button class="add-to-cart">Add to Cart</button>
      </router-link>
    </div>
  </div>
  <div v-else>
    <NotFoundPage />
  </div>
</template>

<script>
import { products } from "../temp-data";
import NotFoundPage from "./NotFoundPage.vue";

export default {
  name: "ProductDetailPage",
  data() {
    return {
      product: products.find(
        (product) => product.id === this.$route.params.productId
      ),
    };
  },
  components: {
    NotFoundPage,
  },
};
</script>
