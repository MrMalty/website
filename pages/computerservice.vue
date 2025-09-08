<script setup>import { useHead } from '#app';

useHead({
  title: 'Kialla Computers - Computer Servicing',
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingCsc></LandingCsc>
  </LandingContainer>
</template>