import { defineStore } from 'pinia';

export const useContentStore = defineStore('content', {
  state: () => ({
    title: '',
    content: '',
  }),
  actions: {
    setTitle(title) {
      this.title = title;
    },
    setContent(content) {
      this.content = content;
    },
  }

});
