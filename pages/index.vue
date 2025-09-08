<script setup>
definePageMeta({
  layout: "landing",
});

import { useHead } from '#app';

useHead({
  title: 'Kialla Computers',
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
  </LandingContainer>
</template>
