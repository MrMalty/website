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
                            from a wide range of storage devices. Whether the cause is accidental deletion, 
                            hardware failure, system crash, or malware infection, our advanced tools and 
                            techniques give you the best chance of restoring valuable information.</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-Primary">
        Empowering small business and home offices to achieve their goals.
      </h2>
      <p class="text-lg leading-relaxed text-PrimaryLight">
        We're a small team! We come from diverse backgrounds, bringing different
        personalities, experiences and skills to the job. This is what makes our
        team so special.
      </p>
    </div>
  </LandingContainer>
</template>