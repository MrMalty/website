<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1280px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="products">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

let products = ref(null);
onBeforeMount(async () => {
  products.value = await useFetch("/api/prisma/get-all-products");
  console.log(products);
  setTimeout(() => (userStore.isLoading = false), 1000);
});

// const products = [
//   {
//     id: 1,
//     title: "Title 1",
//     description: "This is a description",
//     url: "https://www.kiallacomputers.com.au/products/612rSGQ8zkL.jpg",
//     price: 9899,
//   },
//   {
//     id: 2,
//     title: "Title 2",
//     description: "This is a description",
//     url: "https://www.kiallacomputers.com.au/products/gartx5090ato.jpg",
//     price: 9699,
//   },
//   {
//     id: 3,
//     title: "Title 3",
//     description: "This is a description",
//     url: "https://www.kiallacomputers.com.au/products/gartx5090mv30.jpg",
//     price: 9969,
//   },
//   {
//     id: 4,
//     title: "Title 4",
//     description: "This is a description",
//     url: "https://www.kiallacomputers.com.au/products/guardiangamingpc32g.jpg",
//     price: 29999,
//   },
// ];
</script>
