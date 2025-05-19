<template>
  <div id="AuthPage" class="w-full h-[100vh] bg-white text-[#0E2167]">
    <div
      class="w-full flex items-center justify-center p-5 border-b border-b-gray-300"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <img width="170" src="/kc_logo.png" />
      </NuxtLink>
    </div>

    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Login / Register</div>
      <div>Username:</div>
      <div
        class="flex items-center border-2 border-[#23AAEF] rounded-md w-full"
      >
        <input
          class="w-full placeholder-[#23AAEF] text-sm pl-3 focus:outline-none h-8"
          placeholder="Username"
          type="text"
          v-model="Username"
        />
      </div>
      <div>Password:</div>
      <div
        class="flex items-center border-2 border-[#23AAEF] rounded-md w-full"
      >
        <input
          class="w-full placeholder-[#23AAEF] text-sm pl-3 focus:outline-none h-8"
          placeholder="Password *****"
          type="password"
          v-model="Password"
        />
      </div>
      <div>
        <button
          @click="login('email')"
          class="flex bg-[#B7CEE2] mb-5 mt-5 items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
        >
          <div>Submit</div>
        </button>
      </div>

      <!--<button
        @click="login('google')"
        class="flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
      >
        <img class="w-full max-w-[30px]" src="/google-logo.png" />
        <div>Google</div>
      </button>-->

      <!-- <button
        @click="login('github')"
        class="mt-4 flex items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
      >
        <img class="w-full max-w-[30px]" src="/github-logo.png" />
        <div>Github</div>
      </button> -->
      <button
        @click="register('register')"
        class="flex bg-[#B7CEE2] mb-5 mt-5 items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
      >
        <div>Register with Email</div>
      </button>
    </div>
  </div>
</template>

<script setup>
// const client = useSupabaseClient();
// const user = useSupabaseUser();

let user = ref("");

// watchEffect(() => {
//   if (user.value) {
//     return navigateTo("/");
//   }
// });

const register = () => {
  return navigateTo("/register");
};

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
  });
};
</script>
