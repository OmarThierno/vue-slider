
const {createApp} = Vue;

createApp({
  data() {
    return {
      images: [
        {
          image: "img/01.webp",
          title: "Marvel's Spiderman Miles Morale",
          text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
        },
        {
          image: "img/02.webp",
          title: "Ratchet & Clank: Rift Apart",
          text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
        },
        {
          image: "img/03.webp",
          title: "Fortnite",
          text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        },
        {
          image: "img/04.webp",
          title: "Stray",
          text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
        },
        {
          image: "img/05.webp",
          title: "Marvel's Avengers",
          text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
        },
      ],
      activeIndex: 0,
      activeClass: true,
      clock: null,
      isRunRight: true,
    }
  },created() {
    clock = setInterval(() => {
      this.showNext()
    }, 3000)
  },
  methods: {
    showNext: function() {
      if(this.activeIndex < this.images.length - 1) {
        this.activeIndex++;
      } else {
        this.activeIndex = 0;
      }
    },
    showPrev: function() {
      if(this.activeIndex > 0) {
        this.activeIndex--;
      } else {
        this.activeIndex = this.images.length - 1;
      }
    },
    showThumbnail: function(index) {
      if(index === this.activeIndex) {
        this.activeClass = true;
      } else {
        this.activeClass = false;
      }
    },
    stopPlay: function() {
      if (clock === null && !this.isRunRight) {
        clock = setInterval(() => {
          this.showNext()
        }, 3000);
        this.isRunRight = true;
      } else {
        clearInterval(clock);
        clock = null;
        this.isRunRight = false;
      }
    },
    reverse: function() {
      if (clock !== null && this.isRunRight) {
        clearInterval(clock)
        clock = setInterval(() => {
          this.showPrev()
        }, 3000);
        this.isRunRight = false;
      } else if (clock !== null && !this.isRunRight) {
        clearInterval(clock)
        clock = setInterval(() => {
          this.showNext()
        }, 3000);
      }
    }
  }
}).mount('#app')