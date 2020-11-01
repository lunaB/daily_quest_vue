<template>
  <div class="slide">
    <div class="film">
      <transition name="fade" v-for="(item, index) in items" :key="index">
        <img :src="item.image" v-if="index==displayNum"/>
      </transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .slide {
    $h: 200px;
    
    width: 100%;
    height: $h;
    background: #ddd;
    
    .film {
      width: 100%;
      height: $h;
      position: relative;
      img {
        position: absolute;
        width: 100%;
        height: $h;
        object-fit: cover;
        transition: 0.4s;
      }
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
<script>
export default {
  name: 'slide',
  data() {
    return {
      items: [
        {image: "https://images.unsplash.com/photo-1604244648770-b50f95414886?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80"},
        {image: "https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"},
        {image: "https://images.unsplash.com/photo-1604224919770-801be493edb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80"},
        {image: "https://images.unsplash.com/photo-1604215840662-1d68c64452dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2978&q=80"},
      ],
      displayNum: 0,
      timer: null,
    };
  },
  created: function() {
    this.start()
  },
  methods: {
    start: function() {
      this.timer = setInterval(this.next, 3000);
    },
    stop: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },
    next: function() {
      if (this.displayNum == this.items.length-1) {
        this.displayNum = 0
      }else {
        this.displayNum += 1
      }
      
    }
  },
  computed: {
  }
}
</script>