<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Services",
});
const pricing = [
  {
    name: "Computer Service",
    price: "$66/H",
    popular: true,
    features: [
      "Call Fee $99.00 inc 1st hour",
      "Computer Repairs & Upgrades",
      "Network Setup & Support",
      "Software Isntallation & Support",
      "IT Security Solutions",
      "Printer Setups & Configuration",
      "iPad and Tablet Setup",
    ],
    button: {
      text: "Request a Service",
      link: "computerservice",
    },
  },
  {
    name: "Virus Cleaning",
    price: "$120/H",
    popular: true,
    features: [
      "Backup Import Files",
      "Scan and Clean PC",
      "Malware Cleaning",
      "Reset Browser",
      "Update PC OS",
      "Install Reputable Antivirus",
    ],
    button: {
      text: "Request Virus Clean",
      link: "virusclean",
    },
  },
  {
    name: "Data Recovery",
    price: "$220/H",
    popular: true,
    features: [
      "Hard Drive & SSD Data Recovery",
      "USB/External Hard Drive Recovery",
      "Laptop & Desktop Data Retrieval",
      "Malware/Spam Attacks Recovery",
    ],
    button: {
      text: "Request Data Recovery",
      link: "datarecovery",
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
      class="grid justify-self-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-lg mt-12"
    >
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>
