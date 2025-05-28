<!-- pages/signup.vue -->
<template>
      <div id="AuthPage" class="w-full h-[100vh] bg-white">
        <div class="w-full flex items-center justify-center p-5 border-b border-b-gray-300">
            <NuxtLink to="/" class="min-w-[170px]">
                <img width="170" src="/kc_logo.png">
            </NuxtLink>
        </div>

        <div class="max-w-[400px] mx-auto px-2">

          <div>
            <h2>Create Account</h2>
      
            <form @submit.prevent="handleSignUp">
            <div
              class="flex items-center border-2 border-[#23AAEF] rounded-md w-full"
            >
              <label>First Name</label>
              <input class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" type="text" v-model="fname" required/>
            </div>

            <div
              class="flex items-center border-2 border-[#23AAEF] rounded-md w-full"
            >
              <label>Last Name</label>
              <input class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" type="text" v-model="lname" required/>
            </div>

            <div
              class="flex items-center border-2 border-[#23AAEF] rounded-md w-full"
            >
              <label>Email</label>
              <input class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" type="email" v-model="email" required/>
            </div>
  
            <div
              class="flex items-center border-2 border-[#23AAEF] rounded-md w-full"
            >
             <label>Password</label>
              <input class="w-full placeholder-gray-400 text-sm pl-3 focus:outline-none" type="password" v-model="password" required/>
            </div>
  
            <button class="flex items-center justify-center bg-[#0E2167] w-full text-[#FFFFFF] text-[21px] font-semibold p-1.5 rounded-full mt-4" type="submit" :disabled="loading"> {{ loading ? 'Creating Account...' : 'Sign Up' }}</button>
  
            <p v-if="error">{{ error }}</p>
            </form>
  
            <p> Already have an account? <NuxtLink to="/auth">Login</NuxtLink>
            </p>
          </div>
        </div>
      </div>div>
  </template>
  
  <script setup>
  const email = ref('')
  const password = ref('')
  const fname = ref('')
  const lname = ref('')
  const error = ref(null)
  const loading = ref(false)
  
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()


  const handleSignUp = async () => {
    try {
      loading.value = true
      error.value = null
      
      const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        last_name: lastName,
      },
      emailRedirectTo: `${requestUrl.origin}/auth/callback`,
    },
  });

//      const { data, error: signUpError } = await supabase.auth.signUp({
//        email: email.value,
//        password: password.value,
//        options: {
//          data: {
//            first_name: fname,
//            last_name: lname,
//          },
//        },
//      })
  
      if (signUpError) throw signUpError
  
      // Redirect to dashboard on success
      navigateTo('/auth')
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }
  
  // Redirect if already logged in
  onMounted(() => {
    if (user.value) {
      navigateTo('/')
    }
  })
  </script>