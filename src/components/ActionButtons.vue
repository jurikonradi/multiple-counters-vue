<template>
  <div class="flex">
    <button type="button" v-on:click="increaseCounter">Increase</button>
    <button type="button" v-on:click="decreaseCounter">Decrease</button>
  </div>
</template>

<script>
export default {
  name: "ActionButtons",
  methods: {
    increaseCounter() {
      this.$emit("increaseCounter");
    },
    decreaseCounter() {
      this.$emit("decreaseCounter");
    },
  },
};
</script>

<style lang="sass">
@import "./CounterForm.sass"
</style>
