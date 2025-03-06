<template>
  <MainLayout>
    <div id="ShoppingCart" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div v-if="false" class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img class="mx-auto" width="200" src="/images/cart-empty.png" />
          <div class="text-xl text-center mt-4">No items yet!</div>
          <div v-if="true" class="flex text-center">
            <NuxtLink
              to="/auth"
              class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Sign In
            </NuxtLink>
          </div>
        </div>
      </div>

      <div v-else class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">Shopping Cart (0)</div>
          </div>
          <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
            <div class="text-red-500 font-bold">
              Welcome Deal applicable on 1 item only
            </div>
          </div>
          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <cartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
        </div>
        <div class="md:hidden block my-4" />
        <div class="md:w-[35%]">
          <div id="Summary" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $<span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              @click="gToCheckout"
              class="flex items-center justify-center bg-[#fd374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Checkout
            </button>
          </div>
          <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">Payment Methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards">
                <img class="h-6" :src="card" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "~/layouts/MainLayout.vue";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

let selectedArray = ref([]);

onMounted(() => {
  setTimeout(() => (userStore.isLoading = false), 200);
});

const cards = ref([
  "images/visa.png",
  "images/mastercard.png",
  "images/paypal.png",
  "images/applepay.png",
]);

const totalPriceComputed = computed(() => {
  let price = 0;
  userStore.cart.forEach((prod) => {
    price += prod.price;
  });
  return price / 100;
});

const selectedRadioFunc = (e) => {
  if (!selectedArray.value.length) {
    selectedArray.value.push(e);
    return;
  }
  selectedArray.value.forEach((item, index) => {
    if (e.id != item.id) {
      selectedArray.value.push(e);
    } else {
      selectedArray.value.splice(index, 1);
    }
  });
};

const goToCheckout = () => {
  let ids = [];
  userStore.checkout = [];

  selectedArray.value.forEach((item) => ids.push(item.id));

  let res = userStore.cart.filter((item) => {
    return ids.indexOf(item.id) != -1;
  });

  res.forEach((item) => userStore.checkout.push(toRaw(item)));

  return navigateTo("/checkout");
};

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
];
</script>
