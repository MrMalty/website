<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')

const requestResetPassword = async () => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: 'https://kiallacomputer.netlify.com/password/update',
  })
  if (error) console.log(error)
}
</script>

<template>
    <div id="ResetPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/kc_logo.png">
            </NuxtLink>
        </div>

        <div class="max-w-[400px] mx-auto px-2">
            <input class="w-full text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none bg-[#FFFFFF]"
                v-model="email"
                type="email"
            />
            <button @click="requestResetPassword">
                Request Password Reset
            </button>
        </div>
    </div>
</template>