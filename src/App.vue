<template>
  <div id="app">
    <ManyCounters />
  </div>
</template>

<script>
import ManyCounters from "./components/ManyCounters";
export default {
  name: "App",
  components: {
    ManyCounters,
  },
};
</script>

<style lang="sass">
@import './App.sass'
</style>
