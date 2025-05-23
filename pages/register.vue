<template>
  <div id="RegisterPage" class="w-full h-[100vh] bg-white">
    <div
      class="w-full flex items-center justify-center p-5 border-b border-b-gray-300"
    >
      <NuxtLink to="/" class="min-w-[170px]">
        <img width="170" src="/kc_logo.png" />
      </NuxtLink>
    </div>

    <div class="max-w-[400px] mx-auto px-2">
      <div class="text-center my-6">Register New User</div>
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
          placeholder="Password"
          type="password"
          v-model="Password"
        />
      </div>
      <div>
        <button
          @click="signUp"
          class="flex bg-[#B7CEE2] mb-5 mt-5 items-center justify-center gap-3 p-1.5 w-full border hover:bg-gray-100 rounded-full text-lg font-semibold"
        >
          <div>Submit</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const signUp = async (data) => {
    try {
  const { data, error} = await supabase.auth.signUp({
     email: email.value,
     password: password.value,
  })
  if (error) throw error;
  } catch(error) {
    console.error(error)
  }
  return navigateTo("/");
};
</script>
