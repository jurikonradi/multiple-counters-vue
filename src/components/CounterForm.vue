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
import * as types from "../store/mutationActionTypes";
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
        this.$store.commit(types.UPDATE_COUNTER, {
          counterIndex: this.counterIndex,
          value: value,
        });
      },
    },
  },

  methods: {
    increaseCounter() {
      this.$store.commit(types.INCREASE_COUNTER, this.counterIndex);
    },

    decreaseCounter() {
      this.$store.commit(types.DECREASE_COUNTER, this.counterIndex);
    },

    isNumber: function (event) {
      event = event ? event : window.event;
      var charCode = event.which ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        event.preventDefault();
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
