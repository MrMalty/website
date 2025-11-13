<script setup>
definePageMeta({
  layout: "landing",
});
import { useHead } from "#app";

useHead({
  title: "Kialla Computers - Specials",
});
const specials = [
  {
    name: "MSI Modern 15 F13MG-218AU",
    price: "$1180.00",
    spec: "$1060.00",
    cost: "$825.00",
    popular: true,
    exp: "2025-11-09",
    features: [
      "Intel i7-1355U",
      "15.6inch Screen",
      "16G DDR Memory",
      "512G SSD Hard Drive",
      "Windows 11",
      "",
    ],
    image: "nbm15f13mg218.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery nbm15f13mg21",
    },
  },
  {
    name: "Asus Expertbook P1",
    price: "$1250.00",
    spec: "$1125.00",
    cost: "$875.00",
    popular: true,
    exp: "2025-11-11",
    features: [
      "Intel i5-13420H",
      "15.6inch Screen",
      "16G DDR Memory",
      "512G SSD Hard Drive",
      "Windows 11 pro",
      "",
    ],
    image: "nbasp1503cva-50.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery nbasp1503cva-50",
    },
  },
  {
    name: "AOC 34in 3K Curved Monitor",
    price: "$480.00",
    spec: "$430.00",
    cost: "$335.00",
    popular: true,
    exp: "2025-11-10",
    features: [
      "Screen Szie 34inch",
      "Flat/Curved : Curved",
      "Panel Resolution : 3440x1440",
      "Max Refresh Rate : 180Hz",
      "Inputs : HMDI 2.0 x 2, DisplayPort 1.4 x 1",
      "Audio : Headphone (3.5mm)",
    ],
    image: "moaocu34g4.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery moaocu34g4",
    },
  },
  {
    name: "Asus Expoertbook P5",
    price: "$2220.00",
    spec: "$1998.00",
    cost: "$1550.00",
    popular: true,
    exp: "2025-11-16",
    features: [
      "Intel i5-13420H",
      "14inch Screen",
      "16G DDR Memory",
      "512G M.2 NVME SSD Hard Drive",
      "Windows 11 pro",
      "",
    ],
    image: "nbasp5405csa-41.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery nbasp5405csa-41",
    },
  },
  {
    name: "Guardian Rysen 5 5500",
    price: "$1820.00",
    spec: "$1685.00",
    cost: "$1405.00",
    popular: true,
    exp: "2025-11-16",
    features: [
      "AMD Ryzen 5 7500F AM5 CPU with Fan 3.7Ghz (Upto 5Ghz)",
      "Nvidia RTX5060 8G Video card",
      "32GB DDR5 - 5600mhz (2x 16GB) Memory",
      "1TB NVME M.2 Gen4 SSD",
      "Asus/Gigabyte or MSI B650M Motherboard with Wifi",
      "Cougar MX220 RGB BLACK Case 4x ARGB Fans USB-C",
      "750W 80+ Bronze Power supply",
      "No Windows included (Add Windows 11 as required)",
    ],
    image: "sysgr55050-1t32.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery sysgr55050-1t32",
    },
  },
  {
    name: "Guardian Rysen 5 5500",
    price: "$1265.00",
    spec: "$1165.00",
    cost: "$973.50",
    popular: true,
    exp: "2025-11-16",
    features: [
      "AMD Ryzen 5 5500 6 Core CPU Wraith cooler Upto 4.2Ghz",
      "Asus / Gigabyte AMD Radeon RX6500XT 4GB video card",
      "Crucial or similar 1TB Gen4 NVMe SSD",
      "32GB (2x16G) DDR4-3200 UDIMM Memory",
      "Cougar AIRFACE PURE RGB Black or White Gaming Case",
      "Cougar STC500 500W ATX power supply",
      "No Windows included (Add Windows 11 as required)",
    ],
    image: "sysgr565xt1t32.jpg",
    button: {
      text: "Enquire",
      link: "mailto:sales@kiallacomputers.com.au?Subject=Product Enquery sysgr565xt1t32",
    },
  },
];

// Get today's date, normalized to midnight for accurate comparison
const today = new Date();
today.setHours(0, 0, 0, 0); // Set time to midnight

const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");

const formatted = `${yyyy}-${mm}-${dd}`;

const filteredItems = specials.filter((item) => {
  const itemDate = item.exp;
  // itemDate.setHours(0, 0, 0, 0); // Normalize item's date to midnight
  return itemDate >= formatted;
});

console.log("Items with exp dates greater than today:");
filteredItems.forEach((item) => console.log(item.name, item.exp, formatted));
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Specials</template>
      <template v-slot:desc>Afforable pricing. No Surprises.</template>
    </LandingSectionhead>

    <div
      class="grid justify-self-center justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-screen-lg mt-12"
    >
      <LandingSpecials v-for="item in filteredItems" :plan="item" />
    </div>
  </LandingContainer>
</template>
