<script lang="ts" setup>
import LoginFormComp from "@/components/LoginView/LoginFormComp.vue";
</script>

<template>
  <main>
    <LoginFormComp></LoginFormComp>
  </main>
</template>

<style scoped>
main {
  width: 100dvw;
  height: 100dvh;
  background-image: url(/src/assets/images/login-bg-landscape.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

@media screen and (orientation: portrait) {
  main {
    background-image: url(/src/assets/images/login-bg-portrait.jpg);
  }
}
</style>
