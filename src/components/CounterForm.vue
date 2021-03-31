<template>
  <div>
    <form class="form-container" v-on:submit="onSubmit">
      <input
        class="input-area"
        type="text"
        placeholder="Enter number"
        v-model="counterValue"
        v-on:keypress="isNumber($event)"
      />
      <ActionButtons
        v-on:increaseCounter="increaseCounter"
        v-on:decreaseCounter="decreaseCounter"
      />
    </form>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import ActionButtons from "./ActionButtons";

export default {
  name: "CounterForm",
  props: {
    counterIndex: {
      type: Number,
    },
  },
  computed: {
    counterValue: {
      get() {
        return this.$store.state.counterValues[this.counterIndex].savedCounter;
      },
      set(value) {
        console.log("set: ", this.counterIndex, value);
        this.$store.commit("updateCounter", {
          counterIndex: this.counterIndex,
          value: value,
        });
      },
    },
  },

  methods: {
    increaseCounter() {
      this.$store.dispatch("increaseCounter", this.counterIndex);
    },
    decreaseCounter() {
      this.$store.dispatch("decreaseCounter", this.counterIndex);
    },
    isNumber: function (evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    onSubmit: function (event) {
      event.preventDefault();
    },
  },
  components: { ActionButtons },
};
</script>

<style lang="sass">
@import "./CounterForm.sass"
</style>
