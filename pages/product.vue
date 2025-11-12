<script setup>
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Data Recovery",
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
