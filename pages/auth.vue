<template>
    <div id="AuthPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/kc_logo.png">
            </NuxtLink>
        </div>

        <div class="max-w-[400px] mx-auto px-2">
            <div class="text-center my-6">Login / Register</div>

<!-- google login section -->
            <button 
                @click="login('google')"
                class="
                    flex 
                    items-center 
                    justify-center 
                    gap-3
                    p-1.5
                    w-full 
                    border 
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
                <img class="w-full max-w-[30px]" src="/google-logo.png">
                <div>Google</div>
            </button>
            <div class="mt-3 mb-3 border-b-2 "/>

<!-- Email Loging Section -->
            <div>
                <form @click="handleLogin">
                <div class="flex items-center border-2 border-[#23AAEF] rounded-md w-full">
                    <input class="w-full" placeholder="Email" type="email"  v-model="email" required/>
                </div>
                <div class="flex items-center border-2 border-[#23AAEF] rounded-md w-full">
                    <input class="w-full mt-2" placeholder="Passowrd" type="password" v-model="password" required/>
                </div>
                <button class="flex items-center justify-center bg-[#0E2167] w-full text-[#FFFFFF] text-[21px] font-semibold p-1.5 rounded-full mt-2" type="submit" :disabled="loading"> {{ loading ? 'Logging in...' : 'Login' }}</button>
                <p v-if="error">{{ error }}</p>
                </form>
            </div>
            <div class="mt-3 mb-3 border-b-2 "/>
            <button class="flex icon=account items-center justify-center bg-[#0E2167] w-full text-[#FFFFFF] text-[21px] font-semibold p-1.5 rounded-full mt-2" type="submit" :disabled="loading">Register</button>
            <p class="text-sm semibold">To register, <NuxtLink to="/register">Click Here.</NuxtLink></p>


        </div>
    </div>
</template>
<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

const handleLogin = async () => {
    try {
      loading.value = true
      error.value = null
      
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value
      });
  
      if (loginError) throw loginError
  
      // Redirect to Confirm Page to check user info
      navigateTo('/');
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  };

watchEffect(() => {
    if (user.value) {
        return navigateTo('/')
    }
});

const login = async (prov) => {
  const { data, error } = await client.auth.signInWithOAuth({
    provider: prov,
    redirectTo: window.location.origin
  });
};
</script>
