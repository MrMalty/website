<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    name: "Computer Service",
    price: "$66/H",
    popular: false,
    features: [
      "Computer Repairs & Upgrades",
      "Network Setup & Support",
      "Software Isntallation & Support",
      "IT Security Solutions",
      "Printer Setups & Configuration",
      "iPad and Tablet Setup",
    ],
    button: {
      text: "Request Service",
      link: "#",
    },
  },
  {
    name: "Virus Cleaning",
    price: "$120/H",
    popular: false,
    features: [
      "Backup Import Files",
      "Scan and Clean PC",
      "Malware Cleaning",
      "Reset Browser",
      "Update PC OS",
      "Install Reputable Antivirus",
      "Schedule Scans & Updates",
    ],
    button: {
      text: "Request Virus Clean",
      link: "/",
    },
  },
  {
    name: "Data Recovery",
    price: "$220/H",
    popular: false,
    features: [
      "Hard Drive & SSD Data Recovery",
      "USB & External Hard Drive Recovery",
      "Laptop & Desktop Data Retrieval",
      "Malware or Ransomware Attacks Recovery",
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
      class="grid md:grid-flow-col gap-10 mx-auto max-w-screen-lg mt-12"
    >
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>
