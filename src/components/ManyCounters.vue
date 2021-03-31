<template>
  <div class="form">
    <div>
      <button class="button-plus" action="button" v-on:click="addForm">
        +
      </button>
      <CounterForm
        v-for="(item, index) in counterValues"
        v-bind:key="index"
        v-bind:counterIndex="index"
      />
      <div class="main-container">
        <button class="save" type="button" v-on:click="saveCounters">
          Save
        </button>
        <button class="restore" type="button" v-on:click="restoreCounters">
          Restore
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CounterForm from "./CounterForm.vue";
import * as types from "../store/mutationActionTypes";

export default {
  name: "ManyCounters",

  components: {
    CounterForm,
  },
  computed: mapState({
    counterValues: (state) => state.counterValues,
  }),
  methods: {
    addForm() {
      this.$store.commit(types.ADD_FORM);
    },
    saveCounters() {
      this.$store.commit(types.SAVE_COUNTERS);
    },
    restoreCounters() {
      this.$store.commit(types.RESTORE_COUNTERS);
    },
  },
};
</script>

<style lang="sass" scoped>
@import './ManyForms.sass'
</style>
