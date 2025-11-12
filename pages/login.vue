<!-- pages/login.vue -->
<script setup>
import { useHead } from "#app";

definePageMeta({
  layout: "landing",
});
const { login } = useAuth();
const email = ref("");
const password = ref("");
const error = ref("");

const handleLogin = async () => {
  const success = await login(email.value, password.value);
  if (success) navigateTo("/dashboard");
  else error.value = "Invalid credentials";
};
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Admin Login</template>
    </LandingSectionhead>

    <div class="login text-center mt-5">
      <div class="mb-5">
        <input
          v-model="email"
          placeholder="Email"
          class="sm:w-full lg:w-1/2 px-4 py-3 border-2 placeholder:text-InputPrimary rounded-md outline-none focus:ring-4 border-InputBorder focus:border-InputBorderFocus ring-InputBorderRing"
        />
      </div>
      <div class="mb-5">
        <input
          v-model="password"
          placeholder="Password"
          type="password"
          class="sm:w-full lg:w-1/2 px-4 py-3 border-2 placeholder:text-InputPrimary rounded-md outline-none focus:ring-4 border-InputBorder focus:border-InputBorderFocus ring-InputBorderRing"
        />
      </div>

      <button
        @click="handleLogin"
        class="bg-ButtonPrimaryBg text-ButtonPrimaryText hover:bg-ButtonPrimaryHover hover:border-ButtonPrimaryHoverB hover:text-ButtonPrimaryHoverText border-2 border-transparent rounded text-center transition focus-visible:ring-2 px-6 py-3 ring-offset-2 sm:w-full lg:w-1/2 font-bold ring-gray-200"
      >
        Login
      </button>
      <p v-if="error">{{ error }}</p>
    </div>
  </LandingContainer>
</template>
