<script setup>
import { useHead } from "#app";

definePageMeta({
  middleware: "auth",
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <div class="">Dashboard</div>
  </LandingContainer>
</template>
