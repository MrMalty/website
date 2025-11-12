// composables/useAuth.ts
export const useAuth = () => {
  const user = useState("user", () => null);

  const login = async (email: string, password: string) => {
    // Example: replace with your real API
    if (email === "sales@kiallacomputers.com.au" && password === "1234") {
      user.value = { email };
      return true;
    }
    return false;
  };

  const logout = () => {
    user.value = null;
    navigateTo("/login");
  };

  return { user, login, logout };
};
