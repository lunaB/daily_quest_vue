<template>
  <div class="home">
    <Sidebar/>
    <ContentList/>
  </div>
</template>
<style lang="scss" scoped>
  .home {
    height: 100%;
  }
</style>
<script>
import Sidebar from "@/components/Sidebar";
import ContentList from "@/components/ContentList"

export default {
  name: 'home',
  components: {
    Sidebar,
    ContentList
  },
  data() {
    return {

    };
  },
  methods: {
    
  },
  computed: {
  }
}
</script>