<template>
  <div class="form">
    <div v-if="isLoading">Loading data from DB...</div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-if="!isLoading">
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

export default {
  name: "ManyCounters",
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },

  components: {
    CounterForm,
  },
  computed: mapState({
    counterValues: (state) => state.counterValues,
  }),
  methods: {
    addForm() {
      this.$store.dispatch("addForm");
    },
    saveCounters() {
      this.$store.dispatch("saveCounters");
    },
    restoreCounters() {
      this.$store.dispatch("restoreCounters");
    },
  },
};
</script>

<style lang="sass" scoped>
@import './ManyForms.sass'
</style>
