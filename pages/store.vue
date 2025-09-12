<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";
import { onMounted } from "vue";

useHead({
  title: "Kialla Computers - Services",
});
const products = [
  {
    name: "Cougar GLE 1000 1000W 80+ Gold modular ATX3.1 PCIe 5.1 PSU",
    price: "220",
    popular: true,
    image: "img/Products/csps1gle1000.jpg",
  },
  {
    name: "Asus Expertbook P5 P5405CSA-NZ0241X U5 14in 16G 512G W11P AI",
    price: "2500",
    popular: true,
    image: "img/Products/nbasp5405csa-41.jpg",
  },
  {
    name: "MSI Thin 15 B13UDX-2278AU Gaming notebook i5-13420H RTX3050",
    price: "1460",
    popular: true,
    image: "img/Products/nbmt15b13ud2278.jpg",
  },
  {
    name: "Cougar SPEEDER ONE Mesh Gaming Chair",
    price: "310",
    popular: true,
    image: "img/Products/chspeeder-one.jpg",
  },
];

const client = usesupabaseclient();
const catergories = ref([]);


onMounted(async () => {
  const { data, error } = await client.from('catergories').select()
  catergories.value = data;
});

</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Store</template>
    </LandingSectionhead>

    <div
      class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <LandingProducts v-for="item of products" :plan="item" />
    </div>
  </LandingContainer>
</template>
