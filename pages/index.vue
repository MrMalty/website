<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";

const products = [
  {
    id: 1,
    title: "Coffe with a mate",
    description:
      "Coffe with a mate as you discuss the relativity of space and time",
    url: "https://picsum.photos/id/7/500/500",
    price: 9999,
  },
  {
    id: 2,
    title: "Title 2",
    description: "This is a description",
    url: "https://picsum.photos/id/8/500/500",
    price: 19999,
  },
  {
    id: 3,
    title: "Title 3",
    description: "This is a description",
    url: "https://picsum.photos/id/9/500/500",
    price: 29999,
  },
  {
    id: 4,
    title: "Title 4",
    description: "This is a description",
    url: "https://picsum.photos/id/10/500/500",
    price: 39999,
  },
  {
    id: 5,
    title: "Title 5",
    description: "This is a description",
    url: "https://picsum.photos/id/11/500/500",
    price: 49999,
  },
  {
    id: 6,
    title: "Title 6",
    description: "This is a description",
    url: "https://picsum.photos/id/12/500/500",
    price: 59999,
  },
  {
    id: 7,
    title: "Title 7",
    description: "This is a description",
    url: "https://picsum.photos/id/13/500/500",
    price: 69999,
  },
  {
    id: 8,
    title: "Title 8",
    description: "This is a description",
    url: "https://picsum.photos/id/14/500/500",
    price: 79999,
  },
  {
    id: 9,
    title: "Title 9",
    description: "This is a description",
    url: "https://picsum.photos/id/15/500/500",
    price: 89999,
  },
  {
    id: 10,
    title: "Title 10",
    description: "This is a description",
    url: "https://picsum.photos/id/16/500/500",
    price: 99999,
  },
  {
    id: 11,
    title: "Title 11",
    description: "This is a description",
    url: "https://picsum.photos/id/17/500/500",
    price: 109999,
  },
];
</script>
