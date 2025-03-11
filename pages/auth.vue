<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white">
    <div
      class="w-full flex items-center justify-center p-5 border-b border-b-gray-300"
    >
      <NuxtLink to="/" class="min-w-[200px]">
        <img width="200" src="/public/images/Ellas-Creations.png" />
      </NuxtLink>
    </div>

    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Login / Register</div>

      <button
        @click="login('google')"
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rouded-full text-lg font-semibold"
      >
        <img
          src="/public/images/google-logo.png"
          class="w-[20px] max-w-[20px]"
        />
        <div>Google</div>
      </button>
    </div>
  </div>
</template>

<script setup>
// const client = useSupabaseClient()
// const user = useSupabaseUser()

// watchEffect(() => {
//     if (User.value) {
//         return navigateTo('/')
//     }
// })
const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
  });
};
</script>
