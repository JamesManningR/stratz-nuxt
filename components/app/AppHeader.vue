<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/player/141737512">King</router-link>
          <router-link to="/player/40292283">Manning</router-link>
          <router-link to="/player/81907324">Marshall</router-link>
          <router-link to="/player/172514694">Prior</router-link>
          <router-link to="/player/1036643858">Rhodes</router-link>
          <router-link to="/player/87277045">Our Boy</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'nuxt-property-decorator'

@Component
export default class AppHeader extends Vue {}
</script>
