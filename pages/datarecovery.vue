<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Data Recovery</template>
      <template v-slot:desc>We specialize in recovering lost, deleted, corrupted, or inaccessible data
                            from a wide range of storage devices.<br />Whether the cause is accidental deletion, 
                            hardware failure, system crash, or malware infection, our advanced tools and 
                            techniques<br />give you the best chance of restoring valuable information.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-Primary">
        Our Data Recorvery servces include:
      </h2>
      <ul>
        <li>Hard Drive & SSD Recovery</li>
        <li>RAID & Server Recovery</li>
        <li>USB & External Drive Recovery</li>
        <li>Laptop & Desktop Data Retrieval</li>
        <li>Recovery from Malware or Ransomware Attacks</li>
      </ul>  
    </div>
  </LandingContainer>
</template>