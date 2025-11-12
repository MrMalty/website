<script setup>
defineProps(["plan"]);
</script>

<template>
  <div>
    <div
      class="flex flex-col items-stretch h-[950px] w-[340px] order-first lg:order-none border-4 border-SpecialBorder border-opacity-30 py-5 px-6 rounded-lg"
    >
      <div class="text-center">
        <h4 class="text-md md:text-lg font-medium text-ServiceHeader">
          {{ plan.name }}
        </h4>
        <p v-if="plan.image" class="flex justify-center">
          <img :src="`/img/products/${plan.image}`" width="250" />
        </p>
        <p class="text-2xl md:text-4xl font-bold text-SpecialPrice">
          {{ plan.spec }}
        </p>
        <p
          class="text-xl lg:text-2xl font-bold text-ServicePriceOrg line-through text-opacity-50"
        >
          {{
            plan.price && typeof plan.price === "object"
              ? plan.price.monthly
              : plan.price
          }}
        </p>
        <p class="text-xs md:text-sm font-bold text-SpecialExp">
          Offer Exp : {{ plan.exp }}
        </p>
        <!-- {
        plan.price.original && (
          <p class="mt-1 text-xl font-medium text-gray-400 line-through md:text-2xl">
            {plan.price.original}
          </p>
        )
      } -->
      </div>
      <ul class="grid mt-4 text-left gap-y-4">
        <li
          v-for="item of plan.features"
          class="flex items-start gap-3 text-ServiceItems"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
      <div class="flex mt-8 mt-auto">
        <LandingLink
          :href="plan.button.link || '#'"
          block
          :styleName="plan.popular ? 'primary' : 'outline'"
          :item="item"
        >
          {{ plan.button.text || "Get Started" }}
        </LandingLink>
      </div>
    </div>
  </div>
</template>
