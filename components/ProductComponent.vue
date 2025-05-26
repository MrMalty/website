<template>
  <div
    :id="`ProductComponent${product.id}`"
    class="bg-white inline-block rounded hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] cursor-pointer"
  >
    <NuxtLink :to="`/item/${product.id}`">
      <img class="rounded-t" :src="product.url" />
      <div id="ProductDetails">
        <p class="px-1 pt-0.5 text-xs text-[#0E2167]">
          {{ product.title.substring(0, 60) }}
        </p>
        <p class="px-1 pt-0.5 text-xs text-[#0E2167]">
          {{ product.productcode }}
        </p>
        <span class="flex items-center justify-start gap-3 px-1 pt-1">
          <span class="text-[#0E2167] font-semibold">${{ priceComputed }}</span>
          <span class="text-[#FF4646] text-sm text-light line-through"
            >${{ oldPriceComputed }}</span
          >
        </span>
        <span
          v-if="product.instock === 'false'"
          class="px-1 relative -top-1.5 text-[#E93131] text-xs font-semibold"
        >
          Back Order
        </span>
        <span
          v-if="product.instock === 'true'"
          class="px-1 relative -top-1.5 text-[#68E931] text-xs font-semibold"
        >
          In Stock
        </span>
          <span class="text-[#E93131] text-xs font-semibold"
            >3-4 Days on Order</span
          >

        <!--
        <div class="flex items-center gap-1 px-1 relative -top-1">
          <span
            class="bg-[#0E2167] text-white text-[9px] font-semibold px-1.5 rounded-sm"
            >Welcome Deal</span
          >
          <span
            class="bg-[#F5F5F5] border text-[#23AAEF] text-[9px] font-semibold px-1.5 rounded-sm"
            >Top Selling</span
          >
        </div>
        <p class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
          5,000+ Sold
          <Icon
            name="material-symbols:star-rate"
            color="#757575"
            class="ml-1.5"
          />
          4.7
        </p>
        <p class="px-1 pt-0.5 text-xs text-[#23AAEF]">
          {{ product.title.substring(0, 60) }}
        </p>-->
        <p v-if="product.instock === 'false'" class="px-1 pb-1">
          <span class="text-[#E93131] text-xs font-semibold"
            >3-4 Days on Order</span
          >
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);
const { product } = toRefs(props);

const priceComputed = computed(() => {
  return product.value.price / 100;
});

const oldPriceComputed = computed(() => {
  let res = (product.value.price + product.value.price / 20) / 100;
  return res.toFixed(2);
});
</script>
