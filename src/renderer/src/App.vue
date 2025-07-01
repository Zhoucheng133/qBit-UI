<template>
  <div class="dragArea"></div>
  <h1 class="text-3xl font-bold underline mt-[30px]">Hello world!</h1>
  <Button size="small">按钮</Button>
</template>

<script setup lang="ts">
import Button from "primevue/button";
</script>

<style scoped>
.dragArea{
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  -webkit-app-region: drag;
}
</style>