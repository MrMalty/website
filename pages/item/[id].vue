<template>
  <MainLayout>
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[30%]">
          <img
            v-if="currentImage"
            class="rounded-lg object-fit"
            :src="currentImage"
          />
          <div
            v-if="images[0] !== ''"
            class="flex items-center justify-center mt-2"
          >
            <div v-for="image in images">
              <img
                @mouseover="currentImage = image"
                @click="currentImage = image"
                width="70"
                class="rounded-md object-fit border-[3px] cursor-pointer"
                :class="currentImage === image ? 'border-[#FF5353]' : ''"
                :src="image"
              />
            </div>
          </div>
        </div>
        <div class="md:w-[60%] bg-[#F1FEFF] p-3 rounded-lg">
          <div v-if="product && product.data">
            <p class="mb-2">{{ product.data.title }}</p>
            <p class="mb-2 mt-1">{{ product.data.productcode }}</p>
            <p
              class="font-light text-[16px] mb-2"
              v-html="product.data.description"
            ></p>
          </div>
          <!--<div class="flex items-center pt-1.5">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
              <Icon
                name="material-symbols:star-rounded"
                class="-mt-[17px]"
                size="12"
              />
            </span>
            <p class="text-[#FF5353]">Extra 5% off</p>
          </div>
          <div class="flex items-center justify-start my-2">
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <Icon name="ic:baseline-star" color="#FF5353" />
            <span class="text-[13px] font-light ml-2">
              5 213 Reviews 1,000+ orders
            </span>
          </div> -->
          <div class="border-b" />

          <div class="flex items-center justify-start gap-2 my-2">
            <div class="text-4xl font-bold">${{ priceComputed }}</div>
            <!--<span
              class="bg-[#F5F5F5] border text-[#0E2167] text-[12px] font-semibold px-1.5 rounded-lg"
              >50% off</span
            >-->
          </div>
          <!--          <p class="text-[#23AAEF] text-xs font-semibold pt-1">
            Free 11-day Delivery over $100.00
          </p>
          <p class="text-[#23AAEF] text-xs font-semibold pt-1">Free Shipping</p>-->
          <div class="py-2" />
          <button
            @click="addToCart()"
            :disabled="isIncart"
            class="px-6 py-2 rounded-lg text-[#FFFFFF] text-lg font-semibold bg-[#0E2167]"
          >
            <div v-if="isInCart">Is Added</div>
            <div v-else>Add to Cart</div>
          </button>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const route = useRoute();

let product = ref(null);
let currentImage = ref(null);

onBeforeMount(async () => {
  product.value = await useFetch(
    `/api/prisma/get-product-by-id/${route.params.id}`
  );
});

watchEffect(() => {
  if (product.value && product.value.data) {
    currentImage.value = product.value.data.url;
    images.value[0] = product.value.data.url;
    product.value.data.images.forEach((image) => {
      images.value.push(image);
    });
    userStore.isLoading = false;
    console.log(images);
  }
});

const isInCart = computed(() => {
  let res = false;
  userStore.cart.forEach((prod) => {
    if (route.params.id == prod.id) {
      res = true;
    }
  });
  return res;
});

const priceComputed = computed(() => {
  if (product.value && product.value.data) {
    return product.value.data.price / 100;
  }
  return "0.00";
});

const images = ref([]);

const addToCart = () => {
  userStore.cart.push(product.value.data);
};
</script>
