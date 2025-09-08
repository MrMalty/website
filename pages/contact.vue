<script setup>
import { useHead } from '#app';

useHead({
  title: 'Kialla Computers - Contact Us',
});

definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>We are here to help.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-Primary">
          Contact Kialla Computers
        </h2>
        <p class="text-lg leading-relaxed text-PrimaryLight mt-3">
          Have a question or need help? I am here to help. Fill up the form or
          send email.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-PrimaryLight">
            <Icon class="text-IconColor w-4 h-4" name="uil:map-marker" />
            <span>Kialla, Victoria, Australia</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-PrimaryLight">
            <Icon class="text-IconColor w-4 h-4" name="uil:envelope" /><a
              href="mailto:sales@kiallacomputers.com.au"
              >sales@kiallacomputers.com.au</a
            >
          </div>
          <div class="flex items-center mt-2 space-x-2 text-PrimaryLight">
            <Icon class="text-IconColor w-4 h-4 mr-2" name="uil:phone" />
            0457 826 441
          </div>
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
