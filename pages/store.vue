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

const supabase = useSupabaseClient();
const catergories = ref([]);
const frontpageitems = ref([]);

onMounted(async () => {
  const { data, error } = await supabase
    .from("catergories")
    .select()
    .order("catergory", { ascending: true });
  catergories.value = data;
  console.log(data);

  const { product, errorproduct } = await supabase
    .from("products")
    .eq("frontpage", "True")
    .select();
  frontpageitems.value = product;
  console.log(product);
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Store</template>
    </LandingSectionhead>

    <div class="mt-6 flex flex-cols mx-auto">
      <div class="mt-6 w-[300px] px-6">
        <p class="border-b border-FooterText mb-5">Catergories:</p>
        <div v-for="cat in catergories" :key="catergories.id" class="">
          {{ cat.catergory }}
        </div>
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <LandingProducts v-for="item of products" :plan="item" />
      </div>
    </div>
  </LandingContainer>
</template>
