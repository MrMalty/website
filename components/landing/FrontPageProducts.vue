<script setup>
defineProps(["plan"]);
</script>

<template>
  <div>
    <div class="group relative">
      <img
        :src="plan.image"
        alt="Front of men&#039;s Basic Tee in black."
        class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-60"
      />
      <div class="mt-4 flex justify-between">
        <div>
          <h3 class="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" class="absolute inset-0"></span>
              {{ plan.name }}
            </a>
          </h3>
          <p class="text-sm font-medium text-gray-900">${{ plan.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
