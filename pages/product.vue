<script setup>
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Product Enquiry",
});

definePageMeta({
  layout: "landing",
});
defineProps(["item"]);
</script>

<template>
  <LandingContainer>
    <LandingProductForm :item="item"></LandingProductForm>
  </LandingContainer>
</template>
