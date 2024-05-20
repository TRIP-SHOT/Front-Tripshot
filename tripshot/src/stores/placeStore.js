import { defineStore } from 'pinia';

export const usePlaceStore = defineStore('place', {
  state: () => ({
    latitude: 0,
    longitude: 0,
    locationName: '',
    spot: ''
  }),
  actions: {
    setLatitude(latitude) {
      this.latitude = latitude;
    },
    setLongitude(longitude) {
      this.longitude = longitude;
    },
    setLocationName(locationName) {
      this.locationName = locationName;
    },
    setSpot(spot) {
      this.spot = spot;
    }
  },
});
