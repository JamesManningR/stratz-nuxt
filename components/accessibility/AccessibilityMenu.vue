<template>
  <!-- AccessibilityMenu -->
  <section class="accessibility-menu">
    <form class="accessibility-options" @change="handleFormChange">
      <label class="accessibility-options__label">
        Colourblind Theme
        <input
          class="accessibility-options__input"
          type="checkbox"
        />
      </label>
      <label class="accessibility-options__label">
        Light Theme
        <input
          class="accessibility-options__input"
          type="checkbox"
        />
      </label>
    </form>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class AccessibilityMenu extends Vue {}
</script>
