<template>
  <div class="navbar">
    <RouterLink to="/">
      <h1>Ella's Creations</h1>
    </RouterLink>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dddad0;
  z-index: 9;
  text-decoration: none;
}

.navbar h1 {
  font-family: "Rouge Script", cursive;
  font-weight: bold;
  font-size: 50px;
}
</style>
