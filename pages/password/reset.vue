<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')

const requestResetPassword = async () => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email.value, {
    redirectTo: 'https://kiallacomputer.netlify.app/password/update',
  })
  if (error) console.log(error)
  alert("If you email address is registed with our database you will receive a link in your email, please check your junk/spam folder.")
  navigateTo('/auth')
}

</script>

<template>
    <div id="UpdatePage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/kc_logo.png">
            </NuxtLink>
        </div>

        <div class="max-w-[400px] mx-auto px-2 mt-10">
            <input class="w-full text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none bg-[#FFFFFF]"
                placeholder="Enter your account email address?"
                v-model="email"
                type="email"
            />
            <button class="flex items-center justify-center bg-[#0E2167] w-full text-[#FFFFFF] text-[21px] font-semibold p-1.5 rounded-full mt-4" @click="requestResetPassword">
                Request Password Reset
            </button>
        </div>
    </div>
</template>