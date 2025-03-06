<template>
  <div
    :id="`ProdcutComponent${product.id}`"
    class="bg-white inline-block rounded hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.15)] cursor-pointer"
  >
    <NuxtLink :to="`/item/${product.id}`">
      <img class="rounded-t" :src="product.url" />
      <div id="ProductDetails">
        <span class="flex items-center justify-start gap-3 px-1 pt-1">
          <span class="text-[#FF6674] font-semibold">{{ priceComputed }}</span>
          <span class="text-gray500 text-sm text-light line-through">{{
            oldPriceComputed
          }}</span>
        </span>
        <span
          class="px-1 relative -top-1.5 text-[#FF6674] text-xs font-semibold"
        >
          Extra 5% off</span
        >
        <div class="flex items-center gap-1 px-1 relative -top-1">
          <span
            class="bg-[#FD374F] text-white text-[9px] font-semibold px-1.5 rounded-sm"
          >
            Welcome Deal</span
          >
          <span
            class="bg-[#f5f5f5] border text-[#c08562] text-[9px] font-semibold px-1.5 rounded-sm"
            >Top Selling</span
          >
        </div>
        <P class="flex items-center px-1 pt-0.5 text-xs text-[#252525]">
          5,000+ sold
          <icon
            name="material-symbols:star-rate"
            color="#F8D16B"
            class="ml-1.5"
          />
          4.7</P
        >
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
