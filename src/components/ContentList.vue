<template>
  <div class="content_list">
    <Slide/>
    <div style="height:1000px;">
      test
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .content_list {
    height: 100%;
    width: auto;
    background: #eea;
    overflow-x: hidden;
  }
</style>
<script>
import Slide from "@/components/Slide";

export default {
  name: "content_list",
  components: {
    Slide,
  }
}
</script>