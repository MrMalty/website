// middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const user = useState("user"); // shared user state, could come from composable or cookie

  if (!user.value) {
    return navigateTo("/login");
  }
});
