<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";
import { onMounted } from "vue";

const isOpen = ref(false);

useHead({
  title: "Kialla Computers - Services",
});
//
const supabase = useSupabaseClient();
const categories = ref([]);
const frontpageitems = ref([]);

onMounted(async () => {
  const { data, error } = await supabase
    .from("categories")
    .select()
    .order("categoryname", { ascending: true });
  categories.value = data;
  console.log(data, error);
});

onMounted(async () => {
  const { data, error } = await supabase
    .from("products")
    .select()
    .eq("frontpage", "Yes");

  frontpageitems.value = data;
  console.log(data, error);
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Store</template>
    </LandingSectionhead>

    <div class="mt-6 flex flex-cols mx-auto">
      <div class="mt-6 w-[300px] px-6">
        <p class="border-b border-FooterText mb-5">Categories:</p>
        <div v-for="(cat, id) in categories" :key="id" class="">
          <ul>
            <li class="px-4 py-2 font-semibold">
              <a v-if="cat.categoryitems === null">{{ cat.categoryname }}</a>
              <a v-else href="/store/{$cat.id}">{{ cat.categoryname }}</a>
            </li>
            <ul
              v-if="cat.categoryitems"
              class="transition-all duration-300 ease-in-out px-6 py-2 list-none"
            >
              <li
                v-for="item in cat.categoryitems"
                :key="item"
                class="py-1 font-light"
              >
                <NuxtLink to="/store">{{ item }}</NuxtLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <LandingFrontPageProducts v-for="item of frontpageitems" :plan="item" />
      </div>
    </div>
  </LandingContainer>
</template>
