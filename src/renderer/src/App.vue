<template>
  <div class="dragArea"></div>
  <div class="content">
    <SideBar/>
    <div class="view"></div>
  </div>
</template>

<script setup lang="ts">
import SideBar from './components/sidebar.vue';
</script>

<style scoped>
.view{
  height: calc(100vh - 50px);
  width: 100%;
  background-color: red;
  margin-top: 40px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: white;
  overflow: hidden;
}
.content{
  display: flex;
}
.dragArea{
  position: fixed;
  top: 0;
  left: 0;
  height: 30px;
  width: 100%;
  -webkit-app-region: drag;
}
</style>