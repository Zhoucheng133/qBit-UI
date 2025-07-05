<template>
  <div class="download_content">
    <Toolbar class="download_toolbar">
      <template #start>
        <Button icon="pi pi-plus" class="mr-2" severity="secondary" text size="small" />
        <Button icon="pi pi-check-square" class="mr-2" severity="secondary" text size="small" />
      </template>
    </Toolbar>
    <div class="download_tasks_content">
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Toolbar, Button } from 'primevue';
</script>

<style scoped>
.download_tasks_content{
  width: 100%;
  overflow-y: auto;
}
.download_toolbar{
  margin: 5px;
  padding: 5px 5px 5px 5px;
  border-radius: 10px;
}
</style>