<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>
<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}
#app {
  height: 100%;
}
</style>
<script>
import Header from "@/components/Header";
// import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    // Footer,
  }
}
</script>