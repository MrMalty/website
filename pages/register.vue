<!-- pages/signup.vue -->
<template>
    <div>
      <h2>Create Account</h2>
      
      <form @submit.prevent="handleSignUp">
        <div>
          <label>Email</label>
          <input type="email" v-model="email" required/>
        </div>
  
        <div>
          <label>Password</label>
          <input type="password" v-model="password" required/>
        </div>
  
        <button type="submit" :disabled="loading"> {{ loading ? 'Creating Account...' : 'Sign Up' }}</button>
  
        <p v-if="error">{{ error }}</p>
      </form>
  
      <p> Already have an account? <NuxtLink to="/login">Login</NuxtLink>
      </p>
    </div>
  </template>
  
  <script setup>
  const email = ref('')
  const password = ref('')
  const error = ref(null)
  const loading = ref(false)
  
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()


  const handleSignUp = async () => {
    try {
      loading.value = true
      error.value = null
      
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.value,
        password: password.value
      })
  
      if (signUpError) throw signUpError
  
      // Redirect to dashboard on success
      navigateTo('/')
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