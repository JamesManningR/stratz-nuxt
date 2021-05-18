<template>
  <main class="profile-page">
    <PlayerProfileHeader :profile="profile" />
    <PlayerMatchesGrid :matches="profile.matches" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { Component } from 'nuxt-property-decorator'
import { PlayerType } from '@altgen/stratz-types'

@Component({
  computed: mapState(['profile']),
  methods: mapActions(['fetchProfile']),
})
export default class PlayerPage extends Vue {
  public profile!: PlayerType

  async fetch({ params, store }) {
    await store.dispatch('fetchProfile', params.id)
  }
}
</script>
