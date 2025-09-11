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

    <div
      class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
    >
      <LandingProducts v-for="item of products" :plan="item" />
    </div>
  </LandingContainer>
</template>
