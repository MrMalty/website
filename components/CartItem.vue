<template>
  <div class="flex justify-start my-2">
    <div class="my-auto">
      <div
        @mouseenter="ishover = true"
        @mouseleave="isHover = false"
        class="flex items-center justify-start p-0.5 cursor-pointer"
      >
        <div
          @click="isSelected = !isSelected"
          class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
          :class="[
            isHover ? 'border-[#FD374F]' : 'border-[#23AAEF]',
            isSelected ? 'bg-[#0E2167]' : '',
          ]"
        >
          <div class="h-[8px] w-[8px] rounded-full bg-[#B7CEE2]" />
        </div>
      </div>
    </div>
    <img class="rounded-md md:w-[90px] w-[50px]" :src="product.url" />
    <div class="overflow-hidden pl-2 w-full">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center justify-between truncate">
          <span
            class="sm:block hidden bg-[#FD374F] text-[#FFFFFF] text-[12px] font-semibold px-1.5 rounded-sm min-w-[80px]"
            >Welcome Deal</span
          >
          <div class="truncate sm:pl-2">{{ product.title }}</div>
        </div>
        <button
          @click="removeFromCart()"
          class="mx-3 sm:block hidden -mt-0.5 hover:text-red-500"
        >
          <Icon name="material-symbols:delete-outline" size="20" />
        </button>
      </div>
      <div class="text-xl font-semibold">
        $<span class="font-bold">{{ product.price / 100 }}</span>
      </div>
      <p class="text-[#0E2167] text-xs font-semibold pt-1">
        Free 11-day delivery over $100.00
      </p>
      <p class="text-[#0E2167] text-xs font-semibold pt-1">Free Shipping</p>
      <div class="flex items-center justify-end">
        <button
          @click="removeFromCart()"
          class="sm:hidden block -mt-0.5 hover:text-red-500"
        >
          <Icon name="material-symbols:delete-outline" size="20" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

const props = defineProps(["product", "selectedArray"]);
const { product, selectedArray } = toRefs(props);

const emit = defineEmits(["selectedRadio"]);

let isHover = ref(false);
let isSelected = ref(false);

const removeFromCart = () => {
  userStore.cart.forEach((prod, index) => {
    if (prod.id === product.value.id) {
      userStore.cart.splice(index, 1);
    }
  });
};

watch(
  () => isSelected.value,
  (val) => {
    emit("selectedRadio", { id: product.value.id, val: val });
  }
);
</script>
