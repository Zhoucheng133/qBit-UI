<template>
  <div class="sidebar_content">
    <div :class="store().page==Pages.download ? 'sidebar_item_selected' : 'sidebar_item'" @click="toPage(Pages.download)">
      <i class="pi pi-arrow-circle-down"></i>
      <div class="sidebar_item_label">下载中</div>
    </div>
    <div :class="store().page==Pages.seeding ? 'sidebar_item_selected' : 'sidebar_item'" @click="toPage(Pages.seeding)">
      <i class="pi pi-arrow-circle-up"></i>
      <div class="sidebar_item_label">做种中</div>
    </div>
    <div :class="store().page==Pages.finish ? 'sidebar_item_selected' : 'sidebar_item'" @click="toPage(Pages.finish)">
      <i class="pi pi-check-circle"></i>
      <div class="sidebar_item_label">已完成</div>
    </div>
    <div :class="store().page==Pages.settings ? 'sidebar_item_selected' : 'sidebar_item'" @click="toPage(Pages.settings)" style="margin-top: auto; margin-bottom: 20px;">
      <i class="pi pi-cog"></i>
      <div class="sidebar_item_label">设置</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import store, { Pages } from '@renderer/store';

const toPage=(page: Pages)=>{
  store().page=page;
}

</script>

<style scoped>
.sidebar_content{
  width: 180px;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
}
.sidebar_item_label{
  margin-left: 5px;
  font-size: 14px;
}
.sidebar_item:hover{
  background-color: rgb(235, 235, 235);
}
.sidebar_item, .sidebar_item_selected{
  display: flex;
  align-items: center;
  user-select: none;
  background-color: rgb(245, 245, 245);
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 7px;
  padding-left: 20px;
  padding-bottom: 7px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color linear .2s;
  margin-top: 5px;
}
.sidebar_item_selected{
  background-color: rgb(230, 230, 230);
}
.pi{
  font-size: 13px;
}
</style>