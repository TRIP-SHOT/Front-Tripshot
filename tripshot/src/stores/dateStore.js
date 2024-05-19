import { defineStore } from 'pinia';

export const useDateStore = defineStore('date', {
  state: () => ({
    shotDate: '',
    season: '',
    weather: '',
  }),
  actions: {
    setShotDate(date) {
      this.shotDate = date;
    },
    setSeason(season) {
      this.season = season;
    },
    setWeather(weather) {
      this.weather = weather;
    },
  },
});
