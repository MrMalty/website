<template>
  <MainLayout>
    <div id="ItemPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justifybetween mx-auto w-full">
        <div class="md:w-[40%]">
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
        <div class="md:w-[60%] bg-white p-3 rounded-lg">
          <div v-if="true">
            <p class="mb-2">Title</p>
            <p class="font-light text-[12px] mb-2">Decription Section</p>
          </div>

          <div class="flex items-center pt-1">
            <span class="h-4 min-w-4 rounded-full p-0.5 bg-[#FFD000] mr-2">
              <icon
                name="material-symbols:star-rounded"
                class="-mt-[17px]"
                size="12"
              />
            </span>
            <p class="text-[#FF5353]">Extra 5% off</p>
          </div>

          <div class="flex items-center justify-start my-2">
            <icon name="ic:basline-star" color="#FF5353" />
            <icon name="ic:basline-star" color="#FF5353" />
            <icon name="ic:basline-star" color="#FF5353" />
            <icon name="ic:basline-star" color="#FF5353" />
            <icon name="ic:basline-star" color="#FF5353" />
            <span class="text-[13px] font-light ml-2">
              5 213 Reviews 1,000+ Overs
            </span>
          </div>
          <div class="border-b" />
          <div class="flex items-center justify-start gap-2 my-2">
            <div class="text-xl font-bold">${{ priceComputed }}</div>
            <span
              class="bg=[#f5f5f5] border text-[#c08562] text-[9px] font-semibold px-1.5 rounded-sm"
              >70% off</span
            >
          </div>
          <p class="text-[#009a66] text-xs font-semibold pt-1">
            Free 11-day delivery orders over $50.00
          </p>
          <p class="text-[#009a66] text-xs font-semibold pt-1">Free Shipping</p>
          <div class="py-2" />
          <button
            @click="addToCart()"
            :disabled="isInCart"
            class="px-6 py-2 rounded-lg text-[#535960] text-lg font-semibold bg-gradient-to-r from-[#F9D36B] to-[#F7E5B9]"
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

let currentImage = ref(null);

onMounted(() => {
  watchEffect(() => {
    currentImage.value = "https://picsum.photos/id/8/800/800";
    images.value[0] = "https://picsum.photos/id/8/800/800";
  });
});

// const isInCart = computed(() => {
//     let res = false
//     userStore.cart.forEach(prod => {
//         if (route.params.id == prod.id){
//             res=true
//         }
//     })
//     return res
// });

const priceComputed = computed(() => {
  return "26.40";
});

const images = ref([
  "",
  "https://picsum.photos/id/9/800/800",
  "https://picsum.photos/id/10/800/800",
  "https://picsum.photos/id/38/800/800",
  "https://picsum.photos/id/48/800/800",
  "https://picsum.photos/id/58/800/800",
]);

const addToCart = () => {
  alert("ADDED");
};
</script>
