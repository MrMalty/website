<template>
  <MainLayout>
    <div id="CheckoutPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-xl font-semibold mb-2">Shipping Address</div>
            <div v-if="false">
              <NuxtLink
                to="/address"
                class="flex items-center pb-2 text-blue-500 hover:text-red-400"
              >
                <icon name="mdi:plus" size="18" class="mr-2" />
                Update Address
              </NuxtLink>
              <div class="pt-2 border-t">
                <div class="underline pb-1">Delivery Address</div>
                <ul class="text-xs">
                  <li class="flex items-center gap-2">
                    <div>Contact Name:</div>
                    <div class="font-bold">Darren Waack</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Address:</div>
                    <div class="font-bold">5 Tobourie st</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>City:</div>
                    <div class="font-bold">Kialla</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Post Code:</div>
                    <div class="font-bold">3631</div>
                  </li>
                  <li class="flex items-center gap-2">
                    <div>Country:</div>
                    <div class="font-bold">Australia</div>
                  </li>
                </ul>
              </div>
            </div>
            <NuxtLink
              v-else
              to="/address"
              class="flex items-center text-blue-500 hover:text-red-400"
            >
              <icon name="mdi:plus" size="18" class="mr-2" />
              Add New Address
            </NuxtLink>
          </div>
          <div ID="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CheckoutItem :product="product" />
            </div>
          </div>
        </div>

        <div class="md:hidden block my-4" />

        <div class="md:w-[35%]">
          <div id="PlaceOrder" class="bg-white round-lg p-4">
            <div class="text-2xl font-exrtabold mb-2">Summary</div>
            <div class="flex items center justify-between my-4">
              <div>Total Shipping</div>
              <div>Free</div>
            </div>

            <div class="border-t" />

            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font semibold">
                $<span class="font-extrabold">{{ total / 100 }}</span>
              </div>
            </div>

            <form @submit.prevent="pay()">
              <div
                class="border border-grey-500 p-2 rounded-sm"
                id="card-element"
              />
              <p
                id="card-error"
                role="alert"
                class="text-red-700 text-center font-semibold"
              />
              <button
                :disabled="isProcessing"
                type="submit"
                class="mt-4 bg-gradient-to-r from-[#F9D36B] to-[#F7E5B9] w-full text-[#535960] text-[21px] font-semibold p-1.5 rounded-full"
                :class="isProcessing ? 'opacity-70' : 'opacity-100'"
              >
                <Icon v-if="isProcessing" name="eos-icons:loading" />
                <div v-else>Place Order</div>
              </button>
            </form>
          </div>
          <div class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2 mt-2">Ella's Creations</div>
            <p class="my-2">
              Ella's Creations keeps your information and payment safe
            </p>
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
const route = useRoute();

let stripe = null;
let elements = null;
let card = null;
let form = null;
let total = ref(0);
let clientSecret = null;
let currentAddress = ref(null);
let isProcessing = ref(false);

onMounted(() => {
  isProcessing.value = true;

  userStore.checkout.forEach((item) => {
    total.value += item.price;
  });
});

watch(
  () => total.value,
  () => {
    if (total.value > 0) {
      stripeInit();
    }
  }
);

const stripeInit = async () => {};

const pay = async () => {};

const createOrder = async (StripeID) => {};

const showError = (errorMsgText) => {};

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
