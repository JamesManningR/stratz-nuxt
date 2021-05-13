<template>
  <main class="profile-page">
    <PlayerProfileHeader :profile="profile" />
    <PlayerMatchesGrid :matches="profile.matches" />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { Component } from 'vue-property-decorator'
import { PlayerType } from '@altgen/stratz-types'

@Component({
  computed: mapState(['profile']),
  methods: mapActions(['fetchProfile']),

  async fetch({ params, store }) {
    await store.dispatch('fetchProfile', params.id)
  },
})
export default class PlayerPage extends Vue {
  public profile!: PlayerType
}
</script>

<style scoped lang="scss">
$img-overlap: 2.5em;
</style>
