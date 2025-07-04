import { defineStore } from "pinia";
import { ref } from "vue";

export enum Pages{
  download,
  seeding,
  finish,
  settings,
}

export default defineStore("index", ()=>{
  const page=ref(Pages.download);

  return {
    page,
  }
})