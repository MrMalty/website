<template>
  <router-link :to="{ path: 'ProductPage/' + this.item.id }">
    <div class="product-card">
      <div class="inner-container" href="#">
        <img :src="item.image" class="product-image" />
        <p class="product-title">{{ item.title }}</p>
        <p class="product-price">${{ parseFloat(item.price).toFixed(2) }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    item: {},
    default: {},
  },
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  max-width: 300px;
  box-shadow: 3px 5px 3px 0px rgba(0, 0, 0, 0.34);
  margin-bottom: 30px;
  background-color: #fff;
  border-radius: 10px;
  font-family: "Trirong", serif;
}
.product-card a {
  color: #727b85;
  text-decoration: none;
}
.product-card .inner-container {
  padding: 40px;
  position: relative;
  padding-bottom: 50px;
  height: 100%;
}
.product-card .product-image {
  height: 200px;
  width: 200px;
}
.product-card .product-price {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
/* #727B85 */
/* #DDDAD0 */
</style>
