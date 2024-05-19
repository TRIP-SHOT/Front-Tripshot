import { defineStore } from 'pinia';

export const useImgStore = defineStore('img', {
  state: () => ({
    imgFile: '',
  }),
  actions: {
    setImgFile(file) {
      this.imgFile = file;
    },
  },
});
