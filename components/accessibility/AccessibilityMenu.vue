<template>
  <section class="accessibility-menu">
    <label>
      Colourblind Theme
      <!-- <input type="checkbox" @change="setColorBlind($event)" /> -->
    </label>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AccessibilityMenu extends Vue {
  // setColorBlind(evt): void {
  //   this.$state.dispatch('setColorBlind', evt.target.value)
  // }
}
</script>
