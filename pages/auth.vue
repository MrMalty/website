<template>
    <div id="AuthPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/kc_logo.png">
            </NuxtLink>
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div class="max-w-[400px] mx-auto px-2">
            <div class="text-center my-6">Provider Login</div>

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
                    border-2
                    border-[#0E2167]
                    hover:bg-gray-100
                    rounded-full
                    text-lg
                    font-semibold
                "
            >
                <img class="w-full max-w-[30px]" src="/google-logo.png">
                <div>Google</div>
            </button>

<!-- Email Loging Section -->
            <div class="text-center my-6">Email Login</div>
            <div>
                <form >
                <div class="flex items-center border border-[#0E2167] border-grey-500 hover:bg-gray-100 rounded-md w-full mt-2">
                    <input class="w-full text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none bg-[#FFFFFF]" placeholder="Email" type="email"  v-model="email" required/>
                </div>
                <div class="flex items-center border border-[#0E2167] border-grey-500 hover:bg-gray-100 rounded-md w-full mt-2">
                    <input class="w-full text-gray-800 border text-sm border-[#EFF0EB] rounded-lg p-3 placeholder-gray-500 focus:outline-none bg-[#FFFFFF]" placeholder="Passowrd" type="password" v-model="password" required/>
                </div>
                <button
                @click="signIn"
                :disabled="loading"
                type="submit"
                class="flex items-center justify-center bg-[#FFFFFF] w-full border-2 hover:bg-gray-100 border-[#0E2167] text-[#0E2167] text-[21px] font-semibold p-1.5 rounded-full mt-2"
                :class="loading ? 'opacity-70' : 'opacity-100'"
              >
                <Icon v-if="loading" name="eos-icons:bubble-loading" />
                <div v-else>Log In</div>
              </button>
                <p v-if="errorMsg">{{ errorMsg }}</p>
                </form>
            </div>
            <div class="flex">
                <div class="flex items-center justify-center bg-[#FFFFFF] w-1/2 text-[#0E2167] text-[12px] font-semibold p-1.5 mt-2">
                    <icon name="mdi:lock-reset" /><NuxtLink to="/password/reset">Forgot Password</NuxtLink>
                </div>
                <div class="flex items-center justify-center bg-[#FFFFFF] w-1/2 text-[#0E2167] text-[12px] font-semibold p-1.5 mt-2">
                    <icon name="mdi:account" /><NuxtLink to="/signup">Sign Up</NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

const email = ref("");
const password = ref("");
const errorMsg = ref(null);

async function signIn() {
    const { data, error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
      redirectTo: window.location.origin
    });
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
