<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Services",
});
const products = [
  {
    name: "Computer Service",
    price: "66",
    popular: true,
    image: "",
    features: [
      "Computer Repairs & Upgrades",
      "Network Setup & Support",
      "Software Isntallation & Support",
      "IT Security Solutions",
      "Printer Setups & Configuration",
      "iPad and Tablet Setup",
    ],
    button: {
      text: "Call to Order",
      link: "#",
    },
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Services</template>
      <template v-slot:desc>Simple & Afforable pricing. No Surprises.</template>
    </LandingSectionhead>

    <div class="grid md:grid-flow-col gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingProducts v-for="item of products" :plan="item" />
    </div>
  </LandingContainer>
</template>
