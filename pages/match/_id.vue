<template>
  <div class="container">
    <table v-if="matches.match" class="match">
      <thead>
        <tr>
          <th>Img</th>
          <th>Player</th>
          <th>Hero</th>
          <th>Level</th>
          <th>Networth</th>
          <th>GPM</th>
          <th>Kills</th>
          <th>Deaths</th>
          <th>Assists</th>
        </tr>
      </thead>
      <tbody>
        <match-player-card
          v-for="player in matches.match.players"
          :key="player.steamAccount.id"
          :player="player"
        >
        </match-player-card>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions, mapState } from 'vuex'
import { Component } from 'nuxt-property-decorator'
import { MatchType } from '@altgen/stratz-types'

@Component({
  computed: mapState(['matches']),
  methods: mapActions('matches', ['fetchMatch']),
})
export default class MatchPage extends Vue {
  public matches!: MatchType[]
}
</script>

<style scoped lang="scss">
.match {
  border: 1px solid #ccc;
  border-collapse: collapse;
}
</style>
