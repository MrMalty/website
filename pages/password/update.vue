<script setup lang="ts">
const supabase = useSupabaseClient()
const newPassword = ref('')

const updateUserPassword = async () => {
  const { data, error } = await supabase.auth.updateUser({
    password: newPassword.value
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

        <div class="max-w-[400px] mx-auto px-2 mt-10">
            <input
                v-model="newPassword"
                type="password"
            />
            <button @click="updateUserPassword">
                Update Password
            </button>
        </div>
    </div>
</template>