import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      brews: [],
      selectedBrew: '',
      selectedIndex: '',
      favouriteBrews: [],
    },

    mounted() {
      this.getBrews();
    },

    methods: {
      getBrews: function() {
        fetch('https://api.punkapi.com/v2/beers')
        .then(response => response.json())
        .then(data => this.brews = data)
      },
      brewSelect: function() {
        this.selectedBrew = this.brews[this.selectedIndex];
      },
      addFavourite: function() {
        this.favouriteBrews.push(this.selectedBrew);
      },
      deleteFavourite: function() {
        this.favouriteBrews = this.favouriteBrews.splice([this.selectedIndex]);
      }
    }
  })
})
