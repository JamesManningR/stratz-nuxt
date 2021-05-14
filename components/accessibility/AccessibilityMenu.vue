<template>
  <section class="accessibility-menu">
    <label>
      Colourblind Theme
      <input
        type="checkbox"
        @change="$store.dispatch('setColorBlind', $event.target.value)"
      />
    </label>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

@Component
export default class AccessibilityMenu extends Vue {}
</script>
