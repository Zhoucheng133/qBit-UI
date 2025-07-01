<template>
  <div class="dragArea"></div>
  <div style="margin-top: 30px;">Hello World!!!</div>
</template>

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