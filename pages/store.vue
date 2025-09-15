<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";
import { onMounted } from "vue";

useHead({
  title: "Kialla Computers - Services",
});
//
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
        <p class="border-b border-FooterText mb-5">Catergories:</p>
        <div v-for="cat in catergories" :key="catergories.id" class="">
          {{ cat.catergory }}
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
