<template>
  <nav class="sidebar" v-bind:class="{ fold: fold }">
    <div class="fixed">
      <div class="title">
        <div>추천뭔가</div>
        <button @click="fold = !fold">확대축소</button>
      </div>
      <div>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            {{index}}. {{ item.message }}
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style lang="scss" scoped>
  .sidebar {
    $w: 230px;
    $fw: 80px;
    
    width: $w;
    height: 100%;
    float: left;
    background: #433;
    color: #fff;
    transition: 0.4s;
    .fixed {
      background: #433;
      position: fixed;
      width: $w;
      height: 100%;
      transition: 0.4s;
      .title {
        width: 100%;
        height: 20px;
        div {
          height: 20px;
          float: left;
        }
        button {
          height: 20px;
          float: right;
        }
      }
    }
    &.fold {
      width: $fw;
      .fixed {
        width: $fw;
        .title{
          text-align: center;
          div {display: none;}
          button {float: none;}
        }
      }
    }
  }
</style>
<script>
export default {
  name: 'sidebar',
  data() {
    return {
      fold: true,
      items: [
        {message: "adfsa"}
      ]
    };
  },
  methods: {
  },
  computed: {
  }
}
</script>