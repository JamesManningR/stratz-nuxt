<template>
  <main>
    <div v-if="profile.steamAccount" class="profile">
      <img
        :src="`https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/${profile.steamAccount.avatar}`"
        :alt="profile.steamAccount.name"
      />
      <h1>{{ profile.steamAccount.name }}</h1>
      <section class="matches">
        <ul class="match-summaries">
          <match-summary-card
            v-for="match in profile.matches"
            :key="match.id"
            :match="match"
          >
          </match-summary-card>
        </ul>
      </section>
    </div>
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
